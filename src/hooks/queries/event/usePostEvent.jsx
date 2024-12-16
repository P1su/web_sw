import { instance } from '../../../apis/instance'
import { useMutation } from '@tanstack/react-query';

const postEvent = async (body) => {
  const res = await instance.post('/event', body, { 
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });

  return res.data;
};

const usePostEvent = () => {
  return useMutation({
    mutationFn: postEvent,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default usePostEvent;