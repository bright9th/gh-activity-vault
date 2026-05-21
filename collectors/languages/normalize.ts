import { LanguageRecord } from "../../src/types/record";

export function normalizeLanguages(raw: any[]): LanguageRecord[] {
  return raw
    .flatMap(({ repo, languages }) =>
      Object.entries(languages).map(([language, bytes]) => ({
        repo,

        language,

        bytes: Number(bytes),
      })),
    )
    .sort((a, b) => {
      if (a.repo !== b.repo) {
        return a.repo.localeCompare(b.repo);
      }

      return b.bytes - a.bytes;
    });
}
