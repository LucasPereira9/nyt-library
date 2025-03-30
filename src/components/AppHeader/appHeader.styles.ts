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
