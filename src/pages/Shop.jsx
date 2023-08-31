import React, { useLayoutEffect } from "react";
import Transition from "../components/Transition";
import { PRODUCTS } from "../components/Products";
import { ItemCard } from "../components/ItemCard";
import { motion } from "framer-motion";
import title_header from "../../assets/images/header-text-lg.svg";

const Shop = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <header className="relative w-full h-screen bg-cover bg-no-repeat bg-center bg-fixed bg-[url('../../assets/gifs/michael-jordan.gif')] flex flex-col items-center justify-center">
        <img
          src={title_header}
          alt="header-text"
          className="px-4 w-full lg:w-9/12"
          loading="lazy"
        />
        <motion.a
          whileHover={{
            backgroundColor: "#D90429",
            color: "#ECEAD5",
          }}
          href="#products"
          className="text-xs md:text-sm lg:text-base w-36 h-12 lg:w-48 lg:h-16 mt-24 bg-light flex items-center justify-center rounded-full"
        >
          SHOP NOW
        </motion.a>
        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base text-light">
          Fall 2023
        </p>
      </header>
      <div
        id="products"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-14 md:gap-y-24 pb-24 lg:pb-48 pt-12"
      >
        {PRODUCTS.length > 0 &&
          PRODUCTS.map((products) => (
            <ItemCard key={products.id} {...products} />
          ))}
      </div>
    </>
  );
};

export default Transition(Shop);
