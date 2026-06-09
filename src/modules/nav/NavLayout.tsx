import { useIsMobile } from "@/shared/hooks/useMobile";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const NavLayout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="h-full w-full">
      <NavBar />

      {isMobile && <MobileNav />}
    </div>
  );
};

export default NavLayout;
