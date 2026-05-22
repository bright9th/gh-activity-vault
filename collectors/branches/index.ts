import type { Collector } from "../../src/types/collector";
import type { BranchRecord } from "../../src/types/record";

import { fetchBranches } from "./fetch";
import { normalizeBranches } from "./normalize";

export const collector: Collector<BranchRecord> = {
  order: 15,
  name: "branches",

  fetch: fetchBranches,
  normalize: normalizeBranches,
  outputPath: "data/branches/current.json",
};
