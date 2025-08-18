import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

const TrendCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <Link href={`/shop/${data?.id}`}>
        <div className="border border-primary/20 rounded-xl cursor-pointer hover:scale-105 duration-200 p-5">
          <Image src={data?.images[0]} width={200} height={50} alt="image" />
          <p className="text-secondary/80 capitalize text-xs ">
            {data?.category}
          </p>
          <h3 className="font-bold text-lg">
            {data?.title.substring(0, 15)}
            {data?.title.length > 14 && "..."}
          </h3>
          <p className="py-2 text-sm text-secondary font-medium">
            By <span className="text-brand">{data?.brand || "shimanto"}</span>
          </p>
          <div className="flex justify-between items-center">
            <h4 className="text-brand font-bold text-xl">${data?.price}</h4>
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

export default TrendCard;
