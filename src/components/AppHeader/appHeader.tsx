import * as Style from "./appHeader.styles";
import SideMenu from "../SideMenu/sideMenu";
import SearchInput from "../SearchInput/searchInput";
import React from "react";
import { useRouter, usePathname } from 'next/navigation';

type AppHeaderProps = {
  value: string
  setValue: (value: string) => void
};

export default function AppHeader({ value, setValue }: AppHeaderProps) {
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
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Pesquise aqui..."
      />
      <SideMenu />
    </Style.HeaderContainer>
  );
}