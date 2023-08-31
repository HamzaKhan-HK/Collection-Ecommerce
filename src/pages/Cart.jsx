import React, { useContext } from "react";
import Transition from "../components/Transition";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../components/Products";
import { GlobalContext } from "../context/GlobalState";
import { CartItems } from "../components/CartItems";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems, getTotalCartAmounts } = useContext(GlobalContext);
  const totalAmount = getTotalCartAmounts();

  return (
    <div className="flex flex-col items-center justify-center min-h-95vh pt-32 lg:pt-46">
      <h1 className="text-3xl pb-4">Your Cart</h1>
      <Link to="/">
        <p className="underline">Continue Shopping</p>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-14 md:gap-y-24 pt-12 lg:pt-0 pb-24 lg:pb-48">
        {PRODUCTS.length > 0 &&
          PRODUCTS.map((products) => {
            if (cartItems[products.id] !== 0) {
              return <CartItems key={products.id} {...products} />;
            }
          })}
      </div>
      {getTotalCartAmounts() !== 0 ? (
        <div className="flex flex-col items-center justify-center gap-y-4 pb-24">
          <div className="w-full flex items-center justify-between text-lg">
            <h3>Subtotal—</h3>
            {totalAmount} GBP
          </div>
          <div className="w-full flex items-center justify-between text-sm">
            <p>Shipping</p>
            <p>Calculated at checkout</p>
          </div>
          <motion.button
            whileHover={{ backgroundColor: "#D90429" }}
            className="w-72 lg:w-96 px-4 py-4 mb-4 bg-black text-light text-center rounded-full"
          >
            Checkout
          </motion.button>
        </div>
      ) : (
        <p className="pb-24">Your cart is empty</p>
      )}
    </div>
  );
};

export default Transition(Cart);
