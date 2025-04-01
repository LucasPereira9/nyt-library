import * as S from './bookColumnList.styles';

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
  console.log('itemss: ', items, 'url: ', items[0].amazon_product_url);
  return (
    <S.BooksWrapper>
      {items?.map((bookList, index) => (
        <S.BookContent key={index}>
          {bookList.book_details.map((item, index) => (
            <S.BookItem onClick={() => console.log(item)} key={index}>
              <S.ImageContainer>
                <img src="/images/mock_image.jpg" alt="Book Cover" />
              </S.ImageContainer>
              <h1>{item.title}</h1>
              <h1>{item.description}</h1>
            </S.BookItem>
          ))}
        </S.BookContent>
      ))}
    </S.BooksWrapper>
  );
}