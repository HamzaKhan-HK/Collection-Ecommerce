import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const CartItems = ({
  productImage,
  productImageAlt,
  productName,
  price,
  id,
}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(GlobalContext);

  return (
    <>
      <div
        initial={{ opacity: 0, mixBlendMode: "darken" }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-sm flex flex-col items-center justify-center"
      >
        <img
          src={productImage}
          className="mix-blend-darken"
          loading="lazy"
          alt={productName}
          onMouseEnter={(e) => (e.currentTarget.src = productImageAlt)}
          onMouseLeave={(e) => (e.currentTarget.src = productImage)}
        />
        <div className="flex flex-col items-center justify-center leading-5">
          <p>{productName}</p>
          <p>{price} GBP</p>
        </div>
        <div className="flex items-center justify-center gap-x-6 py-4 px-6 mt-8 border-2 border-black rounded-full">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            readOnly
            className="text-center w-24 bg-transparent"
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </>
  );
};
