import type { Collector } from "../../src/core/collector";
import type { GistRecord } from "../../src/types/record";

import { fetchGists } from "./fetch";
import { normalizeGists } from "./normalize";

export const collector: Collector<GistRecord> = {
  order: 7,
  name: "gists",

  fetch: fetchGists,
  normalize: normalizeGists,
  outputPath: "data/gists/current.json",
};
