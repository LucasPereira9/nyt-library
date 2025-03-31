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
    justify-content: center;
    overflow: auto;
    max-height: 40rem;
    width: 100%;
`

export const GenderItem = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.2rem;
    padding-top: 2rem;
    width: 82%;
`

export const TitleWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
`
export const DatesWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    width: 40rem;
`

export const GenderTitle = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  line-height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 37rem;
  margin-right: 1.2rem;
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