import type { ReleaseRecord } from "../../src/types/record";

export function normalizeReleases(raw: any[]): ReleaseRecord[] {
  return raw
    .map(({ repo, release }) => ({
      id: release.id,

      repo,

      tag_name: release.tag_name,

      name: release.name ?? null,

      body: release.body ?? null,

      draft: release.draft ?? false,

      prerelease: release.prerelease ?? false,

      created_at: release.created_at,
      published_at: release.published_at ?? null,

      author: release.author?.login ?? null,

      html_url: release.html_url,
    }))
    .sort((a, b) => a.id - b.id);
}
