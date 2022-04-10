import React from "react";
import { Routes, Route } from "react-router-dom";
//Pages
import Home from "../../Pages/Home";
import EasyPuzzel from "../../Pages/EasyPuzzel";
import Hardpuzzel from "../../Pages/HardPuzzel";
import Games from "../../Pages/Games";
import Error from "../../Pages/Error";
import About from "../../Pages/About";
import SignUp from "../SignUp/SignUp";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/easy" element={<EasyPuzzel />} />

      <Route path="/hard" element={<Hardpuzzel />} />

      <Route path="/games" element={<Games />} />

      <Route path="/about" element={<About />} />

      <Route path="/signup" element={<SignUp />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouteComponent;
