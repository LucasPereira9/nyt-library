import * as Style from "./appHeader.styles";
import SideMenu from "../SideMenu/sideMenu";
import SearchInput from "../SearchInput/searchInput";
import React from "react";
import { useRouter, usePathname } from 'next/navigation';

type AppHeaderProps = {
  onSearch: (query: string) => void;
};

export default function AppHeader({ onSearch }: AppHeaderProps) {
  const [search, setSearch] = React.useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleTitleClick = () => {
    const isOnMainPage = pathname === '/';
    if (!isOnMainPage) {
      router.push('/');
    }
  };

  return (
    <Style.HeaderContainer>
      <Style.Title onClick={handleTitleClick}>Bloom Books</Style.Title>
      <SearchInput 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Pesquise aqui..."
      />
      <SideMenu />
    </Style.HeaderContainer>
  );
}