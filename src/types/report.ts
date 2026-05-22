export type CollectorExecutionReport = {
  name: string;

  status: "success" | "failed";

  records: number;

  duration_ms: number;

  error?: string;
};

export type SyncReport = {
  started_at: string;

  finished_at: string;

  duration_ms: number;

  collectors: CollectorExecutionReport[];
};
