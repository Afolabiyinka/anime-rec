import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router";
const RoutesConfig = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default RoutesConfig;
