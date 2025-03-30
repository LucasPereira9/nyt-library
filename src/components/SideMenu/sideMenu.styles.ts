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
  width: 26%;
  height: 90%;
  background-color: #fcfffa;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(150%);
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
    width: 5.3rem;
  }

  @media (max-width: 768px) {
    height: 9%;
    position: absolute;
    right: 0;
    width: 4rem;
  }
`;

