import { TagRecord } from "../../src/types/record";

export function normalizeTags(raw: any[]): TagRecord[] {
  return raw
    .map(({ repo, tag }) => ({
      repo,

      name: tag.name,

      commit_sha: tag.commit?.sha ?? "",

      commit_url: tag.commit?.url ?? "",

      zipball_url: tag.zipball_url,

      tarball_url: tag.tarball_url,

      node_id: tag.node_id,
    }))
    .sort((a, b) => {
      if (a.repo !== b.repo) {
        return a.repo.localeCompare(b.repo);
      }

      return a.name.localeCompare(b.name);
    });
}
