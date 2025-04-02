import { useMemo } from 'react';

export function usePaginatedResults<T>(
  data: [] | undefined,
  page: number,
  itemsPerPage: number,
  resetPages: boolean
): T[] {
  return useMemo(() => {
    if (!data || !data) return [];
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, page, itemsPerPage, resetPages]);
}

export function useTotalPages(
  data: [] | undefined,
  itemsPerPage: number
): number {
  return useMemo(() => {
    if (!data || !data) return 0;
    return Math.ceil(data.length / itemsPerPage);
  }, [data, itemsPerPage]);
}