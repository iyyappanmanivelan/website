import React from 'react'
import { Aboutus } from '../Constants/About.content'

function Missions() {
    return (
        <section className='missionsec'>
            <div className="mission-title text-center">
                <h2>{Aboutus.mission[0]?.title}</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mission-pic h-100">
                        <img src="\assets\whowe-img.jpg" className="img-fluid h-100" />
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                             <div className="wh-explain text-start">
                                      <p>{Aboutus?.mission[0]?.description1}</p>
                                      <p>{Aboutus?.mission[0]?.description2}</p>
                                      <p>{Aboutus?.mission[0]?.description3}</p>
                                    </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Missions
