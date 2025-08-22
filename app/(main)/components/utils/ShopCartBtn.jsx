"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ShopCartBtn = ({ data }) => {
  const [value, setValue] = useState(1);

  const handleInc = () => {
    if (value < 10 & value < data?.stock) {
      setValue(value + 1);
    }
  };

  const handleDec = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="border-2 border-brand w-25 px-2 py-1 rounded-lg">
        <div className="flex items-center justify-between h-10">
          <p className="pl-4 text-lg font-bold">{data?.stock === 0 ? 0 : value}</p>
          <div className="flex flex-col">
            <button
              onClick={handleInc}
              className="inc text-2xl text-brand cursor-pointer"
            >
              <MdKeyboardArrowUp />
            </button>
            <button
              onClick={handleDec}
              className="dec text-2xl text-brand cursor-pointer"
            >
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className="h-12 bg-brand w-fit px-4 py-2 rounded-lg cursor-pointer">
        <p className="text-lg font-bold text-white rounded-lg">Add to cart</p>
      </div>

    </div>
  );
};

export default ShopCartBtn;
