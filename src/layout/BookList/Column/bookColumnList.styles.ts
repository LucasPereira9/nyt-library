import styled from "styled-components";

export const BooksWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 40rem;
  width: 100%;
  transform: translate(0);
  @media (max-width: 768px) {
    justify-content: flex-start;
    max-height: 34rem;
  }
`;


export const BookItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  padding-top: 2rem;
  width: 82%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 2.6rem;
    width: 92%;
  }
`;