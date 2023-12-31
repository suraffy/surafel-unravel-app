import React from "react";

const InputField = (props) => {
  const { label, type } = props;

  return (
    <input
      type={type}
      placeholder={label}
      className="file-input input-sm input-bordered w-full max-w-xs"
    />
  );
};

export default InputField;
