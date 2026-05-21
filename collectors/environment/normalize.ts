import { EnvironmentRecord } from "../../src/types/record";

export function normalizeEnvironments(raw: any[]): EnvironmentRecord[] {
  return raw
    .map(({ repo, environment }) => ({
      repo,

      id: environment.id,

      name: environment.name,

      html_url: environment.html_url,

      created_at: environment.created_at,

      updated_at: environment.updated_at,

      protection_rules_count: environment.protection_rules?.length ?? 0,
    }))
    .sort((a, b) => {
      if (a.repo !== b.repo) {
        return a.repo.localeCompare(b.repo);
      }

      return a.name.localeCompare(b.name);
    });
}
