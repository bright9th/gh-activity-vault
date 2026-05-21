import { ContributorRecord } from "../../src/types/record";

export function normalizeContributors(raw: any[]): ContributorRecord[] {
  return raw
    .map(({ repo, contributor }) => ({
      repo,

      id: contributor.id,

      login: contributor.login,

      node_id: contributor.node_id,

      avatar_url: contributor.avatar_url,

      html_url: contributor.html_url,

      contributions: contributor.contributions,

      type: contributor.type,
    }))
    .sort((a, b) => {
      if (a.repo !== b.repo) {
        return a.repo.localeCompare(b.repo);
      }

      return b.contributions - a.contributions;
    });
}
