import type { Collector } from "../../src/core/collector";
import type { TagRecord } from "../../src/types/record";

import { fetchTags } from "./fetch";
import { normalizeTags } from "./normalize";

export const collector: Collector<TagRecord> = {
  order: 17,
  name: "tags",

  fetch: fetchTags,
  normalize: normalizeTags,
  outputPath: "data/tags/current.json",
};
