import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopItem = ({ data }) => {
  return (
    <>
      <Link href={`/shop/${data?.id}`} className="border p-5 rounded-md">
        <Image
          src={data?.thumbnail}
          height={150}
          width={100}
          layout="responsive"
          alt="item"
        />
        <h3 className="text-base font-semibold leading-5">{data?.title}</h3>
        <p className="text-primary">
          By <span className="font-bold">{data?.brand}</span>
        </p>
        <h5 className="font-bold text-xl text-brand">$ {data?.price}</h5>
      </Link>
    </>
  );
};

export default ShopItem;
