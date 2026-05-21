import { github } from "../../src/github/client";
import { IssueCommentRecord } from "../../src/types/record";
import { exit } from "node:process";
import { requestDelay } from "../../src/utils/delay";
import { loadIssueComments } from "../../src/io/dataset";

export async function fetchIssueCommentReactions() {
  const comments: IssueCommentRecord[] = await loadIssueComments();

  const all = [];

  for (const comment of comments) {
    await requestDelay();

    const [owner, repo] = comment.repo.split("/");

    if (!owner || !repo) {
      console.error("Unexpected format. Cannot split into 'owner' and 'repo'");
      exit(1);
    }

    const reactions = await github.paginate(
      github.reactions.listForIssueComment,
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
        comment_id: comment.id,

        reaction,
      })),
    );
  }

  return all;
}
