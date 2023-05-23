import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [clone, setClone] = useState([]);
  useEffect(() => {
   getUser();
  }, []);
  const getUser =()=>{
    axios.get("http://localhost:8000/user").then((res) => setClone(res.data));
  }
  const deleteuser=(id)=>{
    axios.delete(`http://localhost:8000/user/${id}`)
    getUser();
  }
  return (
   <div>
    
     <div className="container mt-5">
      <div className="row">
        {clone.map((user) => (
          <div className="col-md-4 mt-5">
            <div className="card">
              <div className="card-body">
                <img src={user.photo}></img>
                <h3 className="card-title mt-3">{user.username}</h3>
                <p class="card-text">{user.gmail}</p>
                <Link to="/addbill"  class="btn btn-primary">
                  Add Bill
                </Link>
                <a onClick={()=>deleteuser(user.id)} class="btn btn-danger bnt-pston">
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Home;
