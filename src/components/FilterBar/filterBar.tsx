import { useState, useEffect } from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import * as Style from "./filterBar.styles";
import FilterSelect from "../FilterSelect/FilterSelect";

export default function FilterBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const options = [5, 10, 15, 20];

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
        <FilterSelect isMobile={isMobile} value={itemsPerPage} options={options} onChange={setItemsPerPage} />
          <Style.IconsWrapper>
            <FaList size={isMobile ? 20 : 24} color="#D0D3E2" />
            <FaThLarge size={isMobile ? 20 : 24} color="#D0D3E2" />
          </Style.IconsWrapper>
        </Style.FiltersWrapper>
      </Style.Content>
    </Style.Container>
  );
}
