import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #5062F0;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 1.4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 100%;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const SearchInput = styled.input`
  border-radius: 4px;
  border: none;
  padding: 8px;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const StarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    position: absolute;
    right: 0;
    margin: 0 1.6rem 2.9rem 0;
  }
`;
