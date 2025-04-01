import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import * as Style from "./filterBar.styles";
import FilterSelect from "../FilterSelect/FilterSelect";
import { useFilterStore } from "@/hooks/useFilterStore";

const iconColors = {
  active: "#5062F0",
  inactive: "#D0D3E2",
};

export default function FilterBar({Title}: {Title: string}) {
  const [isMobile, setIsMobile] = React.useState(false);
  const options = [5, 10, 15, 20];


  const { layout, itemsPerPage, setItemsPerPage, setLayout } = useFilterStore();

  const isColumnLayout = layout === 'column'

  React.useEffect(() => {
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
        <Style.Title>{Title}</Style.Title>
        <Style.FiltersWrapper>
        <FilterSelect isMobile={isMobile} value={itemsPerPage} options={options} onChange={setItemsPerPage} />
          <Style.IconsWrapper>
            <Style.FilterIcon onClick={() => setLayout('column')}>
            <FaList size={isMobile ? 20 : 24} color={isColumnLayout ? iconColors.active : iconColors.inactive} />
            </Style.FilterIcon>
            <Style.FilterIcon onClick={() => setLayout('row')}>
            <FaThLarge size={isMobile ? 20 : 24} color={!isColumnLayout ? iconColors.active : iconColors.inactive} />
            </Style.FilterIcon>
          </Style.IconsWrapper>
        </Style.FiltersWrapper>
      </Style.Content>
    </Style.Container>
  );
}
