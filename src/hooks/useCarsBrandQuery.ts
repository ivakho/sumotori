import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../services";
import { carsApi } from "../services";
import type { CarsQueryArgs } from "./types";

export const useCarsBrandQuery = (args: CarsQueryArgs) => {
  return useQuery({
    queryKey: queryKeys.brands(args),
    queryFn: () =>
      carsApi.brands({
        type: "AUTO",
        page: args.page,
        size: args.size,
        searchString: args.search,
      }),
  });
};
