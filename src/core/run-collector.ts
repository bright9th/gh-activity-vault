import { writeJson } from "../io/write-json";
import { readState, writeState } from "../state/collector-state";
import { hashData } from "../utils/hash";
import { createLoadingText } from "../utils/loading-text";

export async function runCollector<T>(collector: any) {
  const loader = createLoadingText(`Current: ${collector.name}`);

  const state = await readState();

  const prev = state[collector.name] ?? {};

  const raw = await collector.fetch();
  const normalized = collector.normalize(raw);
  const newHash = hashData(normalized);

  // skip write if unchanged
  if (prev.hash === newHash) {
    loader.stop();
    console.log(`[skip unchanged] ${collector.name}`);
    return;
  }

  await writeJson(collector.outputPath, normalized);

  state[collector.name] = {
    lastRun: new Date().toISOString(),
    hash: newHash,
  };

  await writeState(state);

  loader.stop();
  console.log({
    collector: collector.name,
    count: normalized.length,
  });
}
