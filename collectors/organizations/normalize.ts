import type { OrganizationRecord } from "../../src/types/record";

export function normalizeOrganizations(raw: any[]): OrganizationRecord[] {
  return raw
    .map((org) => ({
      id: org.id,

      login: org.login,

      node_id: org.node_id,

      avatar_url: org.avatar_url,

      description: org.description ?? null,

      url: org.html_url,

      repos_url: org.repos_url,

      events_url: org.events_url,

      hooks_url: org.hooks_url,
    }))
    .sort((a, b) => a.login.localeCompare(b.login));
}
