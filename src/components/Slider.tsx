import { useEffect, useRef, useState } from "react";
import { products } from "../data/products";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ProductCard } from "./ProductCard";

export const Slider = () => {
  const slider = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToRight = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const goToLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (slider.current) {
      const sliderContainer =
        slider.current.querySelector(".slider__container");
      if (sliderContainer) {
        const elementWidth = sliderContainer.scrollWidth / 4;
        sliderContainer.scrollTo({
          left: currentIndex * elementWidth,
        });
      }
    }
  }, [currentIndex]);

  return (
    <div className="slider" ref={slider}>
      <div className="slider__container">
        <div className="slider__cards">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                className="slider__card"
                product={product}
              ></ProductCard>
            </div>
          ))}
        </div>
      </div>
      <div className="slider__arrow slider__arrow--left" onClick={goToLeft}>
        <FaArrowLeft />
      </div>
      <div className="slider__arrow slider__arrow--right" onClick={goToRight}>
        <FaArrowRight />
      </div>
    </div>
  );
};
