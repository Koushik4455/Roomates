import axios from "axios";
import React, { useEffect, useState } from "react";

const Monthly = () => {
  const [bill1, setBill1] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/add").then((res) => setBill1(res.data));
  }, []);

  const handleNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleDateChange = (e) => {
    setSearchDate(e.target.value);
  };

  return (
    <div>
      <center>
        <h1>Monthly Bill</h1>
      </center>
      <div className="container">
        <input
          type="text"
          value={searchName}
          onChange={handleNameChange}
          placeholder="Search by User Name"
        />
        <input
          type="text"
          value={searchDate}
          onChange={handleDateChange}
          placeholder="Search by Date"
        />

        <br />
        <table className="table table-sm table-dark mt-3">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">User Name</th>
              <th scope="col">Date</th>
              <th scope="col">Reason</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {bill1
  .filter((value) => {
    if (searchName === "" && searchDate === "") {
      return true; // Return true to include all items when no filters are applied
    } else if (
      value.name.toLowerCase().includes(searchName.toLowerCase()) &&
      value.calender.includes(searchDate)
    ) {
      return true;
    }
    return false; // Return false if no conditions match
  })
  .map((add) => (
    <tr key={add.id}>
      <th scope="row">{add.id}</th>
      <td>{add.name}</td>
      <td>{add.calender}</td>
      <td>{add.textarea}</td>
      <td>{add.amount}</td>
    </tr>
  ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Monthly;
