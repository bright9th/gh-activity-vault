import { REQUEST_DELAY_MS } from "../constants";

export async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function requestDelay() {
  if (REQUEST_DELAY_MS <= 0) {
    return;
  }

  await delay(REQUEST_DELAY_MS);
}
