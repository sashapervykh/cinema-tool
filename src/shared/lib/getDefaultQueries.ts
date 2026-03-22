const DEFAULT_PER_PAGE = "50";

export const getDefaultQueries = () => ({
  limit: DEFAULT_PER_PAGE,
  notNullFields: ["name", "year", "genres.name"],
});
