import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    background-color: #F2F3F8;
    display: flex;
    justify-content: center;
    height: 4.8rem;
`
export const Content = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 81%;
    @media (max-width: 768px) {
        width: 90%;
  }
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 100%;
    @media (max-width: 768px) {
        font-size: 1.8rem;
  }
`
export const FiltersWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15rem;
    @media (max-width: 768px) {
        width: 8rem;
  }
`
export const FilterText = styled.h2`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
`
export const IconsWrapper = styled.div`
    align-items: center;
    display: flex;
    width: 3.8rem;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 3.2rem;
  }
`