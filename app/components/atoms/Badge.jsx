import React from "react";

const Badge = (props) => {
  const { label } = props;

  return <span className="badge badge-ghost rounded-md py-3">{label}</span>;
};

export default Badge;
