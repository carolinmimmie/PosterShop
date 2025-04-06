import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import "./../styles/layout.scss";
import Header from "../components/header/Header";
import { useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "../models/Product";

export const Layout = () => {
  // Hämtar cartItems från localStorage eller en tom array om inget finns
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cartItemsLocalStorage") || "[]")
  );
  const [cartVisible, setCartVisible] = useState(false);

  // Funktion för att växla synligheten av varukorgen
  const toggleCartVisibility = () => {
    setCartVisible((prevState) => !prevState); // Växla synlighet
  };

  // Spara cartItems till localStorage när de ändras
  useEffect(() => {
    localStorage.setItem("cartItemsLocalStorage", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartVisible,
        toggleCartVisibility,
        cartItems,
        setCartItems, // Skicka cartItems till alla komponenter som använder contexten
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartContext.Provider>
  );
};
