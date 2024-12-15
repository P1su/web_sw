import { instance } from '../../../apis/instance';
import { useQuery } from '@tanstack/react-query';

export const RESERVATIONLIST_QUERY_KEY = ['reservationList'];

const getReservationList = async () => {
  const res = await instance.get(`/consultation`);
  return res.data;
};

const useGetReservationList = () => {
  const { data, isLoading } = useQuery({
    queryKey: RESERVATIONLIST_QUERY_KEY,
    queryFn: getReservationList,
    retry: 0,
    onError: (error) => {
      console.error(error);
    },
  });

  return { data, isLoading };
};

export default useGetReservationList;