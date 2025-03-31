'use client';

import AppHeader from "@/components/AppHeader/appHeader";
import FilterBar from "@/components/FilterBar/filterBar";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Books() {
  const searchParams = useSearchParams();
  const gender = searchParams.get('gender');

  useEffect(() => {
    console.log('Parâmetro gender:', gender);
  }, [searchParams]);

  const handleSearch = (query: string) => {
    console.log('Buscando por:', query);
  };

  return (
    <div>
      <AppHeader onSearch={handleSearch} />
      <FilterBar />
    </div>
  );
}