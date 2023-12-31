import React from "react";
import Button from "../atoms/Buttons";
import InputField from "../atoms/InputField";

const Form = (props) => {
  const { fields } = props;

  return (
    <form className="flex flex-col gap-4 container">
      {fields.map((field) => (
        <label key={field.label} className="form-control w-full max-w-xs">
          <span className="label-text ml-2">{field.label}</span>
          <InputField label={field.label} type={field.type} />
        </label>
      ))}

      <div className="max-w-30 ml-10">
        <Button label={"Submit"} />
      </div>
    </form>
  );
};

export default Form;
