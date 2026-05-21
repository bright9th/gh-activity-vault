import { CheckRunRecord } from "../../src/types/record";

export function normalizeCheckRuns(raw: any[]): CheckRunRecord[] {
  return raw
    .map(({ repo, sha, run }) => ({
      id: run.id,

      repo,

      sha,

      name: run.name,

      status: run.status,

      conclusion: run.conclusion ?? null,

      started_at: run.started_at ?? null,

      completed_at: run.completed_at ?? null,

      html_url: run.html_url,

      details_url: run.details_url ?? null,

      app: run.app?.name ?? null,

      external_id: run.external_id ?? null,
    }))
    .sort((a, b) => a.id - b.id);
}
