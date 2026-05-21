import { github } from "../../src/github/client";
import { exit } from "node:process";
import { PullRequestRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";
import { loadPullRequests } from "../../src/io/dataset";

export async function fetchPullRequestReviewComments() {
  const prs: PullRequestRecord[] = await loadPullRequests();

  const all = [];

  for (const pr of prs) {
    await requestDelay();

    const [owner, repo] = pr.repo.split("/");

    if (!owner || !repo) {
      console.error("Unexpected format. Cannot split into 'owner' and 'repo'");
      exit(1);
    }

    const comments = await github.paginate(github.pulls.listReviewComments, {
      owner,
      repo,

      pull_number: pr.number,

      per_page: 100,
    });

    all.push(
      ...comments.map((comment: any) => ({
        repo: pr.repo,

        pull_number: pr.number,

        comment,
      })),
    );
  }

  return all;
}
