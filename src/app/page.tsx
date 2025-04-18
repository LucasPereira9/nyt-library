'use client';
import AppHeader from '@/components/AppHeader/appHeader';
import * as Style from './page.styles';
import FilterBar from '@/components/FilterBar/filterBar';
import { useGendersListQuery } from '@/hooks/useGenderList';
import { useState, useEffect, useMemo } from 'react';
import { useFilterStore } from '@/hooks/useFilterStore';
import Pagination from '@/components/Pagination/pagination';
import { usePaginatedResults, useTotalPages } from '@/utils/pagination';
import GenderColumnList from '@/layout/GenderList/Column/genderColumnList';
import GenderRowList from '@/layout/GenderList/Row/genderRowList';
import Loading from '@/components/Loading/Loading';

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
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const { itemsPerPage, layout } = useFilterStore();

  const isColumn = layout === 'column';

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const filteredData = useMemo(() => {
    if (!data?.results) return [];

    if (!search) {
      return data.results;
    }

    const lowerSearch = search.toLowerCase();
    return data.results.filter((item: GenderListProps) =>
      item.display_name.toLowerCase().includes(lowerSearch)
    );
  }, [data?.results, search]);

  const totalPages = useTotalPages(filteredData, itemsPerPage);
  const isPageOutOfRange = totalPages < page;

  const RedirectToPortfolio = () => {
    const portfolioUrl = 'https://master.d1vj8jvaw2xgu6.amplifyapp.com/pt'
    window.open(portfolioUrl ?? '', '_blank');
  };

  useEffect(() => {
    if (isPageOutOfRange) {
      setPage(1);
    }
  }, [isPageOutOfRange, filteredData]);

  const paginatedResults = usePaginatedResults<GenderListProps>(
    filteredData,
    page,
    itemsPerPage,
    isPageOutOfRange
  );

  const emptySearch = paginatedResults.length === 0

  if (isLoading) return <Loading />;

  return (
    <Style.Container>
      <AppHeader value={search} setValue={setSearch} />
      <FilterBar Title="Gêneros" />
      <Style.Content>
        {emptySearch && 
        <Style.EmptyWrapper>
          <img height={160} width={180} src="/images/emptyList.png" alt="Book Cover" />
          <Style.Title>Nenhum resultado encontrado. Vamos tentar uma nova busca?</Style.Title>  
        </Style.EmptyWrapper>
        }
        {isColumn ? (
          <GenderColumnList items={paginatedResults} />
        ) : (
          <GenderRowList items={paginatedResults} />
        )}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Style.Content>
      <Style.FooterWrapper>
        <Style.HelpText onClick={RedirectToPortfolio}>Alguma dúvida? entre em contato conosco</Style.HelpText>
      </Style.FooterWrapper>
    </Style.Container>
  );
}