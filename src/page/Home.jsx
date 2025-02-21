import React, { useEffect } from "react";

import Faq from "../component/Faq";
import Frontslide from "../component/Frontslide";
import Worklist from "../component/Worklist";
import Testimonal from "../component/Testimonal";
import Album from "../component/Album";
import Footer from "../component/Footer";


function Home() {


    return (
    <>
      <section className="video-place position-relative">
        <section>
            <div className="container-fluid p-0">
            <video
            src="\video\19598792-hd_1080_1920_30fps.mp4"
            autoPlay
            loop
            muted
          />
            </div>
        </section>

        <section className="video-sec position-absolute" >
          <Frontslide />
        </section>
      </section>
      
      <Album />

      <Worklist />

      <Testimonal />

      <Faq/>

      <Footer/>
    </>
  );
}

export default Home;

