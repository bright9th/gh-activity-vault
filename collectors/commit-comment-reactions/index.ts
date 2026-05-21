import type { Collector } from "../../src/core/collector";
import type { CommitCommentReactionRecord } from "../../src/types/record";

import { fetchCommitCommentReactions } from "./fetch";
import { normalizeCommitCommentReactions } from "./normalize";

export const collector: Collector<CommitCommentReactionRecord> = {
  order: 25,
  name: "commit-comment-reactions",

  fetch: fetchCommitCommentReactions,
  normalize: normalizeCommitCommentReactions,
  outputPath: "data/commit-comment-reactions/current.json",
};
