import React from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalProvider } from "./context/GlobalState";

import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ItemDetails from "./pages/ItemDetails";
import { Footer } from "./components/Footer";
import { PageLoader } from "./components/PageLoader";

function App() {
  const location = useLocation();

  return (
    <GlobalProvider>
      <PageLoader />
      <main className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:id" element={<ItemDetails />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </GlobalProvider>
  );
}

export default App;
