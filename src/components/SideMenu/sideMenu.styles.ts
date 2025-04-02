import styled, { css } from 'styled-components';

interface MenuContainerProps {
  isopen: boolean;
}
export const Wrapper = styled.div`
  z-index: 100;
`;

export const MenuContainer = styled.div<MenuContainerProps>`
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #fcfffa;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(150%);
  overflow-y: auto;
  height: 90%;
  width: 26%;
  transition: transform 0.8s ease;

  ${({ isopen }) =>
    isopen &&
    css`
      transform: translateX(0);
    `}

    @media (max-width: 1024px) {
      width: 90%;
      height: 88.6%;
    }
  @media (max-width: 768px) {
    width: 90%;
    height: 92%;
  }
`;


export const Overlay = styled.div<MenuContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 89.9%;
  background: rgba(0, 0, 0, 0.5);
  visibility: ${({ isopen }) => (isopen ? 'visible' : 'hidden')};
  opacity: ${({ isopen }) => (isopen ? 1 : 0)};
  transition: opacity 0.6s ease;

  @media (max-width: 1024px) {
    height: 88.6%;
  }

  @media (max-width: 768px) {
    height: 92%;
  }
`;

export const StarWrapper = styled.div<MenuContainerProps>`
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  height: 10%;
  width: 6.4rem;
  transition: background-color 1.4s ease, transform 0.3s ease;

  ${({ isopen }) =>
    isopen &&
    css`
      background-color: #0B1A8E;
    `}

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    height: 12%;
    width: 5rem;
  }

  @media (max-width: 768px) {
    height: 9%;
    position: absolute;
    right: 0;
    width: 4rem;
  }
`;

export const TopBorder = styled.div`
  background-color: #0B1A8E;
  height: 0.6rem;
  width: 100%;
`
export const Title = styled.h1`
  color: #0B1A8E;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 1.2rem;
`

export const FavoriteContainer = styled.div`
  align-items: center;
  gap: 1rem;
  display: flex;
  margin: 1.2rem;
`
export const ImageContainer = styled.div`
  height: 8rem;
  width: 4rem;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BookTitle = styled.h1`
  color: #0E1337;
  font-weight: 700;
  font-size: 1.4rem;
`
export const BookAuthor = styled.h2`
  color: #454A67;
  font-weight: 400;
  font-size: 1.2rem;
`
export const AuthorWrapper = styled.div`
  align-items: center;
  gap: 0.4rem;
  display: flex;
`

export const EmptyContainer = styled.div`
  align-items: center;
  display: flex;
  height: 20rem;
  justify-content: center;
`
