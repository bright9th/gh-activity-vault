import { ValidationError } from "./error";

export function ensureUniqueIds<
  T extends {
    id: number;
  },
>(rows: T[]) {
  const seen = new Set<number>();

  for (const row of rows) {
    if (seen.has(row.id)) {
      throw new ValidationError(`Duplicate id ${row.id}`);
    }

    seen.add(row.id);
  }
}
