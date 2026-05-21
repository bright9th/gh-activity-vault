import { BranchRecord } from "../../src/types/record";

export function normalizeBranches(raw: any[]): BranchRecord[] {
  return raw
    .map(({ repo, branch }) => ({
      repo,

      name: branch.name,

      protected: branch.protected ?? false,

      commit_sha: branch.commit?.sha ?? "",

      commit_url: branch.commit?.url ?? "",
    }))
    .sort((a, b) => {
      if (a.repo !== b.repo) {
        return a.repo.localeCompare(b.repo);
      }

      return a.name.localeCompare(b.name);
    });
}
