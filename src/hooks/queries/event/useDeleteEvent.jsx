import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const deleteEvent = async (id) => {
  const res = await instance.delete(`/event/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return res.data;
};

const useDeleteEvent = (id) => {
  return useMutation({
    mutationFn: () => deleteEvent(id),
    onSuccess: () => {
      console.log('Event deleted');
    },
  });
};

export default useDeleteEvent;