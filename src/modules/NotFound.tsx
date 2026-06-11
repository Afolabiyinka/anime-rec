import { ArrowLeftIcon } from "@phosphor-icons/react";
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
      >
        <p className="mt-6 text-3xl font-bold leading-snug md:text-4xl">
          Opps! <br />
          Page not Found!
        </p>
        <p className="mt-4 mb-10 text-lg text-gray-500 md:text-gray-300 md:max-w-md">
          Don&apos;t worry, our team is already on it. Please refresh the page
          or try again later.
        </p>
        <CustomBtn
          size={`lg`}
          onClick={() => navigate("/")}
          text="Go Back"
          startIcon={ArrowLeftIcon}
        />
      </motion.div>
    </div>
  );
}

export default NotFound;
