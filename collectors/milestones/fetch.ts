import { github } from "../../src/github/client";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";
import { loadRepos } from "../../src/io/dataset";

export async function fetchMilestones() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const milestones = await github.paginate(github.issues.listMilestones, {
      owner: repo.owner,
      repo: repo.name,

      state: "all",

      per_page: 100,
    });

    all.push(
      ...milestones.map((milestone: any) => ({
        repo: `${repo.owner}/${repo.name}`,

        milestone,
      })),
    );
  }

  return all;
}
