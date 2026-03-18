import type { ZodType } from "zod";
import { API_TOKEN } from "../config/env";
import { HTTP_METHODS } from "../constants/HTTP_METHODS";
import type { HttpMethods } from "../types/HttpMethods";
import { buildUrl } from "../lib/buildUrl";

interface Props<T> {
  endpoint?: string;
  method?: HttpMethods;
  schema: T;
  params?: Record<string, string | string[]>;
}

export async function fetchData<T extends ZodType>({
  endpoint,
  method = HTTP_METHODS.GET,
  schema,
  params,
}: Props<T>) {
  const url = buildUrl({ endpoint, params });
  const response = await fetch(url.toString(), { method, headers: { "X-API-KEY": API_TOKEN } });
  if (!response.ok) {
    throw new Error("API Error");
  }
  const data = await response.json();
  console.log(data);
  return schema.parse(data);
}
