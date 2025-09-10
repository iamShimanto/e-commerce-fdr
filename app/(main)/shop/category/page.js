import React from "react";
import Category from "../../components/category/Category";
import CategoryCard from "../../components/category/CategoryCard";

const page = async () => {
  const res = await fetch(`https://dummyjson.com/products?limit=20`, {
    method: "GET",
    cache: "no-store",
  });
  const productData = await res.json();
  console.log(productData.products);

  return (
    <>
      <div className="mb-15 container">
        <Category />
        <h2 className=" capitalize text-3xl font-medium text-brand text-center my-5">
          {/* {slug?.split("-").join(" ")} */}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 drop-shadow-slate-300 drop-shadow-2xl">
          {productData?.products?.map((item) => (
            <CategoryCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
