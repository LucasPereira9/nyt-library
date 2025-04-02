import React from 'react';
import * as Style from './sideMenu.styles';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useFavoritesStore } from '@/hooks/useFavoritesStore';
import { BookDetails } from '@/layout/BookList/Column/bookColumnList';


export default function SideMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
    const { favoriteBooks, addFavoriteBook, removeFavoriteBook, isFavorite } = useFavoritesStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    const handleFavoriteClick = (book: BookDetails) => {
      if (isFavorite(book.primary_isbn13)) {
        removeFavoriteBook(book.primary_isbn13);
      } else {
        addFavoriteBook(book);
      }
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
        <Style.TopBorder />
        <Style.Title>Favoritos</Style.Title>   
        {favoriteBooks.length == 0 ? 
        <Style.EmptyContainer>
          <Style.Title>
          Sua lista de favoritos está vazia.
          </Style.Title>
        </Style.EmptyContainer> : 
        favoriteBooks.map((item, index) => {
          return (
            <Style.FavoriteContainer>
            <Style.ImageContainer>
               <img src="/images/empty_image.png" alt="Book Cover" />
             </Style.ImageContainer>
             <Style.BookInfoWrapper>
              <Style.BookTitle>{item.title}</Style.BookTitle>
              <Style.AuthorWrapper>
              <Style.BookAuthor>by {item.author}</Style.BookAuthor>
                {isFavorite(item.primary_isbn13) ? (
                  <FaStar color='#5062F0' style={{cursor: 'pointer'}} size={16} onClick={() => handleFavoriteClick(item)} />
                  ) : (
                    <FaRegStar color='#5062F0' style={{cursor: 'pointer'}} size={16} onClick={() => handleFavoriteClick(item)} />
                  )}
              </Style.AuthorWrapper>
             </Style.BookInfoWrapper>
          </Style.FavoriteContainer>
          )
        })
      }  
      </Style.MenuContainer>
    </Style.Wrapper>
  );
}
