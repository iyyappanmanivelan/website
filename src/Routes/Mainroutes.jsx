import React from 'react'
import Header from '../Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function Mainroutes() {
    return (

     <>

     <Header/>
     <div className="body_top">
        <Outlet/>
     </div>
     <Footer/>
     </>
        
    )
}

export default Mainroutes
