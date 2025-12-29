export type CarsQueryBase = {
  search: string;
  page: number;
  size: number;
};

export type CarsQueryArgs<T = {}> = CarsQueryBase & T;
