import { github } from "../../src/github/client";
import { requestDelay } from "../../src/utils/delay";
import { CommitRecord } from "../../src/types/record";
import { exit } from "node:process";
import { loadCommits } from "../../src/io/dataset";

export async function fetchCheckRuns() {
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
      const response = await github.checks.listForRef({
        owner,
        repo,

        ref: commit.sha,

        per_page: 100,
      });

      const runs = response.data.check_runs ?? [];

      all.push(
        ...runs.map((run: any) => ({
          repo: commit.repo,

          sha: commit.sha,

          run,
        })),
      );
    } catch {
      // ignore unsupported repos
    }
  }

  return all;
}
