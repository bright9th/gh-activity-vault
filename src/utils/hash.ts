import crypto from "node:crypto";

export function hashData(data: unknown): string {
  const normalized = JSON.stringify(data);

  return crypto.createHash("sha256").update(normalized).digest("hex");
}
