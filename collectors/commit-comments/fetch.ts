import { github } from "../../src/github/client";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";
import { loadRepos } from "../../src/io/dataset";

export async function fetchCommitComments() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const comments = await github.paginate(
      github.repos.listCommitCommentsForRepo,
      {
        owner: repo.owner,
        repo: repo.name,

        per_page: 100,
      },
    );

    all.push(
      ...comments.map((comment: any) => ({
        repo: `${repo.owner}/${repo.name}`,

        comment,
      })),
    );
  }

  return all;
}
