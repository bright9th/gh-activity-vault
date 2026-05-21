import { github } from "../../src/github/client";
import { exit } from "node:process";
import { PullRequestReviewCommentRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";
import { loadPullRequestReviewComments } from "../../src/io/dataset";

export async function fetchPullRequestReviewCommentReactions() {
  const comments: PullRequestReviewCommentRecord[] =
    await loadPullRequestReviewComments();

  const all = [];

  for (const comment of comments) {
    await requestDelay();

    const [owner, repo] = comment.repo.split("/");

    if (!owner || !repo) {
      console.error("Unexpected format. Cannot split into 'owner' and 'repo'");
      exit(1);
    }

    const reactions = await github.paginate(
      github.reactions.listForPullRequestReviewComment,
      {
        owner,
        repo,

        comment_id: comment.id,

        per_page: 100,

        headers: {
          accept: "application/vnd.github+json",
        },
      },
    );

    all.push(
      ...reactions.map((reaction: any) => ({
        repo: comment.repo,

        comment_id: comment.id,

        reaction,
      })),
    );
  }

  return all;
}
