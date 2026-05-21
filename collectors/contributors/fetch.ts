import { github } from "../../src/github/client";
import { loadRepos } from "../../src/io/dataset";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";

export async function fetchContributors() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const contributors = await github.paginate(github.repos.listContributors, {
      owner: repo.owner,
      repo: repo.name,

      per_page: 100,
    });

    all.push(
      ...contributors.map((contributor: any) => ({
        repo: `${repo.owner}/${repo.name}`,

        contributor,
      })),
    );
  }

  return all;
}
