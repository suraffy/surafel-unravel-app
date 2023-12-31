import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="navbar container bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Unravel</a>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src="/surafel.jpg"
                width={60}
                height={60}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-center font-semibold">Surafel Araya</li>
            <li className="mt-2">
              <button className="text-center">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
