import React, { useEffect } from "react";
import api from "../api/index";

function Table() {
  const [stockData, setStockData] = React.useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await api.getStocksDeatil();
      if (response) {
        setStockData(response.data.data);
      }
    }
    fetchMyAPI();
  }, []);

  let showTable = true;
  if (!stockData.length) {
    showTable = false;
  }

  return (
    <div className="tab" style={{ overflowY: "auto" }}>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            {/* <th scope="col">%</th> */}
            <th scope="col">Announcement Date</th>
            {/* <th scope="col">Record Date</th> */}
            <th scope="col">Ex-Dividend Date</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock) => {
            return (
              <tr>
                <td>{stock.companyName}</td>
                <td>{stock.dividend}</td>
                <td>{stock.announcementDate}</td>
                <td>{stock.exDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
