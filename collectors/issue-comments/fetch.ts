import { github } from "../../src/github/client";
import { loadRepos } from "../../src/io/dataset";
import { RepoRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";

export async function fetchIssueComments() {
  const repos: RepoRecord[] = await loadRepos();

  const all = [];

  for (const repo of repos) {
    await requestDelay();

    const comments = await github.paginate(github.issues.listCommentsForRepo, {
      owner: repo.owner,
      repo: repo.name,

      per_page: 100,
    });

    all.push(
      ...comments.map((comment: any) => ({
        repo: `${repo.owner}/${repo.name}`,

        comment,
      })),
    );
  }

  return all;
}
