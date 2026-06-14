import { useQuery } from "@tanstack/react-query";
import { getTopAnimes } from "../api/anime.request";

export const useGetTopAnimes = () => {
  const { data, isLoading, error, refetch, isError } = useQuery({
    queryKey: ["top-animes"],
    queryFn: getTopAnimes,
    retry: false,
  });
  return {
    data,
    error,
    isLoading,
    refetch,
    isError,
  };
};
