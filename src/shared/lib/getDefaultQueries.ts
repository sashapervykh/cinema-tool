const DEFAULT_PER_PAGE = "50";
const DEFAULT_PAGE = "1";

export const getDefaultQueries = (params?: Record<string, string | string[]>) => ({
  page: params?.page ?? DEFAULT_PAGE,
  limit: params?.page ?? DEFAULT_PER_PAGE,
  notNullFields: ["name", "year", "genres.name"],
});
