import Button from '@/components/Button/Button';
import * as S from './bookColumnList.styles';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { formatToBrl } from '@/utils/formatters';

export type BookDetails = {
  title: string;
  description: string;
  contributor: string;
  author: string;
  contributor_note: string;
  price: number;
  age_group: string;
  publisher: string;
  primary_isbn13: string;
  primary_isbn10: string;
};

export type BookListProps = {
  amazon_product_url: string;
  asterisk: number;
  bestsellers_date: string;
  book_details: BookDetails[];
  dagger: number;
  display_name: string;
  isbns: { isbn10: string; isbn13: string }[];
  list_name: string;
  published_date: string;
  rank: number;
  rank_last_week: number;
  reviews: { book_review_link: string; first_chapter_link: string; sunday_review_link: string }[];
  weeks_on_list: number;
};

interface BookColumnPropsList {
  items: BookListProps[];
}

export default function BookColumnList({ items }: BookColumnPropsList) {

  const handleButtonClick = (url: string) => {
    window.open(url ?? '', '_blank');
  };

  return (
    <S.BooksWrapper>
      {items?.map((bookList, index) => (
        <S.BookContent key={index}>
          {bookList.book_details.map((item, index) => (
            <S.BookItem onClick={() => console.log(item)} key={index}>
              <S.ImageContainer>
                <img src="/images/mock_image.jpg" alt="Book Cover" />
              </S.ImageContainer>
              <S.InfoContainer>
                <S.TitleContainer>
                  <S.Title>{item.title}</S.Title>
                  <S.AuthorContainer>
                  <S.Author>{item.author}</S.Author>
                  <FaRegStar size={16} />
                  </S.AuthorContainer>
                </S.TitleContainer>
                <S.Description>{item.description}</S.Description>
                <S.Text>{item.publisher}</S.Text>
                <S.Text>Rank {bookList.rank}</S.Text>
                <Button onClick={() => handleButtonClick(bookList.amazon_product_url)}>
                  Compre por {formatToBrl(item.price)}
                </Button>
              </S.InfoContainer>
            </S.BookItem>
          ))}
        </S.BookContent>
      ))}
    </S.BooksWrapper>
  );
}