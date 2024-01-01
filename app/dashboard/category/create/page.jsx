import React from "react";
import Navbar from "@/app/components/organisms/Navbar";
import Form from "@/app/components/molecules/Form";

const Create = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="">
          <h2 className="text-xl font-bold my-6">New Catagory</h2>
        </div>

        <Form
          fields={[
            { label: "Name", type: "text" },
            { label: "Type", type: "text" },
            { label: "Slug", type: "text" },
            { label: "Image", type: "file" },
          ]}
        />
      </div>
    </div>
  );
};

export default Create;
