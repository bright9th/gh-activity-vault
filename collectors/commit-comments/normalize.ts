import { CommitCommentRecord } from "../../src/types/record";

export function normalizeCommitComments(raw: any[]): CommitCommentRecord[] {
  return raw
    .map(({ repo, comment }) => ({
      id: comment.id,

      repo,

      commit_id: comment.commit_id,

      path: comment.path ?? null,

      position: comment.position ?? null,

      line: comment.line ?? null,

      author: comment.user?.login ?? null,

      body: comment.body ?? "",

      created_at: comment.created_at,

      updated_at: comment.updated_at,

      html_url: comment.html_url,
    }))
    .sort((a, b) => a.id - b.id);
}
