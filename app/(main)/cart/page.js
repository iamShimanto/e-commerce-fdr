import Image from "next/image";
import React from "react";
import SingleCart from "../components/utils/SingleCart";

const Cart = async () => {
  const res = await fetch("https://dummyjson.com/carts/2", {
    method: "GET",
  });
  const data = await res.json();
  // console.log(data);

  return (
    <>
      <div className="container">
        <h2 className="text-2xl font-bold flex items-center justify-center mt-4 gap-2 mb-6">
          🛒 Shopping Cart
        </h2>
        <div>
          {data?.products?.map((item) => (
            <SingleCart key={item.id} data={item} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <h2 className="text-xl font-bold">Total Discount Price:</h2>
          <p className="text-xl font-bold">$ {data?.discountedTotal}</p>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition cursor-pointer">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
