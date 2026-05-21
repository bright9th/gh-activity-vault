import type { Collector } from "../../src/core/collector";
import type { PullRequestRecord } from "../../src/types/record";

import { fetchPullRequests } from "./fetch";
import { normalizePullRequests } from "./normalize";

export const collector: Collector<PullRequestRecord> = {
  order: 5,
  name: "pull-requests",

  fetch: fetchPullRequests,
  normalize: normalizePullRequests,
  outputPath: "data/pull-requests/current.json",
};
