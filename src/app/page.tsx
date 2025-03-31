'use client';
import AppHeader from '@/components/AppHeader/appHeader';
import * as Style from './page.styles';
import FilterBar from '@/components/FilterBar/filterBar';
import { useGendersListQuery } from '@/hooks/useGenderList';
import { useState, useEffect } from 'react';
import { useFilterStore } from '@/hooks/useFilterStore';
import Pagination from '@/components/Pagination/pagination';
import { usePaginatedResults, useTotalPages } from '@/utils/pagination';
import GenderColumnList from '@/layout/GenderList/Column/genderColumnList';
import mockGenderList from '@/utils/mock';
import GenderRowList from '@/layout/GenderList/Row/genderRowList';

type GenderListProps = {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
};

export default function Home() {
  const { data, isLoading } = useGendersListQuery();
  const [page, setPage] = useState(1);
  const { itemsPerPage, layout } = useFilterStore();

  const isColumn = layout === 'column'

  const handleSearch = (query: string) => {
    console.log('Buscando por:', query);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const totalPages = useTotalPages(mockGenderList, itemsPerPage);
  const isPageOutOfRange = totalPages < page;

  useEffect(() => {
    if (isPageOutOfRange) {
      setPage(1);
    }
  }, [isPageOutOfRange, mockGenderList]);

  const paginatedResults = usePaginatedResults<GenderListProps>(
    mockGenderList, // TODO REMOVER MOCK
    page,
    itemsPerPage,
    isPageOutOfRange
  );

  if (isLoading) return <p>Carregando...</p>;

  return (
    <Style.Container>
      <AppHeader onSearch={handleSearch} />
      <FilterBar />
      <Style.Content>
        {isColumn ? 
        <GenderColumnList items={paginatedResults} /> :
        <GenderRowList items={paginatedResults}  />
      }
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Style.Content>
    </Style.Container>
  );
}