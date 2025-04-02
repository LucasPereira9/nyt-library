import styled from "styled-components";

export const EmptyWrapper = styled.div`
    align-items: center;
    display: flex;
    margin-top: 4rem;
    justify-content: center;
    flex-direction: column;
`

export const EmptyListText = styled.h1`
  margin-top: 4rem;
  color: #0E1337;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 100%;
`


export const FooterWrapper = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 0.7rem;
`


export const HelpText = styled.h1`
  color: #454A67;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 100%;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`