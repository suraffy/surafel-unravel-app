import React from "react";

const Button = (props) => {
  const { label, action } = props;

  let btnClasses = "btn";

  if (action === "delete") {
    btnClasses = "btn btn-outline btn-error btn-xs";
  } else if (action === "edit") {
    btnClasses = "btn btn-outline btn-warning btn-xs";
  }

  return <button className={btnClasses}>{label}</button>;
};

export default Button;
