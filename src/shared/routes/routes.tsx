import AnimeLayout from "@/modules/anime/AnimeLayout";
import HomePage from "@/modules/anime/pages/HomePage";
import CustomError from "@/modules/CustomError";
import NotFound from "@/modules/NotFound";
import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: AnimeLayout,
    errorElement: <CustomError />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
];
