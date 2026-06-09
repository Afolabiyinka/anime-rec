import { animeEndPoint } from "@/shared/api/api-data";
import type { AnimeListResponse, AnimeType } from "../types/anime.types";


export const getTopAnimes = async (): Promise<AnimeListResponse<AnimeType>> => {
   try {
      const res = await fetch(`${animeEndPoint}/top/anime`, {
         method: "GET",
      });

      if (!res.ok) {
         throw new Error("Failed to get Top Anime");
      }

      const data = res.json()
      return data
   } catch (err) {
      throw new Error();
   }
};
