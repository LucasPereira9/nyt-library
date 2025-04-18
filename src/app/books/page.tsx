'use client';

import AppHeader from "@/components/AppHeader/appHeader";
import FilterBar from "@/components/FilterBar/filterBar";
import Pagination from "@/components/Pagination/pagination";
import { useBestSellersListQuery } from "@/hooks/useBooksList";
import { useFilterStore } from "@/hooks/useFilterStore";
import BookColumnList, { BookDetails, BookListProps } from "@/layout/BookList/Column/bookColumnList";
import BookRowList from "@/layout/BookList/Row/bookRowList";
import { useTotalPages, usePaginatedResults } from "@/utils/pagination";
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Title } from "../page.styles";
import { EmptyWrapper } from "./books.styles";
import * as S from './books.styles'
import Loading from "@/components/Loading/Loading";

export default function Books() {
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');
  const [page, setPage] = useState(1);
  const { data, isLoading } = useBestSellersListQuery(gender ?? '');
  const [search, setSearch] = useState('');
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
    return data.results.filter((result: BookListProps) => {
      if (result.book_details && result.book_details.length > 0) {
        return result.book_details.some((book: BookDetails) =>
          book.title.toLowerCase().includes(lowerSearch)
        );
      }
      return false;
    });
  }, [data?.results, search]);

  const totalPages = useTotalPages(filteredData, itemsPerPage);
  const isPageOutOfRange = totalPages < page;

  useEffect(() => {
    if (isPageOutOfRange) {
      setPage(1);
    }
  }, [isPageOutOfRange, filteredData]);

  const paginatedResults = usePaginatedResults<BookListProps>(
    filteredData,
    page,
    itemsPerPage,
    isPageOutOfRange
  );
  const RedirectToPortfolio = () => {
    const portfolioUrl = 'https://master.d1vj8jvaw2xgu6.amplifyapp.com/pt'
    window.open(portfolioUrl ?? '', '_blank');
  };
  
  const emptySearch = paginatedResults.length === 0

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <AppHeader value={search} setValue={setSearch} />
      <FilterBar Title={data?.results && data.results[0]?.list_name} />
       {emptySearch && 
        <EmptyWrapper>
          <img height={160} width={180} src="/images/emptyList.png" alt="Book Cover" />
          <Title>Nenhum resultado encontrado. Vamos tentar uma nova busca?</Title>  
        </EmptyWrapper>
        }
      {isColumn ? (
        <BookColumnList items={paginatedResults} />
      ) : (
        <BookRowList items={paginatedResults} />
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <S.FooterWrapper>
        <S.HelpText onClick={RedirectToPortfolio}>Alguma dúvida? entre em contato conosco</S.HelpText>
      </S.FooterWrapper>
    </div>
  );
}