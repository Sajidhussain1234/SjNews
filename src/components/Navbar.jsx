import React, { useEffect } from "react";
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
const location = useLocation; 
useEffect( ()=>{
  
}, [location]

)

  return (    
    <nav className="navbar navbar-expand-lg bg-primary fixed-top">
      <div className="container-fluid"><Link className="navbar-brand" to="/"  style={{color: "white"}}> {/*} <img src={Logo} width="42" height="40" alt="Sj-News" />*/}<strong>SjNews</strong></Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" >
          <Link className={`nav-link ${(location.pathname==="/"?"active":"")}`} aria-current="page" to="/" style={{color: "white"}}>Home</Link>            
           <Link className={`nav-link ${(location.pathname==="/business"?"active":"")}`} to="/business" style={{color: "white"}}> Business</Link>
           <Link className={`nav-link ${(location.pathname==="/entertainment"?"active":"")}`} to="/entertainment" style={{color: "white"}}> Entertainment</Link>
           <Link className={`nav-link ${(location.pathname==="/health"?"active":"")}`} to="/health" style={{color: "white"}}> Health</Link>
           <Link className={`nav-link ${(location.pathname==="/science"?"active":"")}`} to="/science" style={{color: "white"}}> Science</Link>
           <Link className={`nav-link ${(location.pathname==="/sports"?"active":"")}`} to="/sports" style={{color: "white"}}> Sports</Link>
           <Link className={`nav-link ${(location.pathname==="/technology"?"active":"")}`} to="/technology" style={{color: "white"}}> Technology</Link>
           <Link className={`nav-link ${(location.pathname==="about"?"active":"")}`} to="/about" style={{color: "white"}}>About</Link>
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
