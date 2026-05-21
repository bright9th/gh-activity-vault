import type { Collector } from "../../src/core/collector";
import type { StarRecord } from "../../src/types/record";

import { fetchStars } from "./fetch";
import { normalizeStars } from "./normalize";

export const collector: Collector<StarRecord> = {
  order: 1,
  name: "stars",

  fetch: fetchStars,
  normalize: normalizeStars,
  outputPath: "data/stars/current.json",
};
