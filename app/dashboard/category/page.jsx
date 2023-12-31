import React from "react";
import Navbar from "@/app/components/organisms/Navbar";
import TableRow from "@/app/components/molecules/TableRow";

const Category = async () => {
  const apiEndpoint =
    "https://lively.unravelplc.com/public/api/content-creator/categories/";
  const accessToken = "641|1Pl2Vz03IVjeBZc2I6Pdldlreu3w3eBBJpl1yE9L5612b52d";

  const response = await fetch(apiEndpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const {
    data: { data: categories },
  } = await (response.ok ? response.json() : { data: { data: [] } });

  return (
    <div>
      <Navbar />

      <main className="container my-6">
        <h2 className="font-bold text-xl my-2">Categories</h2>

        <div className="overflow-x-auto">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Slug</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((category) => (
                <TableRow
                  key={category.id}
                  items={[
                    category.name.english,
                    category.type,
                    category.status,
                    category.slug,
                  ]}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Category;
