import React, { ReactNode } from 'react';
import * as S from './Button.styles';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <S.StyledButton onClick={onClick}>{children}</S.StyledButton>;
};

export default Button;