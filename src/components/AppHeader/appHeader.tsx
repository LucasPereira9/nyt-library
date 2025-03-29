"use client";
import { FaStar } from "react-icons/fa";
import * as Style from "./appHeader.styles";

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
         <FaStar size={28} color="white" />
      </Style.StarWrapper>
    </Style.HeaderContainer>
  );
}
