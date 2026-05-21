import type { Collector } from "../../src/core/collector";
import type { ReleaseRecord } from "../../src/types/record";

import { fetchReleases } from "./fetch";
import { normalizeReleases } from "./normalize";

export const collector: Collector<ReleaseRecord> = {
  order: 8,
  name: "releases",

  fetch: fetchReleases,
  normalize: normalizeReleases,
  outputPath: "data/releases/current.json",
};
