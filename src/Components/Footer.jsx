import React from 'react'
import { Navbar } from '../Constants/Navbar'
import { footer_data } from '../Constants/Footer.content'
import { Envelope, EnvelopeFill, GeoAlt, Instagram, TelephoneFill } from 'react-bootstrap-icons'

function Footer() {
    return (
        <section className='footer-sec text-light'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="footermain">
                             <div className="brand-logo">
                                       <img src={Navbar.Logo_img} className="img-fluid" />
                                     </div>
                                     <div className="footer-content my-4">
                                        <p>{footer_data?.footer_content}</p>
                                     </div>
                                     <div className="footer-enquiry">
                                        <div className="eq-type position-relative">
                                            <input type='text' className='form-control'/>
                                            <div className="eq-send position-absolute">
                                            <button className='btn'>Subscribe</button>
                                        </div>
                                        </div>
                                      
                                     </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                    <div className="footermain">
                            <div className="footer-title">
                                <h4>Links</h4>
                            </div>
                            <div className="footer-link">
                                {
                                    footer_data?.footer_pages.map((data)=>{
                                        return(
                                            <h6 className='my-3'>{data}</h6>
                                        )
                                    })
                                }
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="footermain">
                            <div className="footer-title">
                                <h4>Contacts</h4>
                            </div>
                            <div className="footer-social">
                                {
                                    footer_data.footer_contact?.map((data , i)=>{
                                        return(
                                            <div className="sc-list d-flex align-items-center gap-3 my-3" key={i}>
                                                <div className="sc-icon">
                                                    {
                                                        data?.id == '1' ? <GeoAlt/> : data?.id == '2' ? <TelephoneFill/> : 
                                                        data?.id == '3' ? <EnvelopeFill/> : <Instagram/>
                                                    }
                                                </div>
                                                <div className="sc-name" >{data?.data}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default Footer
