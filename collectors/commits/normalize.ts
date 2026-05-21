import { CommitRecord } from "../../src/types/record";

export function normalizeCommits(raw: any[]): CommitRecord[] {
  return raw
    .map(({ repo, commit }) => ({
      repo,

      sha: commit.sha,

      author_login: commit.author?.login ?? null,

      committer_login: commit.committer?.login ?? null,

      author_name: commit.commit.author?.name ?? null,

      author_email: commit.commit.author?.email ?? null,

      message: commit.commit.message,

      comment_count: commit.commit?.comment_count ?? 0,

      committed_at: commit.commit.author?.date ?? null,

      html_url: commit.html_url,
    }))
    .sort((a, b) => {
      if (a.repo !== b.repo) {
        return a.repo.localeCompare(b.repo);
      }

      return a.sha.localeCompare(b.sha);
    });
}
