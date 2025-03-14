import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export const Bestsellers = () => {
  const bestSellers = products.filter((product) => product.bestSeller);

  return (
    <>
      <div className="bestsellers">
        <h2>Bestsellers</h2>
      </div>
      <div className="productcard">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
