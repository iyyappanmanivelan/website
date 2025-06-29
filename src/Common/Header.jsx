import React from "react";
import { Navbar } from "../Constants/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="brand-logo">
            <img src={Navbar.Logo_img} className="img-fluid" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse justify-content-end navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navview">
                {
                    Navbar.navlink.map((data , i)=>{
                        return(
                           <Link to={data?.link}>
                             <a key={i} className="nav-item nav-link " href="#">
                            {data.link_name}
                          </a>
                           </Link>
                        )
                    })
                }
            
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
