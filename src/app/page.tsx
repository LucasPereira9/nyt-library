'use client';
import AppHeader from '@/components/AppHeader/appHeader';
import * as Style from './page.styles';
import FilterBar from '@/components/FilterBar/filterBar';
import { useGendersListQuery } from '@/hooks/useGenderList';
import { useState, useEffect } from 'react';
import { useFilterStore } from '@/hooks/useFilterStore';
import Pagination from '@/components/Pagination/pagination';
import { usePaginatedResults, useTotalPages } from '@/utils/pagination';
import { formatDateBasedOnFrequency, formatShortDate } from '@/utils/dates';

type GenderListProps = {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
};

const RenderGenderItems = ({ items }: { items: GenderListProps[] }) => {
  return items.map((item: GenderListProps) => (
    <Style.GenderItem key={item.list_name}>
      <Style.TitleWrapper>
        <Style.GenderTitle>{item.display_name}</Style.GenderTitle>
        <Style.UpdatedText>Atualizada em: {formatDateBasedOnFrequency(item.updated)}</Style.UpdatedText>
      </Style.TitleWrapper>
      <Style.DatesWrapper>
        <Style.DatesText>Última publicação: {formatShortDate(item.newest_published_date)}</Style.DatesText>
        <Style.DatesText>Publicação mais antiga: {formatShortDate(item.oldest_published_date)}</Style.DatesText>
      </Style.DatesWrapper>
    </Style.GenderItem>
  ));
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

  const totalPages = useTotalPages(data, itemsPerPage);
  const isPageOutOfRange = totalPages < page;

  useEffect(() => {
    if (isPageOutOfRange) {
      setPage(1);
    }
  }, [isPageOutOfRange, data]);

  const paginatedResults = usePaginatedResults<GenderListProps>(
    data,
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
        <Style.GendersWrapper>
          <RenderGenderItems items={paginatedResults} />
        </Style.GendersWrapper>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Style.Content>
    </Style.Container>
  );
}