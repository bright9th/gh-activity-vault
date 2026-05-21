import { github } from "../../src/github/client";
import { loadRepos } from "../../src/io/dataset";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";

export async function fetchEnvironments() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    try {
      const response = await github.repos.getAllEnvironments({
        owner: repo.owner,
        repo: repo.name,
      });

      const environments = response.data.environments ?? [];

      all.push(
        ...environments.map((environment: any) => ({
          repo: `${repo.owner}/${repo.name}`,

          environment,
        })),
      );
    } catch {
      // some repos may not support environments
    }
  }

  return all;
}
