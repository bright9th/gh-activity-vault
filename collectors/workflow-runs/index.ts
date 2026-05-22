import type { Collector } from "../../src/types/collector";
import type { WorkflowRunRecord } from "../../src/types/record";

import { fetchWorkflowRuns } from "./fetch";
import { normalizeWorkflowRuns } from "./normalize";

export const collector: Collector<WorkflowRunRecord> = {
  order: 9,
  name: "workflow-runs",

  fetch: fetchWorkflowRuns,
  normalize: normalizeWorkflowRuns,
  outputPath: "data/workflow-runs/current.json",
};
