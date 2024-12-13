import { instance } from '../../../apis/instance';
import { useQuery } from '@tanstack/react-query';

export const EVENTLIST_QUERY_KEY = ['eventList'];

const getEventList = async () => {
  const res = await instance.get('/event');
  return res.data;
};

const useGetEventList = () => {
  const { data } = useQuery({
    queryKey: EVENTLIST_QUERY_KEY,
    queryFn: getEventList,
    retry: 0,
    onError: (error) => {
      console.error('Error fetching event list:', error);
    }
  });
  return { data };
};

export default useGetEventList;