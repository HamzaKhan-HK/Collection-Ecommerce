import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ItemCard = ({
  id,
  productName,
  price,
  productImage,
  productImageAlt,
  desc,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, mixBlendMode: "darken" }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="flex flex-col items-center justify-center"
    >
      <Link
        to={`/${productName}`}
        state={{
          id: id,
          name: productName,
          price: price,
          image: productImage,
          imageAlt: productImageAlt,
          desc: desc,
        }}
      >
        <img
          src={productImage}
          className="mix-blend-darken"
          loading="lazy"
          alt={productName}
          onMouseEnter={(e) => (e.currentTarget.src = productImageAlt)}
          onMouseLeave={(e) => (e.currentTarget.src = productImage)}
        />
        <div className="flex flex-col items-center justify-center">
          <p className="text-base">{productName}</p>
          <p className="text-xs pt-2">{price} GBP</p>
        </div>
      </Link>
    </motion.div>
  );
};
