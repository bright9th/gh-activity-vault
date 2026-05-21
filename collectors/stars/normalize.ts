import type { StarRecord } from "../../src/types/record";

export function normalizeStars(raw: any[]): StarRecord[] {
  return raw
    .map((repo) => ({
      id: repo.id,
      node_id: repo.node_id,
      owner: repo.owner.login,
      name: repo.name,
      full_name: repo.full_name,
      private: repo.private,
      archived: repo.archived,
      description: repo.description ?? null,
      language: repo.language ?? null,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      pushed_at: repo.pushed_at ?? null,
      html_url: repo.html_url,
    }))
    .sort((a, b) => a.full_name.localeCompare(b.full_name));
}
