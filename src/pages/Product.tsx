import { useParams } from "react-router-dom";
import { Product } from "../models/Product";
import { products } from "../data/products";
import ProductDetails from "../components/ProductDetails";

const Poster = () => {
  const { id } = useParams<{ id: string }>();

  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <p>Produkten hittades inte.</p>;
  }

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default Poster;
