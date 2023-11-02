import React from "react";
import { Link } from "react-router-dom";
import taskdutylogo from "../assets/Group 2.svg";
import face from "../assets/Ellipse 1.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <div className="container d-flex justify-content-between align-items-center p-3">
        <div className="d-flex">
          <Link to="/">
            <img src={taskdutylogo} alt="" />
          </Link>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <Link to="Task" className="text-decoration-none text-dark">
            <p>New Task</p>
          </Link>
          <Link to="Hero" className="text-decoration-none text-dark">
            <p>All Task</p>
          </Link>
          <img src={face} alt="" className="img" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
