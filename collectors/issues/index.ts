import type { Collector } from "../../src/types/collector";
import type { IssueRecord } from "../../src/types/record";

import { fetchIssues } from "./fetch";
import { normalizeIssues } from "./normalize";

export const collector: Collector<IssueRecord> = {
  order: 4,
  name: "issues",

  fetch: fetchIssues,
  normalize: normalizeIssues,
  outputPath: "data/issues/current.json",
};
