export type PagedResponse<T> = {
  items: T[];
  totalCount: number;
};

export type CarValue = {
  id: string;
  name: string;
};

export type PageParams = {
  page: number;
  size: number;
  searchString?: string;
};

export type BrandParams = { type: "AUTO" } & PageParams;
export type ModelParams = { type: "AUTO"; brandsIds: string[] } & PageParams;
export type BodyParams = { modelsIds: string[] } & PageParams;
