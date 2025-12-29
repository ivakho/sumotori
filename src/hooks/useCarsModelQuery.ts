import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../services";
import { carsApi } from "../services";
import type { CarsQueryArgs } from "./types";

export const useCarsModelQuery = (
  args: CarsQueryArgs<{ brandsIds: string[] }>
) => {
  return useQuery({
    queryKey: queryKeys.models(args),
    queryFn: () =>
      carsApi.models({
        type: "AUTO",
        page: args.page,
        size: args.size,
        searchString: args.search,
        brandsIds: args.brandsIds,
      }),
    enabled: args.brandsIds.length >= 5,
  });
};
