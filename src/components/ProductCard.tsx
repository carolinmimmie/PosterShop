import { Link } from "react-router-dom";
import { Product } from "../models/Product";

interface IProductCard {
  product: Product;
}
export const ProductCard = ({ product }: IProductCard) => {
  return (
    <Link to={`/product/${product.id}`} className="productcard__link">
      <div key={product.id} className="productcard__container">
        <div className="productcard__container-img">
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className="productcard__container-text">
          <h4>{product.title}</h4>
          {product.sizes.length > 0 && <p>{product.sizes[0].price}</p>}
        </div>
      </div>
    </Link>
  );
};
