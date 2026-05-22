import type { Collector } from "../../src/types/collector";
import type { MilestoneRecord } from "../../src/types/record";

import { fetchMilestones } from "./fetch";
import { normalizeMilestones } from "./normalize";

export const collector: Collector<MilestoneRecord> = {
  order: 19,
  name: "milestones",

  fetch: fetchMilestones,
  normalize: normalizeMilestones,
  outputPath: "data/milestones/current.json",
};
