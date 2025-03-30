'use client'
import AppHeader from '@/components/AppHeader/appHeader';
import * as Style from './page.styles'
import FilterBar from '@/components/FilterBar/filterBar';
import { useGendersListQuery } from '@/hooks/useGenderList';
import { useEffect } from 'react';

export default function Home() {

  const { data, isLoading, isError, error } = useGendersListQuery();

  useEffect(() => {
    console.log('gender list: ', data?.results, 'erro: ', error)
  },[data])

  const handleSearch = (query: string) => {
    console.log("Buscando por:", query);
  };
  
  return (
    <Style.Container>
        <AppHeader onSearch={handleSearch} />
        <FilterBar />
    </Style.Container>
  );
}
