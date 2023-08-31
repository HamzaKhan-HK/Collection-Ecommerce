import React, { useLayoutEffect } from "react";
import Transition from "../components/Transition";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="h-95vh flex items-center justify-start px-4">
      <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl">
        COLLECTION is an e-commerce project that aims to showcase REACT.JS and
        Framer Motion skills using assets from the NIKE newsroom.
      </h1>
    </div>
  );
};

export default Transition(About);
