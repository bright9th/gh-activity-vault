import { github } from "../../src/github/client";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";
import { loadRepos } from "../../src/io/dataset";

export async function fetchBranches() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const branches = await github.paginate(github.repos.listBranches, {
      owner: repo.owner,
      repo: repo.name,

      per_page: 100,
    });

    all.push(
      ...branches.map((branch: any) => ({
        repo: `${repo.owner}/${repo.name}`,

        branch,
      })),
    );
  }

  return all;
}
