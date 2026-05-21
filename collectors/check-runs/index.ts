import type { Collector } from "../../src/core/collector";
import type { CheckRunRecord } from "../../src/types/record";

import { fetchCheckRuns } from "./fetch";
import { normalizeCheckRuns } from "./normalize";

export const collector: Collector<CheckRunRecord> = {
  order: 28,
  name: "check-runs",

  fetch: fetchCheckRuns,
  normalize: normalizeCheckRuns,
  outputPath: "data/check-runs/current.json",
};
