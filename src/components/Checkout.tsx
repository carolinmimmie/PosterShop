import { NavLink } from "react-router-dom";
import { CartItem } from "../models/Product";

import CartItems from "./CartItems";

import { IoIosArrowBack } from "react-icons/io";
import { Form } from "./Form";
interface ICheckout {
  cartItems: CartItem[];
  handleDecrease: (item: CartItem) => void;
  handleIncrease: (item: CartItem) => void;
  handleRemove: (item: CartItem) => void;
}
const Checkout = ({
  cartItems,
  handleDecrease,
  handleIncrease,
  handleRemove,
}: ICheckout) => {
  return (
    <div className="checkout">
      <div className="checkout__main">
        <div className="checkout__main--header">
          <NavLink to={"/products"}>
            <div className="checkout__main--header--icon">
              <IoIosArrowBack />
            </div>
          </NavLink>
          <h2>Checkout</h2>
          <div></div>
        </div>
        <CartItems
          cartItems={cartItems}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleRemove={handleRemove}
        ></CartItems>
        <div className="total">
          Total: 
          {cartItems.reduce(
            (total, item) => total + item.selectedSize.price * item.quantity,
            0 
          )} SEK
        </div>
        <Form></Form>
      </div>
    </div>
  );
};

export default Checkout;
