import "./style.css";
// import { useState } from "react";
// import { ModalTable } from "../Modal";
export const Table = ({ data, columns }) => {
  // const [showPopUp, setShowPopup] = useState(false);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((item, index) => (
              <TableHeadItem item={item} key={index} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableBody item={item} columns={columns} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

const TableBody = ({ item, columns }) => (
  <tr>
    {columns.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split(".");
        return <td key={index}>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }
      if (columnItem.value === "id") {
        return (
          <td
            onClick={() => {
              console.log(item);
            }}
            key={index}
          >
            {item[`${columnItem.value}`]}
          </td>
        );
      } else {
        return <td key={index}>{item[`${columnItem.value}`]}</td>;
      }
    })}
  </tr>
);
