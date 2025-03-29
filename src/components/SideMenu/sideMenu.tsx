import { useEffect, useState } from 'react';
import * as S from './sideMenu.styles';
import { FaStar } from 'react-icons/fa';

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <S.Wrapper>
        <S.TriggerContent isopen={isOpen} onClick={toggleMenu}>
            <FaStar size={28} color="white" />
        </S.TriggerContent>
      <S.Overlay isopen={isOpen ? true : undefined} onClick={toggleMenu} />

      <S.MenuContainer isopen={isOpen ? true : undefined}>
         <h3>content</h3>
         <h1>asdsaidsidsanid</h1>
      </S.MenuContainer>
    </S.Wrapper>
  );
}
