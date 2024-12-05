import { instance } from '../../../apis/instance';
import { useQuery } from '@tanstack/react-query';

export const PORTFOLIODETAIL_QUERY_KEY = ['portfolioDetail'];

const getPortfolioDetail = async (portfolioId) => {
  const res = await instance.get(`/portfolio/${portfolioId}`);
  return res.data;
};

const useGetPortfolioDetail = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: PORTFOLIODETAIL_QUERY_KEY,
    queryFn: () => getPortfolioDetail(id),
    retry: 0,
    onError: (error) => {
      console.error('Error fetching portfolio detail:', error);
    },
  });

  return { data, isLoading };
};

export default useGetPortfolioDetail;