import type { Collector } from "../../src/core/collector";
import type { OrganizationRecord } from "../../src/types/record";

import { fetchOrganizations } from "./fetch";
import { normalizeOrganizations } from "./normalize";

export const collector: Collector<OrganizationRecord> = {
  order: 6,
  name: "organizations",

  fetch: fetchOrganizations,
  normalize: normalizeOrganizations,
  outputPath: "data/organizations/current.json",
};
