import React from "react";

const Table = ({ data }) => {

  console.log(data)
  return (
    <div>
      <h2>Periods Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Max DD</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Start_Date}</td>
                <td>{item.End_Date}</td>
                <td>{item.Max_Drawdown}</td>
                <td>{item.Drawdown_days}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
