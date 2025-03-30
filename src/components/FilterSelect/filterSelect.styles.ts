import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

export const SelectWrapper = styled.div`
  display: flex;
  padding-left: 0.4rem;
`;

export const Select = styled.select`
  border: none;
  font-size: 1rem;
  appearance: none;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const IconWrapper = styled.div`
margin-right: 0.6rem;
`;
