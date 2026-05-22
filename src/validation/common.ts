import { ValidationError } from "./error";

export function ensureArray(value: unknown): asserts value is any[] {
  if (!Array.isArray(value)) {
    throw new ValidationError("Dataset is not an array");
  }
}

export function ensureNonEmptyString(value: unknown, field: string) {
  if (typeof value !== "string" || value.length === 0) {
    throw new ValidationError(`Invalid ${field}`);
  }
}

export function ensureNumber(value: unknown, field: string) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new ValidationError(`Invalid ${field}`);
  }
}

export function ensureIsoDate(value: unknown, field: string) {
  if (value == null) {
    return;
  }

  if (typeof value !== "string") {
    throw new ValidationError(`Invalid ${field}`);
  }

  const time = Date.parse(value);

  if (Number.isNaN(time)) {
    throw new ValidationError(`Invalid date ${field}`);
  }
}
