"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products/categories", {
        method: "GET",
      });
      const data = await res.json();
      setData(data);
    })();
  }, []);
  // console.log(data)

  return (
    <>
      <div className="mt-4">
        <h2 className="text-2xl text-red-400 font-semibold">Category</h2>
        <div className="flex flex-wrap items-center gap-3 my-3">
          {data?.slice(0, 15).map((item) => (
            <Link href={`/shop/category/${item.slug}`} key={item.slug} className="cursor-pointer">
              <p className="font-medium text-slate-700 bg-slate-200 px-2 py-1 rounded-md hover:bg-slate-300 duration-200">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
