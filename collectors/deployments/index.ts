import type { Collector } from "../../src/types/collector";
import type { DeploymentRecord } from "../../src/types/record";

import { fetchDeployments } from "./fetch";
import { normalizeDeployments } from "./normalize";

export const collector: Collector<DeploymentRecord> = {
  order: 18,
  name: "deployments",

  fetch: fetchDeployments,
  normalize: normalizeDeployments,
  outputPath: "data/deployments/current.json",
};
