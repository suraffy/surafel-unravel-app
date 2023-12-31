import React from "react";
import Button from "../atoms/buttons";

const TableRow = (props) => {
  const { items } = props;

  return (
    <tr>
      {items.map((item) => (
        <td key={item}>{item}</td>
      ))}
      <td>
        <Button label={"Edit"} action={"edit"} />
      </td>
      <td>
        <Button label={"Delete"} action={"delete"} />
      </td>
    </tr>
  );
};

export default TableRow;