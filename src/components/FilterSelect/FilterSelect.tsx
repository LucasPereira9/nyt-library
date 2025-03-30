import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import * as Style from './filterSelect.styles';
import React from 'react';

type FilterSelectProps = {
  isMobile: boolean;
  value: number;
  options: number[];
  onChange: (value: number) => void;
};

export default function FilterSelect({ isMobile, value, options, onChange }: FilterSelectProps) {
    function Dropdown({ value, options, onChange }: { value: number; options: number[]; onChange: (value: number) => void }) {
      const [isOpen, setIsOpen] = React.useState(false)
    return (
        <Style.SelectWrapper>
        <Style.Select
        onFocus={() => {
          setIsOpen(true);
        }}
        onBlur={() => {
          setIsOpen(false);
        }}
         value={value} onChange={(e) => onChange(Number(e.target.value))}>
            {options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
            ))}
        </Style.Select>
        <Style.IconWrapper>
          {isOpen ? <FaChevronUp size={14} color="#666" /> : <FaChevronDown size={14} color="#666" /> }
        </Style.IconWrapper>
        </Style.SelectWrapper>
    );
    }

    
  return (
    <Style.Wrapper>
      <Style.FilterText>
        Exibir
        </Style.FilterText>
        <Dropdown value={value} options={options} onChange={onChange} />
      <Style.FilterText>
        {!isMobile && "por vez"}
      </Style.FilterText>
    </Style.Wrapper>
  );
}

