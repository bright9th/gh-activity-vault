import type { Collector } from "../../src/core/collector";
import type { CommitStatRecord } from "../../src/types/record";

import { fetchCommitStats } from "./fetch";
import { normalizeCommitStats } from "./normalize";

export const collector: Collector<CommitStatRecord> = {
  order: 27,
  name: "commit-stats",

  fetch: fetchCommitStats,
  normalize: normalizeCommitStats,
  outputPath: "data/commit-stats/current.json",
};
