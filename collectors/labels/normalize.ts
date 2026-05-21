import { LabelRecord } from "../../src/types/record";

export function normalizeLabels(raw: any[]): LabelRecord[] {
  return raw
    .map(({ repo, label }) => ({
      id: label.id,

      repo,

      name: label.name,

      color: label.color,

      description: label.description ?? null,

      is_default: label.default ?? false,
    }))
    .sort((a, b) => {
      if (a.repo !== b.repo) {
        return a.repo.localeCompare(b.repo);
      }

      return a.name.localeCompare(b.name);
    });
}
