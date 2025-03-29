"use client";
import * as Style from "./appHeader.styles";
import SideMenu from "../SideMenu/sideMenu";

type AppHeaderProps = {
  onSearch: (query: string) => void;
};

export default function AppHeader({ onSearch }: AppHeaderProps) {
  return (
    <Style.HeaderContainer>
      <Style.Title>Bloom Books</Style.Title>
      <Style.SearchInput
        type="text"
        placeholder="Buscar livros..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <Style.StarWrapper>
        <SideMenu />
      </Style.StarWrapper>
    </Style.HeaderContainer>
  );
}
