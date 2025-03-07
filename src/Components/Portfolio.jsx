import React from "react";
import { portfolio_data } from "../Constants/Portfolio.content";


function Portfolio() {
  return (
    <section className="portfoliosec">
      <div className="container">
        <div className="portfolio-title text-center">
          <h2>Portfolio</h2>
        </div>

        <div className="port-video">
          <div className="row">
            {portfolio_data.sports.map((data) => {
              return (
                <div className="col-lg-4">
                  <div className="pv">
                    <video
                      src={data?.video_link}
                      className="img-fluid"
                      loop
                      autoPlay
                      muted
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
