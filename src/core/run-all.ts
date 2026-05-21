import "dotenv/config";
import { runCollector } from "./run-collector";
import { loadCollectors } from "./load-collectors";

async function main() {
  const collectors = await loadCollectors();

  for (const collector of collectors) {
    await runCollector(collector);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
