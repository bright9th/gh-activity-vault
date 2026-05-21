import { IssueCommentRecord } from "../../src/types/record";

export function normalizeIssueComments(raw: any[]): IssueCommentRecord[] {
  return raw
    .map(({ repo, comment }) => ({
      id: comment.id,

      repo,

      issue_url: comment.issue_url,

      author: comment.user?.login ?? null,

      body: comment.body ?? "",

      created_at: comment.created_at,

      updated_at: comment.updated_at,

      html_url: comment.html_url,

      reactions: {
        total_count: comment.reactions?.total_count ?? 0,
      },
    }))
    .sort((a, b) => a.id - b.id);
}
