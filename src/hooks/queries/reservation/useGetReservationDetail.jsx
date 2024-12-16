import { instance } from '../../../apis/instance';
import { useQuery } from '@tanstack/react-query';

export const RESERVATIONDETAIL_QUERY_KEY = (id) => ['reservationDetail', id];

const getReservationDetail = async (id) => {
  const res = await instance.get(`/consultation/${id}`);
  return res.data;
};

const useGetReservationDetail = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: [RESERVATIONDETAIL_QUERY_KEY, id],
    queryFn: () => getReservationDetail(id),
    retry: 0,
    onError: (error) => {
      console.error(error);
    },
  });

  return { data, isLoading };
};

export default useGetReservationDetail;