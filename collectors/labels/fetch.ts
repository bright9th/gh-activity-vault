import { github } from "../../src/github/client";
import { loadRepos } from "../../src/io/dataset";
import { RepoRecord } from "../../src/types/record";

export async function fetchLabels() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    const labels = await github.paginate(github.issues.listLabelsForRepo, {
      owner: repo.owner,
      repo: repo.name,

      per_page: 100,
    });

    all.push(
      ...labels.map((label: any) => ({
        repo: `${repo.owner}/${repo.name}`,

        label,
      })),
    );
  }

  return all;
}
