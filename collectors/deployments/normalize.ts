import { DeploymentRecord } from "../../src/types/record";

export function normalizeDeployments(raw: any[]): DeploymentRecord[] {
  return raw
    .map(({ repo, deployment }) => ({
      id: deployment.id,

      repo,

      sha: deployment.sha,

      ref: deployment.ref,

      task: deployment.task,

      environment: deployment.environment ?? null,

      creator: deployment.creator?.login ?? null,

      description: deployment.description ?? null,

      created_at: deployment.created_at,

      updated_at: deployment.updated_at,

      statuses_url: deployment.statuses_url,

      repository_url: deployment.repository_url,
    }))
    .sort((a, b) => a.id - b.id);
}
