import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const postReservation = async (values) => {
  const formData = new FormData();
  for (const key in values) {
    key === 'budget' ? formData.append(key, Number(values[key])) : formData.append(key, values[key]);
  }
  const res = await instance.post(`/consultation`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res.data;
}

const usePostReservation = () => {
  return useMutation({
    mutationFn: postReservation,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });
};

export default usePostReservation;