import { github } from "../../src/github/client";
import { loadRepos } from "../../src/io/dataset";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";

export async function fetchTags() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const tags = await github.paginate(github.repos.listTags, {
      owner: repo.owner,
      repo: repo.name,

      per_page: 100,
    });

    all.push(
      ...tags.map((tag: any) => ({
        repo: `${repo.owner}/${repo.name}`,

        tag,
      })),
    );
  }

  return all;
}
