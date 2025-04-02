'use client';

import AppHeader from "@/components/AppHeader/appHeader";
import FilterBar from "@/components/FilterBar/filterBar";
import Pagination from "@/components/Pagination/pagination";
import { useBestSellersListQuery } from "@/hooks/useBooksList";
import { useFilterStore } from "@/hooks/useFilterStore";
import BookColumnList, { BookListProps } from "@/layout/BookList/Column/bookColumnList";
import BookRowList from "@/layout/BookList/Row/bookRowList";
import { useTotalPages, usePaginatedResults } from "@/utils/pagination";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Books() {
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const { data, isLoading } = useBestSellersListQuery(gender ?? '');
  const { itemsPerPage, layout } = useFilterStore();

  const isColumn = layout === 'column'

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const totalPages = useTotalPages(data?.results, itemsPerPage);
  const isPageOutOfRange = totalPages < page;
  
    useEffect(() => {
      if (isPageOutOfRange) {
        setPage(1);
      }
    }, [isPageOutOfRange, data?.results]);
  
    const paginatedResults = usePaginatedResults<BookListProps>(
      data?.results,
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
      <AppHeader value={search} setValue={setSearch} />
      <FilterBar Title={data?.results[0]?.list_name} />
      {isColumn ?
      <BookColumnList items={paginatedResults} /> :
      <BookRowList items={paginatedResults} />  
    }
      <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
    </div>
  );
}