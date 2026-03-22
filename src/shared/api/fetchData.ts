import type { ZodType } from "zod";
import { API_TOKEN } from "../config/env";
import { HTTP_METHODS } from "../constants/HTTP_METHODS";
import type { HttpMethods } from "../types/HttpMethods";
import { buildUrl } from "../lib/buildUrl";
import { errorResponseSchema } from "../types/errorResponseSchema";

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
  let data: unknown;
  try {
    const response = await fetch(url.toString(), { method, headers: { "X-API-KEY": API_TOKEN } });
    if (!response.ok) {
      const data = await response.json();
      const typedData = errorResponseSchema.safeParse(data);
      if (typedData.error) throw new Error("Неожиданная ошибка сервера. Попробуйте позже...");
      throw new Error(typedData.data?.message);
    }
    data = await response.json();
    return schema.parse(data);
  } catch {
    throw new Error("Неожиданная ошибка сервера. Попробуйте позже...");
  }
}
