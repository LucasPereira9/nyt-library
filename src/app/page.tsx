'use client';
import AppHeader from '@/components/AppHeader/appHeader';
import * as Style from './page.styles';
import FilterBar from '@/components/FilterBar/filterBar';
import { useGendersListQuery } from '@/hooks/useGenderList';
import { useState } from 'react';
import { useFilterStore } from '@/hooks/useFilterStore';
import Pagination from '@/components/Pagination/pagination';
import { usePaginatedResults, useTotalPages } from '@/utils/pagination';


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
  const { itemsPerPage } = useFilterStore();

  const handleSearch = (query: string) => {
    console.log('Buscando por:', query);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

 
  const paginatedResults = usePaginatedResults<GenderListProps>(data, page, itemsPerPage);
  const totalPages = useTotalPages(data, itemsPerPage);

  if (isLoading) return <p>Carregando...</p>;

  return (
    <Style.Container>
      <AppHeader onSearch={handleSearch} />
      <FilterBar />
      <Style.Content>
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
      </Style.Content>
    </Style.Container>
  );
}