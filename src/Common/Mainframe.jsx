import React from "react";
import Header from "./Header";
import { ChevronBarDown } from "react-bootstrap-icons";

function Mainframe() {
  return (
    <section className="mainframe position-relative ">
         

    <div className="intro-clip position-absolute">
      <video
        src="video\intro-clip.mp4"
        className="img-fluid"
        loop
        autoPlay
        muted
      />
    </div>
    <div class="wave-container position-absolute w-100 text-center">
      <h1 class="wave-text">
        <span>T</span>
        <span>E</span>
        <span>A</span>
        <span>M</span>
      </h1>
      <h1 class="wave-text">
        <span>P</span>
        <span>A</span>
        <span>T</span>
        <span>C</span>
        <span>H</span>
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>K</span>
      </h1>
      <div className="scroll d-flex justify-content-center py-3">
          <div className="mouse"></div>
        </div>
    </div>
  </section>
  );
}

export default Mainframe;
