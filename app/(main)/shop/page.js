"use client";
import React, { useEffect, useState } from "react";
import ShopItem from "../components/shop/ShopItem";

const Shop = () => {
  const [productData, setProductData] = useState({});
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      setProductData(data);
    })();
  }, [limit, skip]);

  const handleLimit = (e) => {
    const value = e.target.value;
    setLimit(value);
  };

  const prevSkip = () => {
    if (skip - limit >= 0) {
      setSkip(skip - limit);
    } else {
      setSkip(0);
    }
  };
  const nextSkip = () => {
    if (skip < productData?.total - limit) {
      setSkip(parseInt(skip) + parseInt(limit));
    }
  };
  console.log(skip);

  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center justify-between rounded-md">
            <h3 className="text-xl font-medium text-primary/50 my-10">
              We found{" "}
              <span className="font-bold text-brand">{productData?.total}</span>{" "}
              items for you!
            </h3>
            <select
              onChange={handleLimit}
              className="px-3 py-2 bg-brand rounded-md hover:bg-brand/80 duration-200"
            >
              <option value="20">20</option>
              <option value="40">40</option>
              <option value="60">60</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
            {productData?.products?.map((item) => (
              <ShopItem key={item.id} data={item} />
            ))}
          </div>
          <div className="flex justify-center items-center gap-10 my-10">
            <button
              onClick={prevSkip}
              className="text-white bg-brand hover:bg-brand/60 hover:text-black duration-200 px-4 py-2 rounded-md cursor-pointer font-medium"
            >
              Prev
            </button>
            <button
              onClick={nextSkip}
              className="text-white bg-brand hover:bg-brand/60 hover:text-black duration-200 px-4 py-2 rounded-md cursor-pointer font-medium"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
