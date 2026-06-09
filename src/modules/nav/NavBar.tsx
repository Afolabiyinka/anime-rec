import { MagnifyingGlassIcon, UserIcon } from "@phosphor-icons/react";
import { NavLinks } from "./libs/nav";
import { NavLink, useLocation } from "react-router";
import IconButton from "@/components/custom/IconButton";
import Logo from "@/components/custom/Logo";

const NavBar = () => {
  return (
    <nav className="mt-3 p-3  hidden md:flex justify-between items-center px-24">
      <Logo />

      <span className="flex gap-10 items-center">
        {NavLinks.map(({ icon: Icon, link, name }) => {
          const location = useLocation();
          const isActive = link === location.pathname;
          return (
            <NavLink to={link} className={`flex gap-2 items-center`}>
              <div
                className={`flex items-center justify-center ${
                  isActive
                    ? "rounded-full text-background p-2 transition-all duration-500 bg-white"
                    : ""
                }`}
              >
                <Icon size={20} weight={isActive ? "fill" : "regular"} />
              </div>{" "}
              <p>{name}</p>
            </NavLink>
          );
        })}
      </span>

      <span className="flex gap-3">
        <IconButton
          icon={MagnifyingGlassIcon}
          tooltip="Search"
          weight="regular"
        />
        <IconButton
          icon={UserIcon}
          variant={`outline`}
          tooltip="Account"
          weight="regular"
        />
      </span>
    </nav>
  );
};

export default NavBar;
