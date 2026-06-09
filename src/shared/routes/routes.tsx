import AnimeLayout from "@/modules/anime/AnimeLayout";
import HomePage from "@/modules/anime/pages/HomePage";
import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: AnimeLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
];
