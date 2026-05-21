import fs from "node:fs/promises";

import { github } from "../../src/github/client";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";
import { loadRepos } from "../../src/io/dataset";

export async function fetchCommits() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const commits = await github.paginate(github.repos.listCommits, {
      owner: repo.owner,
      repo: repo.name,

      per_page: 100,
    });

    all.push(
      ...commits.map((commit: any) => ({
        repo: `${repo.owner}/${repo.name}`,

        commit,
      })),
    );
  }

  return all;
}
