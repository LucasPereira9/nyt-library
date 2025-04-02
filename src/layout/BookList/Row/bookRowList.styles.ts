import styled from "styled-components";

export const BooksWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 38rem;
  width: 100%;
  transform: translate(0);
  @media (max-width: 768px) {
    justify-content: center;
    max-height: 32rem;
  }
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  box-sizing: border-box;
  padding-top: 2rem;

  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 425px) {
    width: 60%;
  }
`;
export const BookItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35rem;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  height: 22rem;
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
  height: 28rem;
  width: 80%;
  @media (max-width: 768px) {
    margin-left: 1rem;
    gap: 1rem;
  }
`

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.8rem;
  gap: 0.4rem;
`
export const AuthorContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.2rem;
`
export const Title = styled.h1`
  color: #0E1337;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 100%;
`
export const Author = styled.h2`
  color: #454A67;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 100%;
  @media (max-width: 1024px) {
    width: 80%;
  }
`

export const Description = styled.p`
  color: #0E1337;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  max-width: 100%;
`;
export const Text = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 100%;

`