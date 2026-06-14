import { ArrowLeftIcon, SmileyXEyesIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import CustomBtn from "@/components/custom/CustomBtn";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen mx-auto flex flex-col items-center justify-center text-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col justify-center items-center"
      >
        <SmileyXEyesIcon size={100} weight="thin" />
        <p className="mt-3 text-3xl font-extrabold leading-snug md:text-4xl">
          Opps! <br />
          Page not Found!
        </p>
        <p className="mt-4 mb-10 text-lg text-gray-500 md:text-gray-300 md:max-w-md">
          Don&apos;t worry, our team is already on it. Please refresh the page
          or try again later.
        </p>
        <CustomBtn
          size={`lg`}
          variant={`secondary`}
          onClick={() => navigate("/")}
          text="Go Back"
          startIcon={ArrowLeftIcon}
        />
      </motion.div>
    </div>
  );
}

export default NotFound;
