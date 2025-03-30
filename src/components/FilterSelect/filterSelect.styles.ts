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
  position: relative;
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  border: none;
  border-radius: 0.4rem;
  padding: 4px 22px 4px 8px;
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
  position: absolute;
  right: 8px;
  pointer-events: none;
  display: flex;
  align-items: center;
`;
