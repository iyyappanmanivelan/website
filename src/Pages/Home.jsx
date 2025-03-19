import React from 'react'
import Mainframe from '../Common/Mainframe'
import Whowe from '../Components/Whowe'
import Missions from '../Components/Missions'
import Portfolio from '../Components/Portfoliodata'
import Brand from '../Components/Brand'
import Letstalk from '../Components/Letstalk'
import Footer from '../Components/Footer'
import { Homepage_Data } from '../Constants/Home.content'

function Home() {
    return (
        <section className='homepage text-light'>
            <Mainframe/>

            <div className="wt-make free">
                <div className="container">
                    <div className="heading-name text-center">
                        <h2>What Makes Us Different ?</h2>
                    </div>
                    <div className="wht-icons">
                      {
                        Homepage_Data.Makeus?.map((data)=>{
                            return(
                                <div className="whtbox d-flex align-items-center justify-content-center gap-3 my-5">
                                <div className="wt-img">
                                    <img src={data?.icon} className='img-fluid'/>
                                </div>
                                <div className="wt-info">
                                    <h5>{data?.content}</h5>
                                </div>
                            </div>
                            )
                        })
                      }
                        
                    </div>
                </div>
            </div>

            <div className="service-sec free">
                <div className="container">
                    <div className="heading-name text-center">
                        <h2>Our Service</h2>
                    </div>
                    <div className="service-data my-5">
                        <div className="row">
                            {
                                Homepage_Data.service.map((data)=>{
                                    return(
                                        <div className="col-lg-4 p-3 my-3">
                                            <div className="serv-box">
                                                <div className="serv-img position-relative">
                                                    <img src={data.img} className='img-fluid h-100'/>
                                                    <div className="serv-overlay position-absolute"></div>
                                                    <div className="serv-title position-absolute">{data?.title}</div>
                                                </div>
                                                
                                                <div className="serv-info">
                                                    <p>{data?.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

            <Letstalk/>





        </section>
    )
}

export default Home
