import { writeJson } from "../io/write-json";
// import { readState, writeState } from "../state/collector-state";
// import { sha256 } from "../utils/hash";
// import { createLoadingText } from "../utils/loading-text";
import { durationMs } from "../utils/time";
import type { CollectorExecutionReport } from "../types/report";
import type { Collector } from "../types/collector";
import { writeSnapshot } from "../io/write-snapshot";

// export async function runCollector<T>(collector: any) {
//   const loader = createLoadingText(`Current: ${collector.name}`);

//   const state = await readState();

//   const prev = state[collector.name] ?? {};

//   const raw = await collector.fetch();
//   const normalized = collector.normalize(raw);
//   const newHash = sha256(normalized);

//   // skip write if unchanged
//   if (prev.hash === newHash) {
//     loader.stop();
//     console.log(`[skip unchanged] ${collector.name}`);
//     return;
//   }

//   await writeJson(collector.outputPath, normalized);

//   state[collector.name] = {
//     lastRun: new Date().toISOString(),
//     hash: newHash,
//   };

//   await writeState(state);

//   loader.stop();
//   console.log({
//     collector: collector.name,
//     count: normalized.length,
//   });
// }

export async function runCollector<T>(
  collector: Collector<T>,
): Promise<CollectorExecutionReport> {
  const started = Date.now();

  try {
    const fetched = await collector.fetch();
    const normalized = collector.normalize(fetched);
    if (collector.validate) {
      collector.validate(normalized);
    }

    await writeJson(collector.outputPath, normalized);

    await writeSnapshot(collector.outputPath);

    return {
      name: collector.name,
      status: "success",
      records: normalized.length,
      duration_ms: durationMs(started),
    };
  } catch (error) {
    return {
      name: collector.name,
      status: "failed",
      records: 0,
      duration_ms: durationMs(started),
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
