import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../services";
import { carsApi } from "../services";
import type { CarsQueryArgs } from "./types";

export const useCarsBodyQuery = (
  args: CarsQueryArgs<{ modelsIds: string[] }>
) => {
  return useQuery({
    queryKey: queryKeys.bodies(args),
    queryFn: () =>
      carsApi.bodies({
        page: args.page,
        size: args.size,
        searchString: args.search,
        modelsIds: args.modelsIds,
      }),
    enabled: args.modelsIds.length >= 5,
  });
};
