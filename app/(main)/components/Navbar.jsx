import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBox, FaCartPlus, FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoMdCall } from "react-icons/io";

const Navbar = ({ userData }) => {

  return (
    <>
      <div className="navbar bg-base-100 container">
        <div className="navbar-start py-5">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-100 rounded-box z-1 mt-3 w-40 p-2 shadow-md flex flex-col items-start px-5 py-3"
            >
              <Link
                href="/"
                className="text-lg text-primary hover:text-brand ease-in-out duration-300 text-center py-1"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-lg text-primary hover:text-brand ease-in-out duration-300 text-center py-1"
              >
                About
              </Link>
              <Link
                href="/shop"
                className="text-lg text-primary hover:text-brand ease-in-out duration-300 text-center py-1"
              >
                Shop
              </Link>
              <Link
                href="/"
                className="text-lg text-primary hover:text-brand ease-in-out duration-300 text-center py-1"
              >
                Blog
              </Link>
              <Link
                href="/"
                className="text-lg text-primary hover:text-brand ease-in-out duration-300 text-center py-1"
              >
                Contact
              </Link>
            </ul>
          </div>
          <Link href="/" className="">
            <Image src="/images/logo.png" width={128} height={50} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex border border-brand px-4 py-3 rounded-md">
          <select name="" id="" className="outline-none cursor-pointer">
            <option>All Categories</option>
            <option>Milk and Dairies</option>
            <option>Wines and Alcohol</option>
            <option>Clothing and Beauty</option>
          </select>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for items..."
              className="px-5 outline-none"
            />
            <FaSearch className="cursor-pointer" />
          </div>
        </div>
        <div className="navbar-end flex gap-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xl text-primary cursor-pointer hover:text-brand duration-300"
          >
            <FaCartPlus className="text-2xl" />
            Cart
          </Link>
          {userData ? (
            <Link
              href="/profile"
              className="flex flex-col justify-center items-center"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center text-brand font-bold bg-white border">
                {userData?.name[0]}
              </div>
              <p className="text-xl font-bold text-primary">{userData?.name}</p>
            </Link>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-xl text-primary cursor-pointer hover:text-brand duration-300"
            >
              <BsFillPersonFill className="text-2xl" />
              LogIn
            </Link>
          )}
        </div>
      </div>
      <nav className="bg-brand">
        <div className="container hidden lg:flex items-center justify-between py-2">
          <p className="px-5 py-3.5 bg-brand w-fit rounded-md font-semibold text-white cursor-pointer flex items-center gap-2">
            <FaBox /> Browse All Categories <IoIosArrowDown />
          </p>
          <ul className="flex gap-3 xl:gap-6 font-bold text-primary text-base xl:text-lg">
            <li>
              <Link href="/" className="hover:text-primary/70 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary/70 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary/70 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary/70 transition">
                Mega menu
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary/70 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary/70 transition">
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Link
              href="tel: 1900 - 888"
              className="ml-auto flex items-center gap-2"
            >
              <IoMdCall className="text-2xl xl:text-4xl" />
              <div>
                <p className="text-brand font-bold text-base xl:text-2xl">
                  {" "}
                  1900 - 888
                </p>
                <p className="text-primary mb-7 font-medium text-xs xl:text-sm">
                  24/7 Support Center
                </p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
