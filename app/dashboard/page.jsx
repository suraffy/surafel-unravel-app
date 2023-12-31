import React from "react";
import Navbar from "../components/organisms/Navbar";
import Box from "../components/molecules/Box";
import Link from "next/link";

const Dashboard = () => {
  console.log("Component is rendering");
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <h1 className="font-bold text-xl text-center">Lively - Dashboard</h1>
      </div>

      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        <Link href={"dashboard/category"}>
          <Box title={"category"} />
        </Link>

        <Link href={"dashboard/tags"}>
          <Box title={"tags"} />
        </Link>

        <Link href={"dashboard/unit"}>
          <Box title={"unit"} />
        </Link>

        <Link href={"dashboard/brand"}>
          <Box title={"brand"} />
        </Link>

        <Link href={"dashboard/products"}>
          <Box title={"products"} />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
