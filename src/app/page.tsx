"use client"
import AppHeader from '@/components/AppHeader/appHeader';
import * as Style from './page.styles'
import FilterBar from '@/components/FilterBar/filterBar';

export default function Home() {
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
