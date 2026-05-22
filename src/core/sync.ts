import "dotenv/config";
import { runCollector } from "./run-collector";
import { loadCollectors } from "./load-collectors";
import { generateManifest } from "./generate-manifest";
import { durationMs, nowIso } from "../utils/time";
import { createLoadingText } from "../utils/loading-text";
import { writeJson } from "../io/write-json";
import { CollectorExecutionReport } from "../types/report";

const startedAt = nowIso();
const startedMs = Date.now();

const reports: CollectorExecutionReport[] = [];

async function main() {
  const collectors = await loadCollectors();

  for (const collector of collectors) {
    const loader = createLoadingText(`Current: ${collector.name}`);

    const report = await runCollector(collector);
    reports.push(report);

    loader.stop();
    console.log(report);
  }

  await generateManifest();

  const finishedAt = nowIso();

  await writeJson("data/sync-report.json", {
    started_at: startedAt,
    finished_at: finishedAt,
    duration_ms: durationMs(startedMs),
    collectors: reports,
  });

  const successful = reports.filter((r) => r.status === "success");

  const failed = reports.filter((r) => r.status === "failed");

  console.log(`\nSuccess: ${successful.length}\nFailed: ${failed.length}`);
}

main().catch((err) => {
  console.error("=== UNEXPECTED TOP-LEVEL ERROR ===");
  console.error(err);
  process.exit(1);
});
