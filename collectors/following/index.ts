import type { Collector } from "../../src/types/collector";
import type { FollowingRecord } from "../../src/types/record";

import { fetchFollowing } from "./fetch";
import { normalizeFollowing } from "./normalize";

export const collector: Collector<FollowingRecord> = {
  order: 3,
  name: "following",

  fetch: fetchFollowing,
  normalize: normalizeFollowing,
  outputPath: "data/following/current.json",
};
