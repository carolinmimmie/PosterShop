import { useContext, useState } from "react";
import { CartItem, Product, SizeOption } from "../models/Product";
import { Button } from "./Button";
import Cart from "./Cart";
import { CartContext } from "../contexts/CartContext";
interface IProductDetails {
  product: Product;
}

const ProductDetails = ({ product }: IProductDetails) => {
  const { cartVisible, toggleCartVisibility } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState<SizeOption>(
    product.sizes[0]
  );
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cartItemsLocalStorage") || "[]")
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

  //MINSKA
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
      {cartVisible && (
        <Cart
          closeCart={toggleCartVisibility}
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
