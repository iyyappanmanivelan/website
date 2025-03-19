import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainroutes from "./Mainroutes";
import Home from "../Pages/Home";
import Aboutus from "../Pages/Aboutus";
import Service from "../Pages/Service";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";

function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainroutes />}>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Approutes;
