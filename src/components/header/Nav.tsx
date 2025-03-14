import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { HamburgerModal } from "./HamburgerModal";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="nav__cart">
        <AiOutlineShopping />
      </div>
      {isOpen && <HamburgerModal closeModal={() => setIsOpen(false)} />}
    </nav>
  );
};
