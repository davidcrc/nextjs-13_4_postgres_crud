import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-5 mb-2">
      <div className="container flex justify-between px-10 md:ppx-0 mx-auto">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">Next Postgres</h1>
        </Link>
        <ul className="flex gap-x-4">
          <li>
            <Link href={"/tasks/new"}>New Task</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
