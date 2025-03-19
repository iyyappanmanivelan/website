import React from "react";
import { portfolio_data } from "../Constants/Portfolio.content";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination , Autoplay } from "swiper/modules";

function Portfoliodata() {
  return (
    <section className="portfoliosec">
      <div className="container">
        <div className="portfolio-title text-center">
          <h2>Portfolio</h2>
        </div>

        <div className="port-video">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            autoplay={{
              delay: 3000, // Autoplay every 3 seconds
              disableOnInteraction: false, // Allow autoplay to continue even after user interaction
            }}
            modules={[EffectCoverflow, Pagination , Autoplay]}
            className="mySwiper"
          >
            {portfolio_data.sports.map((data) => {
              return (
                <SwiperSlide>
                   <div className="pv">
                    <video
                      src={data?.video_link}
                      className="img-fluid"
                      loop
                      autoPlay
                      muted
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Portfoliodata;
