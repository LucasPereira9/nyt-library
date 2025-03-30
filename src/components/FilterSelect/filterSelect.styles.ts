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
  padding-left: 0.2rem;
`;

export const Select = styled.select`
  appearance: none;
  border: none;
  background-color: transparent;
  display: flex;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const IconWrapper = styled.div`
margin-right: 0.6rem;
`;
