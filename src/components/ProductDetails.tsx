import { useState } from "react";
import { Product, SizeOption } from "../models/Product";
import { Button } from "./Button";
interface IProductDetails {
  product: Product;
}

const ProductDetails = ({ product }: IProductDetails) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes[0].size
  );
  const [price, setPrice] = useState<number>(product.sizes[0].price);

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSize = event.target.value;
    setSelectedSize(selectedSize);

    const selectedOption = product.sizes.find(
      (sizeOption: SizeOption) => sizeOption.size === selectedSize
    );
    if (selectedOption) {
      setPrice(selectedOption.price);
    }
  };
  return (
    <div className="productdetails">
      <div className="productdetails__imgcontainer">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="productdetails__toptext">
        <h3>{product.title}</h3>
        <p>{price} kr</p>
      </div>
      <div className="productdetails__sizes">
        <form>
          <label htmlFor="sizes">Select size</label>
          <select
            name="sizes"
            id="sizes"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            {product.sizes.map((sizeOption) => (
              <option key={product.id} value={sizeOption.size}>
                {sizeOption.size}
              </option>
            ))}
          </select>
        </form>
        <Button>Add to bag</Button>
        <div className="productdetails__description">
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
