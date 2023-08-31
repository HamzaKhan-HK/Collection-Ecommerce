import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="text-4xl">
      <div className="w-screen h-640 bg-cover bg-no-repeat bg-center bg-[url('../../assets/images/email-footer-bg.svg')] flex items-center justify-center">
        <div className="text-light flex flex-col items-center justify-center w-full">
          <h1 className="text-base lg:text-5xl uppercase">
            Get Exclusive News & Content
          </h1>
          <div className="flex items-center justify-center pt-10 px-4">
            <form className="bg-light flex items-center justify-center h-14 md:h-20 rounded-s-full rounded-e-full">
              <input
                placeholder="email address"
                className="text-sm lg:text-lg outline-0 bg-light flex items-center justify-center pl-6 lg:pl-12 h-full border-r border-black rounded-s-full w-52 lg:w-full"
              />
              <motion.button
                whileHover={{
                  backgroundColor: "#D90429",
                  color: "#ECEAD5",
                }}
                className="text-black text-xs lg:text-xl lg:px-12 h-full border-0 rounded-e-full w-20 md:w-36 lg:w-72"
                type="button"
              >
                SIGN UP
              </motion.button>
            </form>
          </div>
          <p className="text-xs text-center sm:w-96 pt-6 px-4 md:px-0">
            By clicking 'SIGN UP,' I represent I am at least the age of eighteen
            (18), I have read, understood, and agree to the Terms of Service and
            Privacy Policy and I agree to receive emails and customer service
            communications from Houseplant via email. I can unsubscribe at any
            time by clicking 'unsubscribe' in emails.
          </p>
        </div>
      </div>
      <div className="flex">
        <ul className="w-full text-xl md:text-4xl">
          <motion.li
            whileHover={{
              backgroundColor: "rgba(217, 4, 41, 1)",
              color: "#ECEAD5",
            }}
            className="pt-4 pb-2 px-4 border-t border-b border-black cursor-pointer "
          >
            Contact Us
          </motion.li>
          <motion.li
            whileHover={{
              backgroundColor: "rgba(217, 4, 41, 1)",
              color: "#ECEAD5",
            }}
            className="pt-4 pb-2 px-4 border-b border-black cursor-pointer "
          >
            Accessibility
          </motion.li>
          <motion.li
            whileHover={{
              backgroundColor: "rgba(217, 4, 41, 1)",
              color: "#ECEAD5",
            }}
            className="pt-4 pb-2 px-4 border-b border-black cursor-pointer "
          >
            FAQs
          </motion.li>
          <motion.li
            whileHover={{
              backgroundColor: "rgba(217, 4, 41, 1)",
              color: "#ECEAD5",
            }}
            className="pt-4 pb-2 px-4 border-b border-black cursor-pointer "
          >
            Privacy Policy
          </motion.li>
          <motion.li
            whileHover={{
              backgroundColor: "rgba(217, 4, 41, 1)",
              color: "#ECEAD5",
            }}
            className="pt-4 pb-2 px-4 border-b border-black cursor-pointer "
          >
            Terms Of Service
          </motion.li>
        </ul>
      </div>
      <img src="../../assets/images/title.svg" alt="title" loading="lazy" />
      <div className="px-4 py-4 text-xs flex items-center justify-between">
        <p>UNITED KINGDOM</p>
        <ul className="flex gap-x-1 sm:gap-x-8 underline">
          <li className="cursor-pointer">Instagram</li>
          <li className="cursor-pointer">Facebook</li>
          <li className="cursor-pointer">Twitter</li>
        </ul>
      </div>
    </div>
  );
};
