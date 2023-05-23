import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Register from "./Component/Register";
import Mountly from "./Component/Mountly";
import Addbill from "./Component/Addbill";

const App = () => {
  return <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/adduser" element={<Register />}/>
      <Route exact path="/muntly" element={<Mountly />}/>
      <Route exact path="/addbill" element={<Addbill />}/>
    </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
