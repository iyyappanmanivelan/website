import React from 'react'
import { brands } from '../Constants/Brand.content'


function Brand() {
    return (
        <section className='brandsec'>
            <div className="container">
                <div className="mission-title text-center">
                                <h2>{brands.title}</h2>
                            </div>
                <div className="row">
                    {
                        brands.logo.map((data , i)=>{
                            return(
                                <div className="col-lg-4 d-flex justify-content-center" key={i}>
                                    <div className="brand-img">
                                        <img src={data?.image} className='img-fluid'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>

        </section>
    )
}

export default Brand
