import type { ZodType } from "zod";
import { API_MOCKED, API_TOKEN } from "../config/env";
import { HTTP_METHODS } from "../constants/HTTP_METHODS";
import type { HttpMethods } from "../types/HttpMethods";
import { buildUrl } from "../lib/buildUrl";
import mockedMovies from "../mocks/movies.mock.json" with { type: "json" };
import mockedGenres from "../mocks/genres.mock.json" with { type: "json" };

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
  console.log(params);
  console.log(url.toString());
  let data: unknown;
  if (API_MOCKED) {
    data = endpoint === "v1.5/movie" ? mockedMovies : mockedGenres;
    console.log("mocked");
  } else {
    const response = await fetch(url.toString(), { method, headers: { "X-API-KEY": API_TOKEN } });
    if (!response.ok) {
      throw new Error((await response.json()).message);
    }
    data = await response.json();
    console.log(data);
  }

  return schema.parse(data);
}
