import React from "react";
import task from "../assets/Component 1.svg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row my-5 align-items-center justify-content-between">
        <div className="col-sm-12 col-lg-6">
          <h2>
            Manage Your Task On
            <p className="pod">TaskDuty</p>
          </h2>

          <p className="my-3 1h-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            harum reprehenderit magni ad eligendi quaerat velit eum obcaecati
            sed, modi atque vel eveniet tenetur, tempore minima mollitia,
            exercitationem aperiam explicabo dolor minus aliquam veritatis. Esse
            consectetur quas nam deleniti illum?
          </p>
          <button className="btn text-light border-radius p-2">
            Go to My Tasks
          </button>
        </div>

        <div className="col-sm-12 col-lg-5">
          <img src={task} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
