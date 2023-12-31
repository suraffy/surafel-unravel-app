"use client";

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
            { label: "name", type: "text" },
            { label: "type", type: "text" },
            { label: "slug", type: "text" },
            { label: "image", type: "file" },
          ]}
        />
      </div>
    </div>
  );
};

export default Create;
