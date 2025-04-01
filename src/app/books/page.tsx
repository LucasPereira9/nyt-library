'use client';

import AppHeader from "@/components/AppHeader/appHeader";
import FilterBar from "@/components/FilterBar/filterBar";
import Pagination from "@/components/Pagination/pagination";
import { useBestSellersListQuery } from "@/hooks/useBooksList";
import { useFilterStore } from "@/hooks/useFilterStore";
import BookColumnList, { BookListProps } from "@/layout/BookList/Column/bookColumnList";
import { useTotalPages, usePaginatedResults } from "@/utils/pagination";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Books() {
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');
  const [page, setPage] = useState(1);
  const { data, isLoading } = useBestSellersListQuery(gender ?? '');
  const { itemsPerPage } = useFilterStore();

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const totalPages = useTotalPages(data, itemsPerPage);
  const isPageOutOfRange = totalPages < page;
  
    useEffect(() => {
      if (isPageOutOfRange) {
        setPage(1);
      }
    }, [isPageOutOfRange, data]);
  
    const paginatedResults = usePaginatedResults<BookListProps>(
      data,
      page,
      itemsPerPage,
      isPageOutOfRange
    );

  const handleSearch = (query: string) => {
    console.log('Buscando por:', query);
  };
  if (isLoading) return (
    <div>
      <h1>
        carregando...
      </h1>
    </div>
  )

  return (
    <div>
      <AppHeader onSearch={handleSearch} />
      <FilterBar Title={data?.results[0]?.list_name} />
      <BookColumnList items={paginatedResults} />
      <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
    </div>
  );
}