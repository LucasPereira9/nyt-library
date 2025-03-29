import { useState, useEffect } from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import * as Style from "./filterBar.styles";

export default function FilterBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Style.Container>
      <Style.Content>
        <Style.Title>Gêneros</Style.Title>
        <Style.FiltersWrapper>
          <Style.FilterText>{isMobile ? "Exibir 5" : "Exibir 5 por vez"}</Style.FilterText>
          <Style.IconsWrapper>
            <FaList size={isMobile ? 20 : 24} color="#D0D3E2" />
            <FaThLarge size={isMobile ? 20 : 24} color="#D0D3E2" />
          </Style.IconsWrapper>
        </Style.FiltersWrapper>
      </Style.Content>
    </Style.Container>
  );
}
