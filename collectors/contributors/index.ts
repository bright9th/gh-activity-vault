import type { Collector } from "../../src/core/collector";
import type { ContributorRecord } from "../../src/types/record";

import { fetchContributors } from "./fetch";
import { normalizeContributors } from "./normalize";

export const collector: Collector<ContributorRecord> = {
  order: 13,
  name: "contributors",

  fetch: fetchContributors,
  normalize: normalizeContributors,
  outputPath: "data/contributors/current.json",
};
