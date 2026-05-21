import type { Collector } from "../../src/core/collector";
import type { IssueReactionRecord } from "../../src/types/record";

import { fetchIssueReactions } from "./fetch";
import { normalizeIssueReactions } from "./normalize";

export const collector: Collector<IssueReactionRecord> = {
  order: 22,
  name: "issue-reactions",

  fetch: fetchIssueReactions,
  normalize: normalizeIssueReactions,
  outputPath: "data/issue-reactions/current.json",
};
