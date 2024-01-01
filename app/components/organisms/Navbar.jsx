import React from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const Navbar = () => {
  const handleLogout = async () => {
    "use server";

    cookies().set({
      name: "authToken",
      value: "",
      httpOnly: true,
      path: "/",
    });

    redirect("/login");
  };

  return (
    <div className="shadow">
      <div className="navbar container bg-base-100">
        <div className="flex-1">
          <Link href={"/dashboard"} className="btn btn-ghost text-xl">
            <Image
              src={"/unravel logo.svg"}
              width={180}
              height={20}
              alt="logo"
            />
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="profile"
                src="https://i.imgur.com/oq2aLRm.png"
                width={40}
                height={60}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-center font-semibold">Admin</li>
            <li className="mt-2">
              <form action={handleLogout}>
                <button className="pr-32 cursor-pointer">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
