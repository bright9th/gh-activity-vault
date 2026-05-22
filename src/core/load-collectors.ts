import fg from "fast-glob";
import { pathToFileURL } from "node:url";

import type { Collector } from "../types/collector";

export async function loadCollectors(): Promise<Collector<any>[]> {
  const files = await fg("collectors/**/index.ts", {
    absolute: true,
  });

  const collectors: Collector<any>[] = [];

  for (const file of files) {
    const mod = await import(pathToFileURL(file).href);

    if (!mod.collector) {
      continue;
    }

    /* Uncomment to have only those collectors with name in array run */
    // if (!["repos"].includes(mod.collector.name)) continue;

    collectors.push(mod.collector);
  }

  collectors.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return collectors;
}
