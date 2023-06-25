import React from "react";
import { ProductCard } from "../element/ProductCard";

export const ProductList = () => {
  const products = [
    { id: 1, name: "Product One", image: "/path/to/image1.jpg" },
    { id: 2, name: "Product Two", image: "/path/to/image2.jpg" },
    { id: 3, name: "Product Three", image: "/path/to/image3.jpg" },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.image}
          productName={product.name}
        />
      ))}
    </div>
  );
};
