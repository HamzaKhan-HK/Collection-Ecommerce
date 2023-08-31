import React from "react";
import { motion } from "framer-motion";
import pageloader from "../../assets/images/title-light.svg";

export const PageLoader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{ delay: 2.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="w-screen h-screen bg-red fixed z-50 flex items-center justify-center overflow-x-hidden "
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        src={pageloader}
        className="w-96"
      />
    </motion.div>
  );
};
