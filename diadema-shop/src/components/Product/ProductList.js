import React from "react";
import { ProductCard } from "../element/ProductCard";

export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Product One",
      image: "images/Bitmap.png",
    },
    { id: 2, name: "Product Two", image: "/images/Bitmap-3.png" },
    { id: 3, name: "Product Three", image: "images/Bitmap-1.png" },
    // { id: 4, name: "Product Three", image: "images/Bitmap-2.png" },
  ];

  return (
    <div className="px-4 mx-auto max-w-screen-m text-center py-24 ml-2 flex flex-wrap justify-center">
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
