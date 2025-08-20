import React from "react";

const Cart = async () => {
  const res = await fetch("https://dummyjson.com/carts/18", {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);

  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default Cart;
