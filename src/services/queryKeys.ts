export const queryKeys = {
  brands: (args: { search: string; page: number; size: number }) =>
    ["cars", "brands", args] as const,

  models: (args: {
    brandsIds: string[];
    search: string;
    page: number;
    size: number;
  }) => ["cars", "models", args] as const,

  bodies: (args: {
    modelsIds: string[];
    search: string;
    page: number;
    size: number;
  }) => ["cars", "bodies", args] as const,
};
