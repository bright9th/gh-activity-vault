export type Collector<T> = {
  order: number;
  name: string;

  fetch: () => Promise<any[]>;
  normalize: (raw: any[]) => T[];
  outputPath: string;

  validate?: (data: T[]) => void;
};
