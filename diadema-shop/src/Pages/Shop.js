import React from "react";
import Card from "../Pages/Shop/Card";
export const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Product A",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$19.99",
      imageSrc: "/images/Bitmap-1.png",
    },
    {
      id: 2,
      name: "Product B",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$29.99",
      imageSrc: "/images/Bitmap-2.png",
    },
    {
      id: 3,
      name: "Product C",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$49.99",
      imageSrc: "/images/Bitmap-3.png",
    },
    {
      id: 4,
      name: "Product D",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$39.99",
      imageSrc: "/images/Bitmap-3.png",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="  max-w-screen-xl mx-auto py-12 px-4 sm:p-6 lg:p-8">
        <h2 className="text-center text-lg font-medium text-gray-900">
          Our Products
        </h2>
        <p className="mt-1 mb-10 text-center text-sm text-gray-600">
          Check out our latest products.
        </p>

        {/* Product Cards */}
        <div className="px-4 mx-auto max-w-screen-m text-center mx-2 grid gap-y-[24px] md:flex md:flex-wrap md:-mx-[16px]">
          {/* Map over each product and render a card for it */}
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.name}
              body={product.description}
              imageSrc={product.imageSrc}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
