import { MilestoneRecord } from "../../src/types/record";

export function normalizeMilestones(raw: any[]): MilestoneRecord[] {
  return raw
    .map(({ repo, milestone }) => ({
      id: milestone.id,

      repo,

      number: milestone.number,

      title: milestone.title,

      description: milestone.description ?? null,

      state: milestone.state,

      open_issues: milestone.open_issues,

      closed_issues: milestone.closed_issues,

      creator: milestone.creator?.login ?? null,

      created_at: milestone.created_at,

      updated_at: milestone.updated_at,

      closed_at: milestone.closed_at ?? null,

      due_on: milestone.due_on ?? null,

      html_url: milestone.html_url,
    }))
    .sort((a, b) => {
      if (a.repo !== b.repo) {
        return a.repo.localeCompare(b.repo);
      }

      return a.number - b.number;
    });
}
