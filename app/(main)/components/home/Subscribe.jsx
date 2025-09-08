import Image from "next/image";
import React from "react";

const Subscribe = () => {
  return (
    <>
      <section>
        <div className="container subscribe rounded-[20px] pt-21 px-19.5">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h2 className="text-[40px] font-bold max-w-132 text-primary leading-12">
                Stay home & get your daily needs from our shop
              </h2>
              <p className="text-lg font-normal text-secondary leading-6 mt-5 mb-12">
                Start You'r Daily Shopping with{" "}
                <span className="text-brand">Nest Mart</span>
              </p>
              <div className="bg-white max-w-112 flex items-center justify-between h-16 rounded-full pl-10 overflow-hidden mb-21">
                <input
                  type="email"
                  placeholder="Your emaill address"
                  className="w-full border-none outline-none"
                />
                <button className="px-10 py-5.5 bg-brand rounded-full cursor-pointer text-white font-medium hover:bg-brand/90 duration-300">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mt-21">
              <Image
                src="/images/subscribe.png"
                height={500}
                width={500}
                alt="subscribe"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
