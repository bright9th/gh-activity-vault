import { github } from "../../src/github/client";
import { CommitRecord } from "../../src/types/record";
import { exit } from "node:process";
import { requestDelay } from "../../src/utils/delay";
import { loadCommits } from "../../src/io/dataset";

export async function fetchCommitStats() {
  const commits: CommitRecord[] = await loadCommits();

  const all = [];

  for (const commit of commits) {
    await requestDelay();

    const [owner, repo] = commit.repo.split("/");

    if (!owner || !repo) {
      console.error("Unexpected format. Cannot split into 'owner' and 'repo'");
      exit(1);
    }

    try {
      const response = await github.repos.getCommit({
        owner,
        repo,

        ref: commit.sha,
      });

      all.push({
        repo: commit.repo,

        sha: commit.sha,

        commit: response.data,
      });
    } catch {
      // ignore inaccessible commits
    }
  }

  return all;
}
