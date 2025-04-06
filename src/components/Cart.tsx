import { IoCloseOutline } from "react-icons/io5";
import { CartItem } from "../models/Product"; // Importera rätt typ

interface ICart {
  cartItems: CartItem[];
  closeCart: () => void;
  handleDecrease: (item: CartItem) => void;
  handleIncrease: (item: CartItem) => void;
  handleRemove: (item: CartItem) => void;
}

const Cart = ({
  cartItems,
  closeCart,
  handleDecrease,
  handleIncrease,
  handleRemove,
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
          <div className="cart__main">
            {cartItems.map((item, index) => (
              <div key={index} className="cart__item">
                <div className="cart__item-img-container">
                  <img src={item.product.imageUrl} alt={item.product.title} />
                </div>
                <div className="cart__item-details">
                  <h3 className="cart__item-title">{item.product.title}</h3>
                  <p className="cart__item-size">{item.selectedSize.size}</p>
                  <p className="cart__item-size">
                    {item.selectedSize.price * item.quantity}
                  </p>
                  <div className="cart__item-buttons">
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <div className="cart__item-quantity">{item.quantity}</div>
                    <button onClick={() => handleIncrease(item)}>+</button>
                    <button onClick={() => handleRemove(item)}>x</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div>
          Subtotal:
          {cartItems.reduce(
            (total, item) => total + item.selectedSize.price * item.quantity,
            0
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
