import type { Collector } from "../../src/types/collector";
import type { IssueCommentReactionRecord } from "../../src/types/record";

import { fetchIssueCommentReactions } from "./fetch";
import { normalizeIssueCommentReactions } from "./normalize";

export const collector: Collector<IssueCommentReactionRecord> = {
  order: 23,
  name: "issue-comment-reactions",

  fetch: fetchIssueCommentReactions,
  normalize: normalizeIssueCommentReactions,
  outputPath: "data/issue-comment-reactions/current.json",
};
