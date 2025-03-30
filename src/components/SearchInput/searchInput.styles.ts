import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 35%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Input = styled.input`
  border-radius: 1.6rem;
  border: 1px solid #ccc;
  padding: 12px 12px 12px 2.5rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%;
  
  &::placeholder {
    color: #9296AC;
  }
  &:focus {
    border-color: #0B1A8E;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
