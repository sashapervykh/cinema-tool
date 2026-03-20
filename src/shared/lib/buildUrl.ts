import { API_URL } from "../config/env";
import { getDefaultQueries } from "./getDefaultQueries";

interface Props {
  endpoint?: string;
  params?: Record<string, string | string[]>;
}

export function buildUrl({ endpoint, params }: Props) {
  const urlString = endpoint ? `${API_URL}/${endpoint}` : `${API_URL}`;
  const url = new URL(urlString);
  const defaultQueries = getDefaultQueries();
  addParams(url, defaultQueries);
  if (params) {
    addParams(url, params);
  }
  return url;
}

export function addParams(url: URL, params: Record<string, string | string[]>) {
  Object.entries(params).forEach((param) => {
    const [name, value] = param;
    if (typeof value === "string") {
      url.searchParams.append(name, value);
    } else {
      value.forEach((v) => url.searchParams.append(name, v));
    }
  });
}
