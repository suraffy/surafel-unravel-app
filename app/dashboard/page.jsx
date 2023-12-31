import React from "react";
import Navbar from "./Navbar";
import Box from "./Box";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <h1 className="font-bold text-xl text-center">Lively - Dashboard</h1>
      </div>

      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        <Box title={"catagory"} />
        <Box title={"tags"} />
        <Box title={"unit"} />
        <Box title={"brand"} />
        <Box title={"products"} />
      </div>
    </div>
  );
};

export default Dashboard;
