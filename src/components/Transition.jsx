import React from "react";
import { motion } from "framer-motion";

const Transition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-red origin-bottom z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-red origin-top z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
