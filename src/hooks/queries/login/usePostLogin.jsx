import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const postLogin = async (body) => {
  const res = await instance.post('/admin/login', body);
  return res.data;
}

const usePostLogin = () => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });
};

export default usePostLogin;