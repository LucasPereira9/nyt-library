import styled from "styled-components";

type ButtonProps = {
  isdisabled: boolean;
};

interface PageButtonProps {
    isactive: boolean;
  }
  

  export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 2.4rem;
  flex-wrap: wrap;
  max-width: 100%;
`;

export const ButtonWrapper = styled.button<ButtonProps>`
  align-items: center;
  border: 1px solid #1F2445;
  border-radius: 1rem;
  background-color: #FFFFFF;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  padding: 6px 8px;
  width: 2.4rem;

  ${(props) =>
    props.isdisabled &&
    `
      background-color: #E0E0E0;
      border-color: #BDBDBD;
      color: #9E9E9E;
      cursor: not-allowed;
    `}
`;

export const PageButton = styled.button<PageButtonProps>`
  background-color: ${(props) => (props.isactive ? '#1F2445' : '#FFFFFF')};
  color: ${(props) => (props.isactive ? '#FFFFFF' : '#1F2445')};
  cursor: pointer;
  border: 1px solid #1F2445;
  border-radius: 1rem;
  padding: 6px 8px;
  width: 2.4rem;
`;