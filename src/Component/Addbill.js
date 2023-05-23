import axios from "axios";
import React, { useEffect, useState } from "react";

const Addbill = () => {
  const [bill, setBill] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    name: "",
  });
  const [send, setSend] = useState({
    name: "",
    calender: "",
    textarea: "",
    amount: "",
  });
  const { calender, textarea, amount } = send;
  useEffect(() => {
    axios.get("http://localhost:8000/user").then((res) => {
      setBill(res.data);
    });
  }, []);
  const handlers = (e) => {
    setSend({ ...send, [e.target.name]: e.target.value });
  };
  const handlers1 = (e) => {
    setSelectedOption(e.target.value);
  };
  console.log(selectedOption);
  const submitHandlers = (e) => {
    const de = {
      ...send,
      name: selectedOption,
    };
    e.preventDefault();
    axios
      .post("http://localhost:8000/add", de)
      .then((res) => setSend(res.data));
  };
  // console.log("jhjgdjd", bill);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={submitHandlers}>
                <label>
                  <b>Select Person</b>
                </label>
                {/* <select class="form-control form-control-lg" >
                  <option >Default select</option>
                  {bill?.map((user) => (
                    <option value={name} name="name"onChange={handlers} >{user.username}</option>
                  ))}
                </select> */}
                <select
                  className="form-control form-control-lg"
                  value={selectedOption}
                  onChange={handlers1}
                >
                  <option>Default select</option>
                  {bill?.map((user) => (
                    <option key={user.id} value={user.username}>
                      {user.username}
                    </option>
                  ))}
                </select>
                <br />
                <label>
                  <b>Select The Date</b>
                </label>
                <br />
                <input
                  type="date"
                  id="birthday"
                  name="calender"
                  value={calender}
                  onChange={handlers}
                />
                <br />
                <br />
                <label>
                  <b>Write the Note</b>
                </label>
                <br />
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={textarea}
                  name="textarea"
                  onChange={handlers}
                ></textarea>
                <br />

                <label>
                  <b>Mention The Amount</b>
                </label>
                <br />
                <input
                  type="num"
                  placeholder="enter amount"
                  value={amount}
                  name="amount"
                  onChange={handlers}
                />
                <br />
                <br />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Addbill;
