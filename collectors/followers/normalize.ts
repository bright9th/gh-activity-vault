import { FollowerRecord } from "../../src/types/record";

export function normalizeFollowers(raw: any[]): FollowerRecord[] {
  return raw
    .map((u) => ({
      id: u.id,
      login: u.login,
      node_id: u.node_id,
      avatar_url: u.avatar_url,
      html_url: u.html_url,
    }))
    .sort((a, b) => a.login.localeCompare(b.login));
}
