import IconButton from "@/components/custom/IconButton";
import Logo from "@/components/custom/Logo";
import {
  ListIcon,
  MagnifyingGlassIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { NavLinks } from "./libs/nav";
import { NavLink, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <Logo />

        <div className="flex gap-4 items-center">
          <IconButton
            variant={`outline`}
            icon={MagnifyingGlassIcon}
            tooltip="Search"
            weight="regular"
            onClick={() => navigate("/search")}
          />
          <IconButton
            icon={UserIcon}
            variant={`outline`}
            tooltip="Account"
            weight="regular"
            onClick={() => navigate("/me")}
          />
          <IconButton
            variant="outline"
            icon={openNav ? XIcon : ListIcon}
            weight="regular"
            onClick={() => setOpenNav(!openNav)}
          />
        </div>
      </div>

      <AnimatePresence>
        {openNav && (
          <motion.span
            className="flex flex-col gap-10 p-5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {NavLinks.map(({ icon: Icon, link, name }, i) => {
              const isActive = link === location.pathname;
              return (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{
                    duration: 0.2,
                    delay: i * 0.06,
                    ease: "easeOut",
                  }}
                >
                  <NavLink
                    to={link}
                    className="flex gap-2 items-center"
                    onClick={() => setOpenNav(false)}
                  >
                    <div
                      className={`flex items-center justify-center ${
                        isActive
                          ? "rounded-full text-background p-2 transition-all duration-500 bg-white"
                          : ""
                      }`}
                    >
                      <Icon size={20} weight={isActive ? "fill" : "regular"} />
                    </div>
                    <p>{name}</p>
                  </NavLink>
                </motion.div>
              );
            })}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
