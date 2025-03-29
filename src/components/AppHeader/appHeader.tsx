"use client";
import * as style from "./appHeader.styles";

type AppHeaderProps = {
  onSearch: (query: string) => void;
};

export default function AppHeader({ onSearch }: AppHeaderProps) {
  return (
    <style.HeaderContainer>
      <style.Title>Bloom Books</style.Title>
      <style.SearchInput
        type="text"
        placeholder="Buscar livros..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <h4>fav</h4>
    </style.HeaderContainer>
  );
}
