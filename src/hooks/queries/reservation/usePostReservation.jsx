import { useMutation } from '@tanstack/react-query';
import { instance } from '../../../apis/instance'

const postReservation = async (values) => {
  const formData = new FormData();
  for (const key in values) {
    if (key === 'images') {
      // 'images' 배열에 있는 각 파일을 FormData에 추가
      values.images.forEach((file) => {
        if (file) formData.append('images', file);  // 'images[]' 이름으로 파일 추가
      });
    } 
    else if (key === 'budget'){
      formData.append(key, Number(values[key]))
    }else {
      formData.append(key, values[key]);
    }
    //key === 'budget' ? formData.append(key, Number(values[key])) : formData.append(key, values[key]);
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