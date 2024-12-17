import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const deletePortfolio = async (id) => {
  const res = await instance.delete(`/portfolio/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    }
  });
  return res.data;
};

const useDeletePortfolio = (id) => {
  return useMutation({
    mutationFn: () => deletePortfolio(id),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default useDeletePortfolio;