const DEFAULT_PER_PAGE = "50";

export const getDefaultQueries = (params?: Record<string, string | string[]>) => ({
  limit: params?.page ?? DEFAULT_PER_PAGE,
  notNullFields: ["name", "year", "genres.name"],
});
