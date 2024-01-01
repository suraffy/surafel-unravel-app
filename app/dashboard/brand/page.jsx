import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/organisms/Navbar";
import TableRow from "@/app/components/molecules/TableRow";
import Button from "@/app/components/atoms/buttons";

const Brand = async () => {
  const apiEndpoint =
    "https://lively.unravelplc.com/public/api/content-creator/all-brands";
  const accessToken = "677|a4NQZxf9AvpTFZvTPKi0zbSbOqZ6EpQJ2A3qyCzW802674ff";

  const response = await fetch(apiEndpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const { data: brands } = await (response.ok ? response.json() : { data: [] });

  return (
    <div>
      <Navbar />

      <main className="container my-6">
        <h2 className="font-bold text-xl text-center my-2">Categories</h2>

        <div className="my-6 flex ml-3">
          <Link href={"/dashboard/category/create"}>
            <Button label={"New Catagory"} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {brands.map((brand) => (
                <TableRow key={brand.id} items={[brand.name.english]} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Brand;
