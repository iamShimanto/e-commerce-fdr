import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const cookie = await cookies();
  const myCookie = cookie.get("accessToken")?.value;

  async function profileData() {
    const res = await fetch("https://fdr-food-api.onrender.com/api/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${myCookie}`,
      },
      cache: "no-store",
    });
    return await res.json();
  }

  const res = await profileData();

  if (res.message === "Token invalid") {
    return redirect("/");
  }
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col justify-center text-center items-center p-3 px-10 w-fit h-100 bg-white rounded-md shadow-lg">
        <div className="flex justify-center items-center w-20 h-20 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300 text-3xl font-bold">
          {res?.user.name[0] || "X"}
        </div>

        <div className="block border-l border-gray-300 m-3">
          <div className="">
            <h3 className="text-brand font-semibold text-2xl ">
              {res?.user.name}
            </h3>
            <h3 className="bg-clip-text text-primary bg-gradient-to-l from-[#005BC4] to-[#27272A] text-xl font-bold">
              {res?.user.email}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
