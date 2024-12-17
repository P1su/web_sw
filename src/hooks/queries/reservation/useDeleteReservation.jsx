import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const deleteReservation = async (id) => {
  const res = await instance.delete(`/consultation/${id}`);
  return res.data;
};

const useDeleteReservation = (id) => {
  return useMutation({
    mutationFn: () => deleteReservation(id),
    onSuccess: (data) => {
      console.log(data);
    }
  });
};

export default useDeleteReservation;