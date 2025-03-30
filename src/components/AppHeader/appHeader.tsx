"use client";
import * as Style from "./appHeader.styles";
import SideMenu from "../SideMenu/sideMenu";
import SearchInput from "../SearchInput/searchInput";
import { useState } from "react";

type AppHeaderProps = {
  onSearch: (query: string) => void;
};

export default function AppHeader({ onSearch }: AppHeaderProps) {
  const [search, setSearch] = useState('');
  return (
    <Style.HeaderContainer>
      <Style.Title>Bloom Books</Style.Title>
      <SearchInput 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Pesquise aqui..."
      />
        <SideMenu />
    </Style.HeaderContainer>
  );
}
