import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

const Products = () => {
  return (
    <>
      <div className="bestsellers">
        <h2>Posters</h2>
      </div>
      <div className="productcard">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
