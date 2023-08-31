import React, { useLayoutEffect, useContext } from "react";
import Transition from "../components/Transition";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/GlobalState";
import badge from "../../assets/images/afterpay_badge.png";

const ItemDetails = () => {
  const location = useLocation();
  const { id } = location.state;
  const { name } = location.state;
  const { price } = location.state;
  const { image } = location.state;
  const { imageAlt } = location.state;
  const { desc } = location.state;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const { addToCart, cartItems } = useContext(GlobalContext);
  const cartItemAmount = cartItems[id];

  return (
    <section className="min-h-95vh lg:h-95vh flex flex-col lg:flex-row items-center justify-center pt-4 lg:pt-0">
      <div className="mix-blend-darken flex justify-center">
        <img
          src={image}
          loading="lazy"
          alt={name}
          onMouseEnter={(e) => (e.currentTarget.src = imageAlt)}
          onMouseLeave={(e) => (e.currentTarget.src = image)}
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start lg:pr-24 px-4 lg:px-0">
        <h1 className="max-w-4xl text-2xl lg:text-4xl 2xl:text-6xl text-center lg:text-left pb-8">
          {name}
        </h1>
        <p className="max-w-2xl lg:max-w-4xl text-sm 2xl:text-base text-center lg:text-left pb-8">
          {desc}
        </p>
        <h3 className="lg:text-lg 2xl:text-2xl text-center lg:text-left pb-8">
          {price} GBP
        </h3>
        <motion.button
          whileHover={{ backgroundColor: "#D90429" }}
          type="button"
          className="w-72 py-4 mb-4 bg-black text-light text-center lg:text-left flex items-start justify-center col-span-3 rounded-full"
          onClick={() => addToCart(id)}
        >
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </motion.button>
        <div className="flex flex-col xl:flex-row items-center justify-start max-w-4xl text-sm pb-20">
          <p className="uppercase text-xs xl:text-sm text-center lg:text-left">
            Or 4 interest-free payments of{" "}
            <span>{(Math.round((price / 4) * 100) / 100).toFixed(2)} GBP</span>{" "}
            with
          </p>
          <img
            src={badge}
            loading="lazy"
            alt="Afterpay Icon"
            className="h-6 xl:pl-1 mt-2 xl:mt-0"
          />
        </div>
        <p className="max-w-sm text-xs text-center lg:text-left pb-12 lg:pb-0">
          Limit one per customer. Typically ships in 3-5 business days. The sale
          cannot be combined with any other discount or coupon, nor can it be
          retroactively applied. This item is not eligible for return.
        </p>
      </div>
    </section>
  );
};

export default Transition(ItemDetails);
