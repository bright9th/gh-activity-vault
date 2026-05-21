import { CommitCommentReactionRecord } from "../../src/types/record";

export function normalizeCommitCommentReactions(
  raw: any[],
): CommitCommentReactionRecord[] {
  return raw
    .map(({ repo, comment_id, reaction }) => ({
      id: reaction.id,

      repo,

      comment_id,

      user: reaction.user?.login ?? null,

      content: reaction.content,

      created_at: reaction.created_at ?? null,
    }))
    .sort((a, b) => a.id - b.id);
}
