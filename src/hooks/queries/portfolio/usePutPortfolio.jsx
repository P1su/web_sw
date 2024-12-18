import { instance } from '../../../apis/instance'
import { useMutation } from '@tanstack/react-query';

const putPortfolio = async (values) => {
  const formData = new FormData();

  formData.append('title', values.title);
  formData.append('content', values.content);
  formData.append('blog_link', values.blog_link);

  values.images.forEach((file) => {
    if (file) formData.append('images', file);
  });

  const res = await instance.put(`/portfolio/${values.id}`, formData, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
      'Content-Type':'multipart/form-data',
    },
  });

  return res.data;
};

const usePutPortfolio = (values) => {
  return useMutation({
    mutationFn: () => putPortfolio(values),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default usePutPortfolio;