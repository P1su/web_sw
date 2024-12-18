import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const putEvent = async (values) => {
  const body = {
    title: values.title,
    event_date: '',
    content: values.content,
  };
  
  const res = await instance.put(`/event/${values.id}`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return res.data;
};

const usePutEvent = (values) => {
  return useMutation({
    mutationFn: () => putEvent(values),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default usePutEvent;