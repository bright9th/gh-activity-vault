import type { Collector } from "../../src/types/collector";
import type { PullRequestReviewRecord } from "../../src/types/record";

import { fetchPullRequestReviews } from "./fetch";
import { normalizePullRequestReviews } from "./normalize";

export const collector: Collector<PullRequestReviewRecord> = {
  order: 11,
  name: "pull-request-reviews",

  fetch: fetchPullRequestReviews,
  normalize: normalizePullRequestReviews,
  outputPath: "data/pull-request-reviews/current.json",
};
