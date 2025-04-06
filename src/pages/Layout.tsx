import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import "./../styles/layout.scss";
import Header from "../components/header/Header";
import { useState } from "react";
import { CartContext } from "../contexts/CartContext";

export const Layout = () => {
  // Skapa CartContext state här
  const [cartState, setCartState] = useState({
    cartVisible: false,
    toggleCartVisibility: () => {},
  });
  // Funktion för att växla synligheten på varukorgen
  cartState.toggleCartVisibility = () => {
    setCartState((prevState) => ({
      ...prevState,
      cartVisible: !prevState.cartVisible, // Växla synlighet
    }));
  };

  return (
    <CartContext.Provider value={cartState}>
      {" "}
      {/* Wrap med CartContext.Provider */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartContext.Provider>
  );
};
