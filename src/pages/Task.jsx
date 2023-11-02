import React from "react";
import "../styles/Task.css";
import { Link } from "react-router-dom";
const Task = () => {
  return (
    <div className="container">
      <h1 className="my-5">New Task</h1>

      <form>
        <div className="form1">
          <label className="pad1">Task Title</label>
          <input type="text" className="w-100 p-3" />
        </div>

        <div className="text1 my-5 ">
          <label className="lab1 ">Description</label>
          <textarea className="w-100 p-3" cols="30" rows="10"></textarea>
        </div>

        <div className="del">
          <label className="tag1 ">Tag</label>
          <select name="" id="" className="w-100 p-4">
            <option value="Urgent">Urgent</option>
            <option value="Important">Important</option>
          </select>
        </div>

        <button className="btn text-center w-100 my-5 py-3">Done</button>
      </form>

      <Link className="ark text-center mb-5 ">
        <p>Back To Top</p>
      </Link>
    </div>
  );
};

export default Task;
