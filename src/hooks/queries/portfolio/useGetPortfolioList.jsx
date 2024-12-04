import { useQuery } from '@tanstack/react-query';
import { instance } from '../../../apis/instance';

export const PORTFOLIOLIST_QUERY_KEY = ['portfolioList'];

const getPortfolioList = async () => {
  const res =  await instance.get('/portfolio');
  return res.data;
};

const useGetPortfolioList = () => {
  const { data } = useQuery({
    queryKey: PORTFOLIOLIST_QUERY_KEY,
    queryFn: getPortfolioList,
    retry: 0,
    onError: (error) => {
      console.error('Error fetching portfolio list:', error);
    }
  });
  return { data };
};

export default useGetPortfolioList;