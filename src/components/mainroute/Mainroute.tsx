import React from "react";
import { NavBar } from "../ui/navbar/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";

import { About } from "../about/About";
import { Home } from "../home/Home";

export const Mainroute = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  );
};
