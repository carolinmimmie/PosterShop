import { useContext, useState } from "react";
import { CartItem, Product, SizeOption } from "../models/Product";
import { Button } from "./Button";
import Cart from "./Cart";
import { CartContext } from "../contexts/CartContext";
import Checkout from "./Checkout";
interface IProductDetails {
  product: Product;
}

const ProductDetails = ({ product }: IProductDetails) => {
  const { cartVisible, toggleCartVisibility, cartItems, setCartItems,  handleDecrease,
        handleIncrease,
        handleRemove,openCheckout,  showCheckout, } =
    useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState<SizeOption>(
    product.sizes[0]
  );

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const size = event.target.value; // Hämta den valda storleken som en string

    const selectedOption = product.sizes.find(
      (sizeOption) => sizeOption.size === size // Hitta objektet som matchar storleken
    );

    if (selectedOption) {
      setSelectedSize(selectedOption); // Uppdatera den valda storleken i state
    }
  };

  const addToCart = () => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize.size === selectedSize.size
      );
      let updatedCartItems;
      if (existingItem) {
        updatedCartItems = prevCart.map((item) => {
          if (
            item.product.id === product.id &&
            item.selectedSize.size === selectedSize.size
          ) {
            return new CartItem(
              item.product,
              item.quantity + 1,
              item.selectedSize
            );
          } else {
            return item;
          }
        });
      } else {
        updatedCartItems = [
          ...prevCart,
          new CartItem(product, 1, selectedSize),
        ];
      }

      // Spara den uppdaterade varukorgen i localStorage
      localStorage.setItem(
        "cartItemsLocalStorage",
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems; // Returnera den uppdaterade varukorgen
    });

    toggleCartVisibility();
  };

  console.log(cartItems);
  return (
    <>
      <div className="productdetails">
        <div className="productdetails__imgcontainer">
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className="productdetails__textcontainer">
          <div className="productdetails__textcontainer-toptext">
            <h3>{product.title}</h3>
            <p>{selectedSize.price} kr</p>
          </div>
          <div className="productdetails__textcontainer-sizes">
            <label htmlFor="sizes">Select size</label>
            <select
              name="sizes"
              id="sizes"
              value={selectedSize.size}
              onChange={handleSizeChange}
            >
              {product.sizes.map((sizeOption) => (
                <option
                  key={`${product.id}-${sizeOption.size}`}
                  value={sizeOption.size}
                >
                  {sizeOption.size}
                </option>
              ))}
            </select>
            <Button onClick={addToCart}>Add to bag</Button>
          </div>
          <div className="productdetails__textcontainer-description">
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
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
      {/* Visa checkout separat */}
      {showCheckout && (
        <Checkout
          cartItems={cartItems}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleRemove={handleRemove}
        />
      )}
    </>
  );
};

export default ProductDetails;
