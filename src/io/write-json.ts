import fs from "node:fs/promises";

export async function writeJson(path: string, data: unknown) {
  const tempPath = `${path}.tmp`;

  const json = JSON.stringify(data, null, 2) + "\n";

  await fs.writeFile(tempPath, json, "utf8");

  await fs.rename(tempPath, path);
}
