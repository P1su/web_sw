import { instance } from '../../../apis/instance';
import { useQuery } from '@tanstack/react-query';

export const MATERIALLIST_QUERY_KEY = (company) => ['materialList', company];

const getMaterialList = async (company) => {
  const res = await instance.get(`/material/${company}`);
  return res.data;
};

const useGetMaterialList = (company) => {
  const { data } = useQuery({
    queryKey: MATERIALLIST_QUERY_KEY(company),
    retry: 0,
    queryFn: () => getMaterialList(company),
  });

  return { data };
};

export default useGetMaterialList;