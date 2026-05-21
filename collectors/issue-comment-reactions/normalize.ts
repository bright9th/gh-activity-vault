import { IssueCommentReactionRecord } from "../../src/types/record";

export function normalizeIssueCommentReactions(
  raw: any[],
): IssueCommentReactionRecord[] {
  return raw
    .map(({ comment_id, reaction }) => ({
      id: reaction.id,

      comment_id,

      user: reaction.user?.login ?? null,

      content: reaction.content,

      created_at: reaction.created_at ?? null,
    }))
    .sort((a, b) => a.id - b.id);
}
