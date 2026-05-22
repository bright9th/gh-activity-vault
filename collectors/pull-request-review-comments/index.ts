import type { Collector } from "../../src/types/collector";
import type { PullRequestReviewCommentRecord } from "../../src/types/record";

import { fetchPullRequestReviewComments } from "./fetch";
import { normalizePullRequestReviewComments } from "./normalize";

export const collector: Collector<PullRequestReviewCommentRecord> = {
  order: 12,
  name: "pull-request-review-comments",

  fetch: fetchPullRequestReviewComments,
  normalize: normalizePullRequestReviewComments,
  outputPath: "data/pull-request-review-comments/current.json",
};
