import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const postPassword = async (params) => {
  const body = {
    'password': params.password,
  };
  const res = await instance.post(`/consultation/${params.id}/verify-password`, body);
  return res.data;
}

const usePostPassword = () => {
  return useMutation({
    mutationFn: postPassword,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });
};

export default usePostPassword;