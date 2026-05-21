import { github } from "../../src/github/client";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";
import { loadRepos } from "../../src/io/dataset";

export async function fetchDeployments() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const deployments = await github.paginate(github.repos.listDeployments, {
      owner: repo.owner,
      repo: repo.name,

      per_page: 100,
    });

    all.push(
      ...deployments.map((deployment: any) => ({
        repo: `${repo.owner}/${repo.name}`,

        deployment,
      })),
    );
  }

  return all;
}
