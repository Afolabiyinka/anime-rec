import { Outlet } from "react-router";
import NavLayout from "../nav/NavLayout";

const AnimeLayout = () => {
  return (
    <div className="h-full">
      <NavLayout />
      <Outlet />
    </div>
  );
};

export default AnimeLayout;
