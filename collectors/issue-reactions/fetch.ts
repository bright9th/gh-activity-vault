import { github } from "../../src/github/client";
import { exit } from "node:process";
import { IssueRecord } from "../../src/types/record";
import { requestDelay } from "../../src/utils/delay";
import { loadIssues } from "../../src/io/dataset";

export async function fetchIssueReactions() {
  const issues: IssueRecord[] = await loadIssues();

  const all = [];

  for (const issue of issues) {
    await requestDelay();

    const [owner, repo] = issue.repo.split("/");

    if (!owner || !repo) {
      console.error("Unexpected format. Cannot split into 'owner' and 'repo'");
      exit(1);
    }

    const reactions = await github.paginate(github.reactions.listForIssue, {
      owner,
      repo,

      issue_number: issue.number,

      per_page: 100,

      headers: {
        accept: "application/vnd.github+json",
      },
    });

    all.push(
      ...reactions.map((reaction: any) => ({
        repo: issue.repo,

        issue_number: issue.number,

        reaction,
      })),
    );
  }

  return all;
}
