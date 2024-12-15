import { instance } from '../../../apis/instance';
import { useQuery } from '@tanstack/react-query';

export const EVENTITEM_QUERY_KEY = (id) => ['eventItem', id];

const getEventItem = async (id) => {
  const res = await instance.get(`/event/${id}`);
  return res.data;
};

const useGetEventItem = (id) => {
  const { data } = useQuery({
    queryKey: [EVENTITEM_QUERY_KEY, id],
    queryFn: () => getEventItem(id),
    retry: 0,
    onError: (error) => {
      console.error('Error fetching event item:', error);
    }
  });
  return { data };
};

export default useGetEventItem;