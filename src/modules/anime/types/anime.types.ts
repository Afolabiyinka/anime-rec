export interface AnimeType {
   mal_id: number;
   approved: boolean;
   title: string;
   status: string;
   airing: boolean;
   rating: string;
   score: number;
   popularity: number;
   synopsis: string;
   background: string;
   year: number;
   titles: [
      {
         type: string,
         title: string,
      }
   ]
   images: {
      jpg: {
         image_url: string,
         small_image_url: string,
         large_image_url: string
      }
   },
   genres: [
      {
         mal_id: number,
         type: string,
         name: string,
         url: string,

      }
   ]
}

interface PaginationItems {
   count: number;
   total: number;
   per_page: number;
}

interface Pagination {
   last_visible_page: number;
   has_next_page: boolean;
   current_page: number;
   items: PaginationItems;
}

export interface AnimeListResponse<T> {
   data: T[];
   pagination: Pagination;
}

export interface AnimeResponse<T> {
   data: T;
}