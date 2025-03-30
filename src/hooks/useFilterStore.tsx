import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FilterStore = {
  layout: 'row' | 'column';
  itemsPerPage: number;
  setLayout: (layout: 'row' | 'column') => void;
  setItemsPerPage: (items: number) => void;
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      layout: 'row',
      itemsPerPage: 5,
      setLayout: (layout) => set({ layout }),
      setItemsPerPage: (items) => set({ itemsPerPage: items }),
    }),
    {
      name: 'filter-store',
    }
  )
);

