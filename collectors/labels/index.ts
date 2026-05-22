import type { Collector } from "../../src/types/collector";
import type { LabelRecord } from "../../src/types/record";

import { fetchLabels } from "./fetch";
import { normalizeLabels } from "./normalize";

export const collector: Collector<LabelRecord> = {
  order: 26,
  name: "labels",

  fetch: fetchLabels,
  normalize: normalizeLabels,
  outputPath: "data/labels/current.json",
};
