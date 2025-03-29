import styled, { css, keyframes } from 'styled-components';

interface MenuContainerProps {
    isopen: boolean | undefined;
  }

export const Wrapper = styled.div`
  z-index: 100;
`;

export const TriggerContent = styled.div<MenuContainerProps>`
  height: 100%;
  background-color: black;
  transition: color 2s ease;

  ${({ isopen }) =>
    isopen &&
    css`
      background-color: green;
    `}
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