import { PullRequestReviewRecord } from "../../src/types/record";

export function normalizePullRequestReviews(
  raw: any[],
): PullRequestReviewRecord[] {
  return raw
    .map(({ repo, pull_number, review }) => ({
      id: review.id,

      repo,

      pull_number,

      author: review.user?.login ?? null,

      state: review.state,

      body: review.body ?? "",

      submitted_at: review.submitted_at ?? null,

      commit_id: review.commit_id,

      html_url: review.html_url,
    }))
    .sort((a, b) => a.id - b.id);
}
