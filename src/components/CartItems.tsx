import { CartItem } from "../models/Product";
interface ICartItems {
  cartItems: CartItem[];
  handleDecrease: (item: CartItem) => void;
  handleIncrease: (item: CartItem) => void;
  handleRemove: (item: CartItem) => void;
}

const CartItems = ({
  cartItems,
  handleDecrease,
  handleIncrease,
  handleRemove,
}: ICartItems) => {
  return (
    <div className="cart__items">
      {cartItems.map((item, index) => (
        <div key={index} className="cart__item">
          <div className="cart__item-img-container">
            <img src={item.product.imageUrl} alt={item.product.title} />
          </div>
          <div className="cart__item-details">
            <h3>{item.product.title}</h3>
            <p>{item.selectedSize.size}</p>
            <p>{item.selectedSize.price * item.quantity}</p>
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
  );
};

export default CartItems;
