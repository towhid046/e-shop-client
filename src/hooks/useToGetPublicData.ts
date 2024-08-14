import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

interface queryProps {
  queryKeyName: string;
  url: string;
}
const useToGetPublicData = ({ queryKeyName, url }: queryProps) => {
  const axiosInstance = useAxios();
  const { data, refetch, isError, error, isLoading } = useQuery({
    queryKey: [queryKeyName],
    queryFn: async (): Promise<object[]> => {
      const res = await axiosInstance.get(url);
      return res.data;
    },
  });
  return { data, refetch, isError, error, isLoading };
};

export default useToGetPublicData;