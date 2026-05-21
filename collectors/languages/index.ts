import type { Collector } from "../../src/core/collector";
import type { LanguageRecord } from "../../src/types/record";

import { fetchLanguages } from "./fetch";
import { normalizeLanguages } from "./normalize";

export const collector: Collector<LanguageRecord> = {
  order: 14,
  name: "languages",

  fetch: fetchLanguages,
  normalize: normalizeLanguages,
  outputPath: "data/languages/current.json",
};
