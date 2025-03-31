import styled from "styled-components";

export const GendersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-height: 38rem;
  @media (max-width: 768px) {
    max-height: 32rem;
  }
`;

export const GenderItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 22rem;
  margin: 1rem;
  padding: 1.5rem;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const DatesWrapper = styled.div`
  margin-top: 1rem;
`;

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
`;

export const UpdatedText = styled.h2`
  color: #9296AC;
  font-weight: 400;
  font-size: 1rem;
  line-height: 100%;
`;

export const DatesText = styled.h2`
  color: #454A67;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 100%;
`;