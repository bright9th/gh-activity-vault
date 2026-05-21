import { PullRequestReviewCommentRecord } from "../../src/types/record";

export function normalizePullRequestReviewComments(
  raw: any[],
): PullRequestReviewCommentRecord[] {
  return raw
    .map(({ repo, pull_number, comment }) => ({
      id: comment.id,

      repo,

      pull_number,

      author: comment.user?.login ?? null,

      body: comment.body ?? "",

      path: comment.path ?? null,

      position: comment.position ?? null,

      commit_id: comment.commit_id,

      created_at: comment.created_at,

      updated_at: comment.updated_at,

      html_url: comment.html_url,
    }))
    .sort((a, b) => a.id - b.id);
}
