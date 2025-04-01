import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  border-radius: 2.4rem;
  background-color: #5062F0;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  gap: 0.4rem;
  height: 3.2rem;
  width: 13.6rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3d4dc6;
  }

  &:active {
    background-color: #2e3b99;
  }
`;