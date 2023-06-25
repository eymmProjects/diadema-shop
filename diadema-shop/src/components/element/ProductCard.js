import React from "react";

export const ProductCard = ({ imageUrl, productName }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={productName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
      </div>
    </div>
  );
};
