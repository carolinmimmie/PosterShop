import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home__newarrivals">
          <h2>New Arrivals</h2>
        </div>
        <div className="home__viewall">
          <div></div>
          <span>View all</span>
        </div>
      </section>
      <div className="productcard">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
