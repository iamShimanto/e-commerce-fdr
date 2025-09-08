import Image from "next/image";
import React from "react";

const SingleCart = ({ data }) => {
  // console.log(data);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 mb-4">
        <div className="flex items-center gap-4">
          <Image
            src={data?.thumbnail}
            height={50}
            width={50}
            alt="Product"
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg">
              {data?.title.substring(0, 30)} ...
            </h2>
            <p className="text-gray-500">$ {data?.price.toFixed(2)}</p>
          </div>
        </div>
        <div className=""></div>

        <div className="flex items-center gap-4">
          <span className="px-3 font-bold text-2xl text-brand flex items-center gap-3">
            <span className="text-secondary text-base">Quantity</span>{" "}
            {data?.quantity}
          </span>
          <p className="font-bold">$ {data?.total.toFixed(2)}</p>
          <button className="text-red-500 hover:text-red-700 cursor-pointer">
            🗑
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
