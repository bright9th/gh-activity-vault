import type { Collector } from "../../src/core/collector";
import type { CommitCommentRecord } from "../../src/types/record";

import { fetchCommitComments } from "./fetch";
import { normalizeCommitComments } from "./normalize";

export const collector: Collector<CommitCommentRecord> = {
  order: 20,
  name: "commit-comments",

  fetch: fetchCommitComments,
  normalize: normalizeCommitComments,
  outputPath: "data/commit-comments/current.json",
};
