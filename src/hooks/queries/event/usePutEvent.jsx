import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const putEvent = async (id) => {
  const res = await instance.put(`/event/${id}`);
  return res.data;
};

const usePutEvent = (id) => {
  return useMutation({
    mutationFn: () => putEvent(id),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default usePutEvent;