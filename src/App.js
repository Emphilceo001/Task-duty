import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Hero from "./component/Hero";
import Task from "./pages/Task";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Hero" element={<Hero />}></Route>
          <Route path="/Task" element={<Task />}></Route>
          <Route path="/Edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
