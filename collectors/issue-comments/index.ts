import type { Collector } from "../../src/types/collector";
import type { IssueCommentRecord } from "../../src/types/record";

import { fetchIssueComments } from "./fetch";
import { normalizeIssueComments } from "./normalize";

export const collector: Collector<IssueCommentRecord> = {
  order: 10,
  name: "issue-comments",

  fetch: fetchIssueComments,
  normalize: normalizeIssueComments,
  outputPath: "data/issue-comments/current.json",
};
