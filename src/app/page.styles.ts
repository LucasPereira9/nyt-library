import styled from "styled-components";

export const Container = styled.div`
`

export const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


export const Title = styled.h1`
  margin-top: 1rem;
  color: #0E1337;
  font-weight: 700;
  text-align: center;
  font-size: 1.6rem;
  line-height: 100%;
`

export const EmptyWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
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