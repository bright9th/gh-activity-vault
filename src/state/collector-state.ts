import fs from "node:fs/promises";
import path from "node:path";
import { writeJson } from "../io/write-json";

const STATE_PATH = "meta/collectors.json";

export type CollectorState = Record<
  string,
  {
    lastRun?: string;

    hash?: string;
  }
>;

export async function readState(): Promise<CollectorState> {
  try {
    const raw = await fs.readFile(STATE_PATH, "utf8");

    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export async function writeState(state: CollectorState) {
  await fs.mkdir(path.dirname(STATE_PATH), {
    recursive: true,
  });

  await writeJson(STATE_PATH, JSON.stringify(state, null, 2));
}
