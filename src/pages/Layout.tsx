import { Outlet, useLocation} from "react-router-dom";
import { Footer } from "../components/Footer";
import "./../styles/layout.scss";
import Header from "../components/header/Header";
import { useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "../models/Product";

export const Layout = () => {

  const location = useLocation();
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(()=>{
    setShowCheckout(false);
  },[location.pathname])

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

    const handleDecrease = (item: CartItem) => {
    setCartItems((prevCart) => {
      // Om kvantiteten är större än eller lika med 2, minska den
      if (item.quantity >= 2) {
        return prevCart.map((cartItem) => {
          if (
            cartItem.product.id === item.product.id &&
            cartItem.selectedSize.size === item.selectedSize.size
          ) {
            return new CartItem(
              cartItem.product,
              cartItem.quantity - 1,
              cartItem.selectedSize
            );
          }
          return cartItem;
        });
      }

      // Om kvantiteten är mindre än 2, ta bort produkten från varukorgen
      return prevCart.filter((cartItem) => {
        if (
          cartItem.product.id !== item.product.id ||
          cartItem.selectedSize.size !== item.selectedSize.size
        ) {
          return true;
        } else {
          return false;
        }
      });
    });
  };

  //ÖKA
  const handleIncrease = (item: CartItem) => {
    setCartItems((prevCart) => {
      return prevCart.map((cartItem) => {
        if (
          cartItem.product.id === item.product.id &&
          cartItem.selectedSize.size === item.selectedSize.size
        ) {
          return new CartItem(
            cartItem.product,
            cartItem.quantity + 1,
            cartItem.selectedSize
          );
        } else {
          return cartItem;
        }
      });
    });
  };

  const handleRemove = (item: CartItem) => {
    setCartItems((prevCart) => {
      return prevCart.filter((cartItem: CartItem) => {
        if (
          cartItem.product.id !== item.product.id ||
          cartItem.selectedSize.size !== item.selectedSize.size
        ) {
          return true;
        } else {
          return false;
        }
      });
    });
  };
   const openCheckout = () => {
    setShowCheckout(true);
    if (cartVisible) {
      toggleCartVisibility();
    }
  };

  return (
    <CartContext.Provider
      value={{
        handleDecrease,
        handleIncrease,
        handleRemove,
        cartVisible,
        toggleCartVisibility,
        cartItems,
        setCartItems,
        openCheckout,
        showCheckout,
         setShowCheckout,
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
