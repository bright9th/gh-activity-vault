import { PullRequestRecord } from "../../src/types/record";

export function normalizePullRequests(raw: any[]): PullRequestRecord[] {
  return (
    raw
      // include only PRs
      .filter((item) => item.pull_request)
      .map((pr) => ({
        id: pr.id,
        number: pr.number,

        repo: pr.repository_url.split("/").slice(-2).join("/"),

        title: pr.title,

        state: pr.state,

        author: pr.user?.login ?? null,

        assignees: pr.assignees?.map((a: any) => a.login) ?? [],

        labels: pr.labels?.map((l: any) => l.name) ?? [],

        comments: pr.comments ?? 0,

        created_at: pr.created_at,
        updated_at: pr.updated_at,
        closed_at: pr.closed_at ?? null,

        html_url: pr.html_url,

        pull_request_url: pr.pull_request?.html_url ?? "",
      }))
      .sort((a, b) => a.id - b.id)
  );
}
