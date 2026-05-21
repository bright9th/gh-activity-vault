import { github } from "../../src/github/client";
import { loadRepos } from "../../src/io/dataset";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";

export async function fetchWorkflowRuns() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const response = await github.paginate(
      github.actions.listWorkflowRunsForRepo,
      {
        owner: repo.owner,
        repo: repo.name,
        per_page: 100,
      },
    );

    all.push(
      ...response.map((run: any) => ({
        repo: `${repo.owner}/${repo.name}`,
        run,
      })),
    );
  }

  return all;
}
