'use client';
import AppHeader from '@/components/AppHeader/appHeader';
import * as Style from './page.styles';
import FilterBar from '@/components/FilterBar/filterBar';
import { useGendersListQuery } from '@/hooks/useGenderList';
import { useState, useMemo } from 'react';
import { useFilterStore } from '@/hooks/useFilterStore';
import Pagination from '@/components/Pagination/pagination';


type GenderListProps = {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
};

export default function Home() {
  const { data, isLoading, isError, error } = useGendersListQuery();
  const [page, setPage] = useState(1);
  const { itemsPerPage } = useFilterStore();

  const handleSearch = (query: string) => {
    console.log('Buscando por:', query);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const paginatedResults = useMemo(() => {
    if (!data || !data.results) return [];
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.results.slice(startIndex, endIndex);
  }, [data, page, itemsPerPage]);

  const totalPages = useMemo(() => {
    if (!data || !data.results) return 0;
    return Math.ceil(data.results.length / itemsPerPage);
  }, [data, itemsPerPage]);

  if (isLoading) return <p>Carregando...</p>;

  return (
    <Style.Container>
      <AppHeader onSearch={handleSearch} />
      <FilterBar />
      <div>
        {paginatedResults.map((item: GenderListProps) => (
          <div key={item.list_name}>{item.display_name}</div>
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Style.Container>
  );
}