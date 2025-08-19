import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const ShopItem = ({ data }) => {

  return (
    <>
      <Link href={`/shop/${data?.id}`}>
        <div className="border border-primary/20 rounded-xl cursor-pointer hover:scale-105 duration-200 p-5 relative overflow-hidden">
          <p className=" absolute top-0 left-0 px-4 py-2 bg-brand rounded-br-2xl text-white text-sm">{data?.availabilityStatus}</p>
          <Image src={data?.images[0]} width={200} height={50} alt="image" />
          <p className="text-secondary/80 capitalize text-xs ">
            {data?.category}
          </p>
          <h3 className="font-bold text-lg">
            {data?.title.substring(0, 15)}
            {data?.title.length > 14 && "..."}
          </h3>
          <Box>
            <Rating
              className="text-sm"
              name="simple-controlled"
              value={data?.rating}
            />
          </Box>
          <p className="pb-2 text-sm text-secondary font-medium">
            By <span className="text-brand">{data?.brand || "shimanto"}</span>
          </p>
          <div className="flex justify-between items-center gap-2">
            <h4 className="text-brand font-bold text-lg">
              ${data?.price}{" "}
              <span className="line-through text-sm text-secondary">
                ${(data?.discountPercentage + data?.price).toFixed(2)}
              </span>
            </h4>
            <button className="flex items-center gap-1 px-4 py-2 bg-brand/20 text-sm font-bold text-brand rounded-md cursor-pointer hover:bg-brand/40 duration-200">
              <FaCartArrowDown />
              Add
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShopItem;
