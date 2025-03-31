import styled from "styled-components";

export const Container = styled.div`
`

export const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const GendersWrapper = styled.div`
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

export const GenderItem = styled.div`
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

export const TitleWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        margin: 0.8rem 0;
        margin-top: 0.4rem;
  }
`
export const DatesWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    width: 40rem;
    @media (max-width: 768px) {
        align-items: flex-start;
        flex-direction: column;
  }
`
export const GenderTitle = styled.h1`
  color: #5062F0;
  font-weight: 400;
  font-size: 2rem;
  line-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: underline;
  text-decoration-color: #5062F0;
  text-decoration-thickness: 2px;
  max-width: 37rem;
  margin-right: 1.2rem;
  @media (max-width: 768px) {
    white-space: normal;
    word-wrap: break-word;
    overflow: visible;
    text-overflow: clip;
    max-width: 100%;
  }
`;

export const UpdatedText = styled.h2`
    color: #9296AC;
    font-weight: 400;
    font-size: 1rem;
    line-height: 100%;
`
export const DatesText = styled.h2`
    color: #454A67;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 100%;
`