import { getGendersListRoute } from '@/utils/routes';
import { useQuery } from '@tanstack/react-query';

const API_KEY = 'suojs22wMAu1rnsxc8ffQX9hll4K8ZY5';

 const getGendersList = async () => {
  try {
  //   const response = await fetch(
  //     `${getGendersListRoute}=${API_KEY}`
  //   );

  //   if (!response.ok) {
  //     throw new Error(`Erro ${response.status}: ${response.statusText}`);
  //   }
  //   const data = await response.json();
  const data = {}

    return data;
  } catch (error) {
    console.error('Erro ao buscar os nomes das listas:', error);
    throw error;
  }
};


export const useGendersListQuery = () => {
    return useQuery({
      queryKey: ['genders-list'],
      queryFn: getGendersList,
      staleTime: 1000 * 60 * 5,
      retry: false,
    });
  };