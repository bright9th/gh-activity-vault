import { CommitStatRecord } from "../../src/types/record";

export function normalizeCommitStats(raw: any[]): CommitStatRecord[] {
  return raw.flatMap(({ repo, sha, commit }) => {
    const stats = commit.stats ?? {};

    const files = commit.files ?? [];

    return files.map((file: any) => ({
      repo,

      sha,

      additions: stats.additions ?? 0,

      deletions: stats.deletions ?? 0,

      changes: stats.total ?? 0,

      changed_files: files.length,

      filename: file.filename,

      status: file.status,

      file_additions: file.additions ?? 0,

      file_deletions: file.deletions ?? 0,

      file_changes: file.changes ?? 0,
    }));
  });
}
