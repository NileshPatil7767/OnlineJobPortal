import React from "react";
import ReactDom from "react-dom";
import logo from "../assets/sky.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component{

    render() {
        return <>
             <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className='imagess'>
          {/* <a className="navbar-brand" href="#" style={{color: "aliceblue"}}>
          MyApp
        </a> */}
          <img src={logo} alt=" no image found" style={{
            height: "50px", width: "10vh", transition: "height 0.3s ease",
            border: " 2px solid white"
          }} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav" >
            <li className="nav-item">
            <Link className="nav-link active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/about">About us</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/admin">Admin Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">User Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </>
    }
}
export default Navbar;