import { instance } from '../../../apis/instance';
import { useQuery } from '@tanstack/react-query';

export const MATERIALITEM_QUERY_KEY = (name, company) => ['materialItem', name, company];

const getMaterialItem = async (name, company) => {
  const res = await instance.get(`material/${company}/${name}`);
  return res.data;
};

const useGetMaterialItem = (name, company) => {
  const { data } = useQuery({
    queryKey: [MATERIALITEM_QUERY_KEY, name, company],
    queryFn: () => getMaterialItem(name, company),
    retry: 0,
    onError: (error) => {
      console.error('Error fetching material item:', error);
    }
  });

  return { data };
};

export default useGetMaterialItem;
