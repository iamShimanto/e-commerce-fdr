
import Category from "@/app/(main)/components/category/Category";
import CategoryCard from "@/app/(main)/components/category/CategoryCard";
import React from "react";

const page = async ({ params }) => {
  const param = await params.slug;
  const slug = await param[0];

  console.log(slug);
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);

  return (
    <>
      <div>
        <Category />
        <h2 className=" capitalize text-3xl font-medium text-brand text-center my-5">
          {slug.split("-").join(" ")}
        </h2>
        <div>
          {data?.products.map((item) => (
            <CategoryCard key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
