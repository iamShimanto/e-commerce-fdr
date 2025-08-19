"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fdr-food-api.onrender.com/api/auth/register",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data.message === "Email already in use") {
        toast.error(data.message);
      } else {
        toast.success(data.message);
      }
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="flex justify-center items-center mt-20">
        <div className="bg-gray-200 p-10">
          <form onSubmit={handlSubmit}>
            <h3 className="text-3xl text-primary font-bold text-center pb-4">
              SignUp
            </h3>
            <input
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
              className="input mb-6 border !rounded-xl focus:outline-1"
              type="text"
              required
              placeholder="Full Name"
            />
            <br />
            <input
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              className="input validator border !rounded-xl focus:outline-1"
              type="email"
              required
              placeholder="mail@site.com"
            />
            <div className="validator-hint">Enter valid email address</div>
            <input
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
              type="password"
              placeholder="Password"
              className="border input !rounded-xl focus:outline-1"
            />
            <br />
            <button className="btn btn-primary text-white text-center flex justify-center mx-auto mt-3">
              LogIn
            </button>
          </form>
          <div className="flex mt-3 gap-2.5">
            <p>Exist Account?</p>
            <Link
              href="/login"
              className="text-brand font-bold text-lg hover:text-brand/50"
            >
              LogIn
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
