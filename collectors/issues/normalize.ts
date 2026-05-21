import { IssueRecord } from "../../src/types/record";

export function normalizeIssues(raw: any[]): IssueRecord[] {
  return (
    raw
      // exclude PRs
      .filter((item) => !item.pull_request)
      .map((issue) => ({
        id: issue.id,
        number: issue.number,

        repo: issue.repository_url.split("/").slice(-2).join("/"),

        title: issue.title,

        state: issue.state,

        author: issue.user?.login ?? null,

        assignees: issue.assignees?.map((a: any) => a.login) ?? [],

        labels: issue.labels?.map((l: any) => l.name) ?? [],

        comments: issue.comments ?? 0,

        created_at: issue.created_at,
        updated_at: issue.updated_at,
        closed_at: issue.closed_at ?? null,

        html_url: issue.html_url,
      }))
      .sort((a, b) => a.id - b.id)
  );
}
