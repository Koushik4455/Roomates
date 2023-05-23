import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    gmail: "",
    password: "",
    conformpassword: "",
    photo: "",
  });
  
  const { username, gmail, password, conformpassword, photo } = data;
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/user", data)
      .then((res) => setData(res.data));
  };

  return (
    <div>
      <div className="container row">
        <div className="col-md-3"></div>
        <div className="col-md-7">
          <form onSubmit={submitHandler}>
            <div className="card mt-3 p-2">
              <div className="card-body">
                <h2 className="text-center mb-5">Register Form</h2>
                <div className="row">
                  <label className="col-md-4">User Name</label>
                  <input
                    className="col-md-8 mb-3"
                    type="text"
                    placeholder="Enter Your Name"
                    value={username}
                    name="username"
                    onChange={handler}
                  />
                  <br />
                  <label className="col-md-4">Email</label>

                  <input
                    className="col-md-8 mb-3"
                    type="gmail"
                    placeholder="Enter Your Gmail"
                    value={gmail}
                    name="gmail"
                    onChange={handler}
                  />
                  <br />
                  <lable className="col-md-4">Password</lable>

                  <input
                    className="col-md-8 mb-3"
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    name="password"
                    onChange={handler}
                  />
                  <br />
                  <lable className="col-md-4">Conform Password</lable>

                  <input
                    className="col-md-8 mb-3"
                    type="password"
                    placeholder="Enter Your Conform Password"
                    value={conformpassword}
                    name="conformpassword"
                    onChange={handler}
                  />
                  <br />

                  <label className="col-md-4" for="exampleFormControlFile1">Upload Photo</label>
                  <input
                    type="file"
                    class="form-control-file col-md-8 mb-3"
                    id="exampleFormControlFile1"
                    value={photo}
                    name="photo"
                    onChange={handler}
                  />
                </div>
                <input type="submit"></input>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Register;
