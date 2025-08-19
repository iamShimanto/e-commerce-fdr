import Link from 'next/link';
import React from 'react'

const Banner = () => {
  return (
    <>
      <section
        className="py-20 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('images/banner.png')" }}
      >
        <div className="container">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold tracking-wide">
              What are you looking for?
            </h1>
            <div className="flex justify-between items-center bg-white py-4  shadow-xl my-6 pl-10 h-15 w-120 overflow-hidden rounded-full">
              <div>
                <input
                  className="outline-none"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <button className="bg-brand h-15 w-35 font-medium text-white cursor-pointer hover:bg-brand/70 duration-300 rounded-full">
                Subscribe
              </button>
            </div>
            <ul className="flex items-center gap-10">
              <li className="text-primary hover:text-brand hover:-translate-y-1 cursor-pointer duration-200 font-medium">
                <Link href="/shop/category/beauty">Beauty</Link>
              </li>
              <li className="text-primary hover:text-brand hover:-translate-y-1 cursor-pointer duration-200 font-medium">
                <Link href="/shop/category/furniture">Furniture</Link>
              </li>
              <li className="text-primary hover:text-brand hover:-translate-y-1 cursor-pointer duration-200 font-medium">
                <Link href="/shop/category/laptops">Laptops</Link>
              </li>
              <li className="text-primary hover:text-brand hover:-translate-y-1 cursor-pointer duration-200 font-medium">
                <Link href="/shop/category/mens-shirts">Mens Shirts</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner
