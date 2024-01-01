import React from "react";

const Box = ({ title }) => {
  return (
    <div className="p-4 border shadow hover:ring-4 hover:ring-slate-200 hover:ring-offset-2 rounded-lg">
      <h2 className="text-lg">{title}</h2>
    </div>
  );
};

export default Box;
