import {
  ensureArray,
  ensureNonEmptyString,
  ensureNumber,
  ensureIsoDate,
} from "../../src/validation/common";

import { ensureUniqueIds } from "../../src/validation/duplicates";

import { RepoRecord } from "../../src/types/record";

export function validateRepos(data: unknown): asserts data is RepoRecord[] {
  ensureArray(data);

  ensureUniqueIds(data);

  for (const repo of data) {
    ensureNumber(repo.id, "repo.id");

    ensureNonEmptyString(repo.name, "repo.name");

    ensureNonEmptyString(repo.full_name, "repo.full_name");

    ensureIsoDate(repo.created_at, "repo.created_at");
  }
}
