import { fetchData } from "../../../shared/api/fetchData";
import { searchResponseSchema } from "../model/schemas/searchResponseSchema";

export async function fetchMovies({
  page,
  filters,
  cursor,
}: {
  page?: number;
  filters?: Record<string, string | string[]>;
  cursor?: string | null;
}) {
  const pageParams = page ? { page: page?.toString() } : undefined;
  const next = cursor ? { next: cursor } : undefined;
  const response = await fetchData({
    endpoint: "v1.5/movie",
    schema: searchResponseSchema,
    params: { ...pageParams, ...filters, ...next },
  });

  return response;
}
