import type { WorkflowRunRecord } from "../../src/types/record";

export function normalizeWorkflowRuns(raw: any[]): WorkflowRunRecord[] {
  return raw
    .map(({ repo, run }) => ({
      id: run.id,

      repo,

      name: run.name ?? null,

      workflow_id: run.workflow_id,

      head_branch: run.head_branch ?? false,

      head_sha: run.head_sha,

      event: run.event,

      status: run.status ?? false,

      conclusion: run.conclusion ?? false,

      run_number: run.run_number,

      actor: run.actor?.login ?? null,

      created_at: run.created_at,
      updated_at: run.updated_at ?? null,

      html_url: run.html_url,
    }))
    .sort((a, b) => a.id - b.id);
}
