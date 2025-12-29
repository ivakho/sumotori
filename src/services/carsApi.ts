import { http } from "./http";
import type {
  BodyParams,
  BrandParams,
  CarValue,
  ModelParams,
  PagedResponse,
} from "./types";

export const carsApi = {
  brands: async (params: BrandParams) => {
    const { data } = await http.get<PagedResponse<CarValue>>(
      "/transports/brands",
      { params }
    );
    return data;
  },

  models: async (params: ModelParams) => {
    const { data } = await http.get<PagedResponse<CarValue>>(
      "/transports/models",
      { params }
    );
    return data;
  },

  bodies: async (params: BodyParams) => {
    const { data } = await http.get<PagedResponse<CarValue>>(
      "/transports/body",
      { params }
    );
    return data;
  },
};
