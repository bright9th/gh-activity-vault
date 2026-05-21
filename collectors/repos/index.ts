import type { Collector } from "../../src/core/collector";
import type { RepoRecord } from "../../src/types/record";

import { fetchRepos } from "./fetch";
import { normalizeRepos } from "./normalize";

export const collector: Collector<RepoRecord> = {
  order: 0,
  name: "repos",

  fetch: fetchRepos,
  normalize: normalizeRepos,
  outputPath: "data/repos/current.json",
};
