"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://fdr-food-api.vercel.app/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      document.cookie = `accessToken=${data?.token}`;
      if (data.message === "Invalid credentials") {
        return toast.error(data.message);
      } else {
        toast.success("Login Successfull");
      }
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex justify-center items-center mt-20">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="bg-gray-200 p-10">
        <form onSubmit={handleSubmit}>
          <h3 className="text-3xl text-primary font-bold text-center pb-4">
            LogIn
          </h3>
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
          <p>Create Account</p>
          <Link
            href="/signup"
            className="text-brand font-bold text-lg hover:text-brand/50"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
