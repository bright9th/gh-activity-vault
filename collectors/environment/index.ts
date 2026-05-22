import type { Collector } from "../../src/types/collector";
import type { EnvironmentRecord } from "../../src/types/record";

import { fetchEnvironments } from "./fetch";
import { normalizeEnvironments } from "./normalize";

export const collector: Collector<EnvironmentRecord> = {
  order: 21,
  name: "environments",

  fetch: fetchEnvironments,
  normalize: normalizeEnvironments,
  outputPath: "data/environments/current.json",
};
