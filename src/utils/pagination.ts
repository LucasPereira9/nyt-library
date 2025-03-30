import { useMemo } from 'react';

export function usePaginatedResults<T>(
  data: { results?: T[] } | undefined,
  page: number,
  itemsPerPage: number,
  resetPages: boolean
): T[] {
  return useMemo(() => {
    if (!data || !data.results) return [];
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.results.slice(startIndex, endIndex);
  }, [data, page, itemsPerPage, resetPages]);
}

export function useTotalPages(
  data: { results?: any[] } | undefined,
  itemsPerPage: number
): number {
  return useMemo(() => {
    if (!data || !data.results) return 0;
    return Math.ceil(data.results.length / itemsPerPage);
  }, [data, itemsPerPage]);
}