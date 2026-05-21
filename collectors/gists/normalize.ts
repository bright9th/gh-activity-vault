import type { GistRecord } from "../../src/types/record";

export function normalizeGists(raw: any[]): GistRecord[] {
  return raw
    .map((gist) => ({
      id: gist.id,
      node_id: gist.node_id,

      description: gist.description ?? null,

      public: gist.public ?? false,

      created_at: gist.created_at,
      updated_at: gist.updated_at,

      comments: gist.comments ?? 0,

      html_url: gist.html_url,

      files: Object.values(gist.files ?? {}).map((file: any) => ({
        filename: file.filename,

        language: file.language ?? null,

        type: file.type ?? null,

        size: file.size ?? null,

        raw_url: file.raw_url,
      })),
    }))
    .sort((a, b) => a.id.localeCompare(b.id));
}
