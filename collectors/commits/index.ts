import type { Collector } from "../../src/types/collector";
import type { CommitRecord } from "../../src/types/record";

import { fetchCommits } from "./fetch";
import { normalizeCommits } from "./normalize";

export const collector: Collector<CommitRecord> = {
  order: 16,
  name: "commits",

  fetch: fetchCommits,
  normalize: normalizeCommits,
  outputPath: "data/commits/current.json",
};
