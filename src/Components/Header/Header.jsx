import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="navigation">
          <div className="nav-icon">
            <div className="icon-img">
              <img
               src="https://www.pinclipart.com/picdir/big/579-5799783_child-infant-mother-logo-maternal-bond-drawing-mother.png"
                alt="..."
                height="37px"
                width="45px"
              />
            </div>
        <a href="/">
           <h2>Heaven Care Hospital</h2></a>   
          </div>
          <div className="nav-titles">
            <ul className="list">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/aboutus">
                <li>About Us</li>
              </Link>
              <Link to="/make-an-appointment">
                <li>Make a Appointment</li>
              </Link>
            <Link to='/department'>
                <li>Departments</li>
            </Link >             
<Link to='/contact'>
               <li>Contact</li>
  
</Link>            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
