import React from "react";

function MyTable(props) {
  const { columns, dataSource } = props;

  return (
    <table border="1" cellspacing="0" cellpadding="0" style={{ width: "100%" }}>
      <thead>
        <tr>
          {columns.map((item, index) => {
            return <th key={item.dataIndex}>{item.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((item1) => {
          return (
            <tr>
              {columns.map((item2) => {
                return <td>{item1[item2.dataIndex]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MyTable;
