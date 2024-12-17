import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const postPortfolio = async (values) => {
  const formData = new FormData();

  Object.keys(values).forEach((key) => {
    if (key === 'images') {
      values.images.forEach((file) => {
        if (file) formData.append('images', file);
      });
    } else {
      formData.append(key, values[key]);
    }
  });

  const res = await instance.post('/portfolio', formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

const usePostPortfolio = () => {
  return useMutation({
    mutationFn: postPortfolio,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default usePostPortfolio;