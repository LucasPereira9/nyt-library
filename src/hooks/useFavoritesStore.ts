import { BookDetails } from '@/layout/BookList/Column/bookColumnList';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesStore {
  favoriteBooks: BookDetails[];
  addFavoriteBook: (book: BookDetails) => void;
  removeFavoriteBook: (bookId: string) => void;
  isFavorite: (bookId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favoriteBooks: [],
      addFavoriteBook: (book) =>
        set((state) => ({ favoriteBooks: [...state.favoriteBooks, book] })),
      removeFavoriteBook: (bookId) =>
        set((state) => ({
          favoriteBooks: state.favoriteBooks.filter(
            (book) => book.primary_isbn13 !== bookId
          ),
        })),
      isFavorite: (bookId) =>
        get().favoriteBooks.some((book) => book.primary_isbn13 === bookId),
    }),
    {
      name: 'favorite-books-storage',
    }
  )
);