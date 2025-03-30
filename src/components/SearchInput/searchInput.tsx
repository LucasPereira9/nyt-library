import { FaSearch } from 'react-icons/fa';
import * as Style from './searchInput.styles';

type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <Style.Wrapper>
      <Style.IconWrapper>
        <FaSearch size={16} color="#0B1A8E" />
      </Style.IconWrapper>
      <Style.Input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder || 'Buscar...'} 
      />
    </Style.Wrapper>
  );
}
