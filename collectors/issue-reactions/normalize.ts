import { IssueReactionRecord } from "../../src/types/record";

export function normalizeIssueReactions(raw: any[]): IssueReactionRecord[] {
  return raw
    .map(({ repo, issue_number, reaction }) => ({
      id: reaction.id,

      repo,

      issue_number,

      user: reaction.user?.login ?? null,

      content: reaction.content,

      created_at: reaction.created_at ?? null,
    }))
    .sort((a, b) => a.id - b.id);
}
