import React from 'react';
import * as Style from './sideMenu.styles';
import { FaStar } from 'react-icons/fa';


export default function SideMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
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
    <Style.Wrapper>
         <Style.StarWrapper onClick={toggleMenu} isopen={isOpen}>
                <FaStar size={28} color="white" />
         </Style.StarWrapper>
      <Style.Overlay isopen={isOpen} onClick={toggleMenu} />
      <Style.MenuContainer isopen={isOpen}>
        <h3>content</h3>
        <h1>asdsaidsidsanid</h1>
      </Style.MenuContainer>
    </Style.Wrapper>
  );
}
