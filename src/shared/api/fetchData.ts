import type { ZodType } from "zod";
import { API_MOCKED, API_TOKEN } from "../config/env";
import { HTTP_METHODS } from "../constants/HTTP_METHODS";
import type { HttpMethods } from "../types/HttpMethods";
import { buildUrl } from "../lib/buildUrl";
import mockedMovies from "../mocks/movies.mock.json" with { type: "json" };
import mockedGenres from "../mocks/genres.mock.json" with { type: "json" };
import { errorResponseSchema } from "../types/errorResponseSchema";

interface Props<T> {
  endpoint?: string;
  method?: HttpMethods;
  schema: T;
  params?: Record<string, string | string[]>;
}

let n = 1;
export async function fetchData<T extends ZodType>({
  endpoint,
  method = HTTP_METHODS.GET,
  schema,
  params,
}: Props<T>) {
  const url = buildUrl({ endpoint, params });
  let data: unknown;
  if (API_MOCKED) {
    const newDocs = mockedMovies.docs.map((elem) => ({
      ...elem,
      id: elem.id * n,
      name: elem.name + n,
    }));
    n++;
    const newMockedMovies = { ...mockedMovies, docs: newDocs };
    data = endpoint === "v1.5/movie" ? newMockedMovies : mockedGenres;
    const promise = new Promise((res) => {
      setTimeout(() => res(data), 30);
    });
    data = await promise;
  } else {
    try {
      const response = await fetch(url.toString(), { method, headers: { "X-API-KEY": API_TOKEN } });
      if (!response.ok) {
        const data = await response.json();
        const typedData = errorResponseSchema.safeParse(data);
        if (typedData.error) throw new Error("Неожиданная ошибка сервера. Попробуйте позже...");
        throw new Error(typedData.data?.message);
      }
      data = await response.json();
    } catch {
      throw new Error("Неожиданная ошибка сервера. Попробуйте позже...");
    }
  }

  return schema.parse(data);
}
