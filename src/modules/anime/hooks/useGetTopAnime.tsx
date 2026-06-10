import { useQuery } from "@tanstack/react-query";
import { getTopAnimes } from "../api/anime.request";

export const useGetTopAnimes = () => {
  const { data,} = useQuery({
    queryKey: ["top-animes"],
    queryFn: getTopAnimes,
  });
  return {
    data,
  };
};
