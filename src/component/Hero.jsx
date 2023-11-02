import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-between my-1">
          <h2>My Tasks</h2>
          <p className="para1">+Add New Task</p>
        </div>

        <div className="border rounded p-5">
          <div className="div3">
            <p className="text-danger">Urgent</p>
            <div className="div4">
              <Link to="/Edit">
                <button className="btn2 mx-3">Edit</button>
              </Link>
              <button className="btn3"> Delete</button>
            </div>
          </div>
          <h3>Fin Tech Website Update</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
            suscipit repudiandae libero omnis, eligendi tempore doloremque
            placeat distinctio culpa architecto, autem odit, vitae iusto tenetur
            nostrum ad praesentium ipsa deleniti atque voluptatum non enim
            recusandae! Maxime, minima soluta dolores voluptatibus iure natus ex
            eius, eveniet, nulla ea ad error.
          </p>
        </div>
      </div>

      <div className="my-5">
        <div className="border rounded p-5">
          <div className="div3">
            <p className="text-success">Important</p>
            <div className="div4">
              <Link to="/Edit">
                {" "}
                <button className="btn2 mx-3">Edit</button>
              </Link>
              <button className="btn3"> Delete</button>
            </div>
          </div>
          <h3>Agro Website Update</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
            suscipit repudiandae libero omnis, eligendi tempore doloremque
            placeat distinctio culpa architecto, autem odit, vitae iusto tenetur
            nostrum ad praesentium ipsa deleniti atque voluptatum non enim
            recusandae! Maxime, minima soluta dolores voluptatibus iure natus ex
            eius, eveniet, nulla ea ad error.
          </p>
        </div>
      </div>

      <div>
        <div className="border rounded p-5">
          <div className="div3">
            <p className="text-danger">Urgent</p>
            <div className="div4">
              <Link to="/Edit">
                {" "}
                <button className="btn2 mx-3">Edit</button>
              </Link>
              <button className="btn3"> Delete</button>
            </div>
          </div>
          <h3>Fin Tech Website Update</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
            suscipit repudiandae libero omnis, eligendi tempore doloremque
            placeat distinctio culpa architecto, autem odit, vitae iusto tenetur
            nostrum ad praesentium ipsa deleniti atque voluptatum non enim
            recusandae! Maxime, minima soluta dolores voluptatibus iure natus ex
            eius, eveniet, nulla ea ad error.
          </p>
        </div>
      </div>

      <div className="my-5">
        <div className="border rounded p-5">
          <div className="div3">
            <p className="text-success">Important</p>
            <div className="div4">
              <Link to="/Edit">
                <button className="btn2 mx-3">Edit</button>
              </Link>
              <button className="btn3"> Delete</button>
            </div>
          </div>
          <h3>Agro Website Update</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
            suscipit repudiandae libero omnis, eligendi tempore doloremque
            placeat distinctio culpa architecto, autem odit, vitae iusto tenetur
            nostrum ad praesentium ipsa deleniti atque voluptatum non enim
            recusandae! Maxime, minima soluta dolores voluptatibus iure natus ex
            eius, eveniet, nulla ea ad error.
          </p>
        </div>
      </div>
      <Link className="col mb-5 text-center">
        <p>Back To Top</p>
      </Link>
    </div>
  );
};

export default Hero;
