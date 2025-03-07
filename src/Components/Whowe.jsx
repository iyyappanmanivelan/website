import React from "react";
import { Aboutus } from "../Constants/About.content";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

function Whowe() {
  return (
    <section className="whoweare">
      <div className="container">
        <div className="wh-title text-center">
          <h2>{Aboutus?.who_we[0]?.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="wh-explain text-start">
              <p>{Aboutus?.who_we[0]?.description1}</p>
              <p>{Aboutus?.who_we[0]?.description2}</p>
              <p>{Aboutus?.who_we[0]?.description3}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="whowe h-100">
            <img src='\assets\videoedit.jpg' className='img-fluid h-100'/>
            
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Whowe;
