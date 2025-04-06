import { Link } from "react-router-dom";
import { Product } from "../models/Product";

interface IProductCard {
  product: Product;
  className?: string;
}
export const ProductCard = ({ product, className }: IProductCard) => {
  return (
    <Link to={`/product/${product.id}`} className="productcard__link">
      <div key={product.id} className={`productcard__container ${className}`}>
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
