import React from "react";

const Card = ({ title, body, imageSrc, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-3 mb-2    md:w-[400px]">
      <img
        src={imageSrc}
        alt=""
        className="w-full h-[200px] object-cover object-center mb-4"
      />
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p>{body}</p>
      <span classNam e="block text-gray-dark mt-[10px] font-bold ">
        {price}
      </span>
    </div>
  );
};

export default Card;
