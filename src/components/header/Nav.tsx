import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useState } from "react";
import { HamburgerModal } from "./HamburgerModal";
import { CartContext } from "../../contexts/CartContext";
import Cart from "../Cart";

export const Nav = () => {
  const { cartVisible, toggleCartVisibility, cartItems, 
      handleDecrease,
        handleIncrease,
        handleRemove,openCheckout,  showCheckout, } =
    useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="nav">
      <div className="nav__hamburger-icon" onClick={() => setIsOpen(true)}>
        <RxHamburgerMenu />
      </div>
      <div className="nav__menu-items">
        <MenuItems />
      </div>
      <div className="nav__logo">
        <h1>
          <NavLink to={"/"}>PosterShop</NavLink>
        </h1>
      </div>
      <div onClick={toggleCartVisibility} className="nav__cart">
        {cartItems.length === 0 ? <div></div> : <span>{cartCount}</span>}

        <AiOutlineShopping />
      </div>
      {isOpen && <HamburgerModal closeModal={() => setIsOpen(false)} />}
      {/* Visa Cart-komponenten om varukorgen är synlig */}
      {cartVisible && !showCheckout && (
        <Cart
          closeCart={toggleCartVisibility}
          cartItems={cartItems}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleRemove={handleRemove}
          openCheckout={openCheckout}
        />
      )}
    </nav>
  );
};
