export default function useQueryParams<T>(): T {
  let params = window.location.search.substring(1)

  if (!params.length) return {} as T

  params = decodeURIComponent(params);

  return JSON.parse(`{"${params.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)
}
