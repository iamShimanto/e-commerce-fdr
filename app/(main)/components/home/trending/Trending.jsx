import React from "react";
import TrendCard from "./TrendCard";

async function trendData() {
  const res = await fetch("https://dummyjson.com/products?limit=20", {
    cache: "no-store",
  });
  return res.json();
}

const Trending = async () => {
  const data = await trendData();
  // console.log(data);

  return (
    <>
      <section className="py-25">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary tracking-wide text-center mb-15">
            Trending items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 drop-shadow-slate-300 drop-shadow-2xl">
            {data?.products.map((item) => (
              <TrendCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
