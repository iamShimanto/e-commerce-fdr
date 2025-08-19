import { Box, Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import ShopCartBtn from "../../components/utils/ShopCartBtn";
import RelatedCard from "../../components/shop/RelatedCard";

  // =========== related data
  async function relatedData() {
    const res = await fetch("https://dummyjson.com/products?limit=4", {
      cache: "no-store",
    });
    return await res.json();
  }

const page = async ({ params }) => {
  const id = await params.id[0];

  async function singleData() {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      next: { revalidate: 300 },
    });
    return res.json();
  }
  const data = await singleData();

  const relateData = await relatedData();
  return (
    <>
      <div className="container mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="border border-primary/40 rounded-2xl">
            <Image
              src={data?.images[0]}
              width={300}
              height={300}
              layout="responsive"
              alt="image"
            />
          </div>
          <div>
            <p className="px-3 py-1 bg-red-200/50 w-fit rounded-lg text-pink-900">
              {data?.availabilityStatus}
            </p>
            <h2 className="text-4xl font-bold italic tracking-wider max-w-150 py-10">
              {data?.title}
            </h2>
            <div className="flex gap-1">
              <Box>
                <Rating
                  className="text-sm"
                  name="simple-controlled"
                  value={data?.rating}
                />
              </Box>
              <p className="text-secondary text-lg">
                ({data?.reviews.length} reviews)
              </p>
            </div>
            <h2 className="text-5xl font-black flex gap-3 items-center text-brand my-7">
              ${data?.price}{" "}
              <sub className="text-3xl text-secondary line-through">
                ${(data?.discountPercentage + data?.price).toFixed(2)}
              </sub>{" "}
            </h2>
            <p className="text-secondary max-w-150 mb-5">{data?.description}</p>
            <ShopCartBtn data={data} />
            <div>
              <div className="flex gap-2 text-secondary font-medium mt-5">
                Tags :
                {data?.tags.map((item, index) => (
                  <p key={index} className="text-brand">
                    {item}
                  </p>
                ))}
              </div>
              <p className="my-5 text-secondary font-medium">
                Stock:{" "}
                <span className="text-brand">{data?.stock} Items in Stock</span>
              </p>
            </div>
          </div>
        </div>
        {/* =========== reviews part ================ */}
        <div className="my-10 ">
          <h3 className="text-4xl text-brand font-semibold text-center">
            Customer Reviews
          </h3>
          <div>
            <div>
              {data?.reviews.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="mx-auto text-center my-4 rounded-md py-3 px-4 border w-140"
                >
                  <h4 className="text-xl font-medium text-primary">
                    {item.reviewerName}
                  </h4>
                  <p className="text-sm font-medium text-pink-500 my-1">
                    Date: {item.date.split("T")[0]}
                  </p>
                  <Box>
                    <Rating
                      className="text-sm"
                      name="simple-controlled"
                      value={item?.rating}
                    />
                  </Box>
                  <p className="text-sm text-secondary font-medium my-2">
                    {item.comment}
                  </p>
                  <p className="text-sm font-medium text-blue-400">
                    Email: {item.reviewerEmail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-medium text-brand pb-3 border-b border-primary/30 mb-5">
            Related products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {relateData.products.map((item) => (
              <RelatedCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
