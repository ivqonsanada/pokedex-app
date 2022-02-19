export const useQueryParams = (query: string = "") => {
  const result: Record<string, string> = {};
  new URLSearchParams(query || window.location.search).forEach((value, key) => {
    result[key] = value;
  });
  return result;
};
