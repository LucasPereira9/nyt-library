import * as S from './bookColumnList.styles';

export type BookListProps = {
  book_details: {
    title: string;
    description: string;
    contributor: string;
    author: string;
    contributor_note: string;
    price: number;
    age_group: string;
    publisher: string;
    primary_isbn13: string;
    primary_isbn10: number;
  }[];
};

interface BookColumnPropsList {
  items: BookListProps[];
}

export default function BookColumnList({ items }: BookColumnPropsList) {
  return (
    <S.BooksWrapper>
      {items.map((bookList) => (
        <S.BookItem key={bookList.book_details[0]?.primary_isbn13}>
          {bookList.book_details.map((item, index) => (
            <div key={index}>
              <h1>{item.title}</h1>
              <h1>{item.description}</h1>
            </div>
          ))}
        </S.BookItem>
      ))}
    </S.BooksWrapper>
  );
}