import type { Collector } from "../../src/core/collector";
import type { PullRequestReviewCommentReactionRecord } from "../../src/types/record";

import { fetchPullRequestReviewCommentReactions } from "./fetch";
import { normalizePullRequestReviewCommentReactions } from "./normalize";

export const collector: Collector<PullRequestReviewCommentReactionRecord> = {
  order: 24,
  name: "pull-request-review-comment-reactions",

  fetch: fetchPullRequestReviewCommentReactions,
  normalize: normalizePullRequestReviewCommentReactions,
  outputPath: "data/pull-request-review-comment-reactions/current.json",
};
