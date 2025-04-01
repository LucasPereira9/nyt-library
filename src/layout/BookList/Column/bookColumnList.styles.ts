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


export const BookContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  padding-top: 2rem;
  width: 82%;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 2.6rem;
    width: 92%;
  }
`;

export const BookItem = styled.div`
  display: flex;
  height: 16.7rem;
  
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 16.7rem;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InfoContainer =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  @media (max-width: 768px) {
    margin-left: 1rem;
    gap: 1rem;
  }
`

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.4rem;
    
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`
export const AuthorContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.2rem;
`
export const Title = styled.h1`
  color: #0E1337;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 100%;
`
export const Author = styled.h2`
  color: #454A67;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 100%;
`
export const Description = styled.p`
  color: #0E1337;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 100%;
`

export const Text = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 100%;

`