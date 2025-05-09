import { IoCloseOutline } from "react-icons/io5";
import { CartItem } from "../models/Product"; // Importera rätt typ
import { Button } from "./Button";
import CartItems from "./CartItems";

interface ICart {
  cartItems: CartItem[];
  closeCart: () => void;
  handleDecrease: (item: CartItem) => void;
  handleIncrease: (item: CartItem) => void;
  handleRemove: (item: CartItem) => void;
  openCheckout: () => void;
}

const Cart = ({
  cartItems,
  closeCart,
  handleDecrease,
  handleIncrease,
  handleRemove,
  openCheckout,
}: ICart) => {
  return (
    <div className="cart__container">
      <div className="cart">
        <div className="cart__header">
          <h2>
            Shopping Cart (
            {cartItems.reduce((total, item) => total + item.quantity, 0)})
          </h2>
          <div className="cart__icon" onClick={closeCart}>
            <IoCloseOutline />
          </div>
        </div>

        {cartItems.length === 0 ? (
          <p className="cart__empty-message">Your cart is empty.</p>
        ) : (
          <CartItems
            cartItems={cartItems}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            handleRemove={handleRemove}
          ></CartItems>
        )}
        {cartItems.length === 0 ? (
          <p>{""}</p>
        ) : (
          <div className="cart__footer">
            <div>
              Subtotal:
              {cartItems.reduce(
                (total, item) =>
                  total + item.selectedSize.price * item.quantity,
                0
              )}
            </div>

            <div onClick={openCheckout} className="button">
              <Button>Checkkout</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
