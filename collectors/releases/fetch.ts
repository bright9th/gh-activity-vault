import { github } from "../../src/github/client";
import { loadRepos } from "../../src/io/dataset";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";

export async function fetchReleases() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const releases = await github.paginate(github.repos.listReleases, {
      owner: repo.owner,
      repo: repo.name,
      per_page: 100,
    });

    all.push(
      ...releases.map((release: any) => ({
        repo: `${repo.owner}/${repo.name}`,
        release,
      })),
    );
  }

  return all;
}
