import { github } from "../../src/github/client";
import { exit } from "node:process";
import { PullRequestRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";
import { loadPullRequests } from "../../src/io/dataset";

export async function fetchPullRequestReviews() {
  const prs: PullRequestRecord[] = await loadPullRequests();

  const all = [];

  for (const pr of prs) {
    await requestDelay();

    const [owner, repo] = pr.repo.split("/");

    if (!owner || !repo) {
      console.error("Unexpected format. Cannot split into 'owner' and 'repo'");
      exit(1);
    }

    const reviews = await github.paginate(github.pulls.listReviews, {
      owner,
      repo,

      pull_number: pr.number,

      per_page: 100,
    });

    all.push(
      ...reviews.map((review: any) => ({
        repo: pr.repo,

        pull_number: pr.number,

        review,
      })),
    );
  }

  return all;
}
