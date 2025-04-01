import { useQuery } from '@tanstack/react-query';

const API_KEY = 'DKBMAoUNFL6CTrzuGk4bIaZ2Cy02T8Wb';

interface BestSellersListParams {
  list: string;
}

const getBestSellersList = async ({ list }: BestSellersListParams) => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists.json?list=${list}&api-key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar a lista de best-sellers:', error);
    throw error;
  }
};

export const useBestSellersListQuery = (list: string) => {
  return useQuery({
    queryKey: ['best-sellers-list', list],
    queryFn: () => getBestSellersList({ list }),
    staleTime: 1000 * 60 * 5,
    retry: false,
    enabled: !!list,
  });
};