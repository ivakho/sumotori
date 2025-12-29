import axios from "axios";

export const http = axios.create({
  baseURL: "https://yokozuna.dev.inkode.ru/api",
});
