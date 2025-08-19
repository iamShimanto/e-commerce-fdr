import Category from "../../../components/category/Category";
import React from "react";
import CategoryCard from "../../../components/category/CategoryCard";

const page = async ({ params }) => {
  const param = await params.slug;
  const slug = await param[0];

  console.log(slug);
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`, {
    method: "GET",
  });
  const data = await res.json();


  return (
    <>
      <div className="mb-15">
        <Category />
        <h2 className=" capitalize text-3xl font-medium text-brand text-center my-5">
          {slug.split("-").join(" ")}
        </h2>
        <div className="grid grid-cols-5 gap-6 drop-shadow-slate-300 drop-shadow-2xl">
          {data?.products.map((item) => (
            <CategoryCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
