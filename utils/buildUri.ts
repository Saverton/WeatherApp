import { FetchOptions } from "../types";

export const buildUri = (endpoint: string, options: FetchOptions): string => {
  let uri = `${endpoint}?`;

  Object.entries(options).forEach((item, idx) => {
    const [key, value] = item;
    uri += `${idx === 0 ? '' : '&'}${key}=${value}`;
  })

  return uri;
}