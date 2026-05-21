import type { Collector } from "../../src/core/collector";
import type { FollowerRecord } from "../../src/types/record";

import { fetchFollowers } from "./fetch";
import { normalizeFollowers } from "./normalize";

export const collector: Collector<FollowerRecord> = {
  order: 2,
  name: "followers",

  fetch: fetchFollowers,
  normalize: normalizeFollowers,
  outputPath: "data/followers/current.json",
};
