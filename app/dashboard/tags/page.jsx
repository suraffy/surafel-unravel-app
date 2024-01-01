import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";

import Navbar from "@/app/components/organisms/Navbar";
import TableRow from "@/app/components/molecules/TableRow";
import Button from "@/app/components/atoms/Button";

const Tags = async () => {
  const apiEndpoint =
    "https://lively.unravelplc.com/public/api/content-creator/tags";

  const cookieStore = cookies();
  const encodedToken = cookieStore.get("authToken");
  const accessToken = decodeURIComponent(encodedToken.value);

  const response = await fetch(apiEndpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const {
    data: { data: tags },
  } = await (response.ok ? response.json() : { data: { data: [] } });

  return (
    <div>
      <Navbar />

      <main className="container my-6">
        <h2 className="font-bold text-xl text-center my-2">Tags</h2>

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
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {tags.map((tag) => (
                <TableRow key={tag.id} items={[tag.name.english, tag.slug]} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Tags;
