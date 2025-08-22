import Link from "next/link";
import ShopItem from "../components/shop/ShopItem";
import LimitSelector from "../components/shop/LimitSelector";

export default async function Shop({ searchParams }) {
  const limit = parseInt(searchParams?.limit ?? "20", 10) || 20;
  const skip = parseInt(searchParams?.skip ?? "0", 10) || 0;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const productData = await res.json();

  const total = productData?.total ?? 0;
  const products = productData?.products ?? [];

  const prevSkip = Math.max(0, skip - limit);
  const nextSkip = skip < total - limit ? skip + limit : skip;

  const q = (l, s) => `?limit=${l}&skip=${s}`;

  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center justify-between rounded-md">
            <h3 className="text-xl font-medium text-primary/50 my-10">
              We found <span className="font-bold text-brand">{total}</span>{" "}
              items for you!
            </h3>

            <LimitSelector limit={limit} skip={skip} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
            {products.length > 0 &&
              products.map((item) => <ShopItem key={item.id} data={item} />)}
          </div>

          <div className="flex justify-center items-center gap-10 my-10">
            <Link
              href={q(limit, prevSkip)}
              scroll={false}
              className="text-white bg-brand hover:bg-brand/60 hover:text-black duration-200 px-4 py-2 rounded-md font-medium"
            >
              Prev
            </Link>
            <Link
              href={q(limit, nextSkip)}
              scroll={false}
              className="text-white bg-brand hover:bg-brand/60 hover:text-black duration-200 px-4 py-2 rounded-md font-medium"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
