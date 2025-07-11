import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar(props) {


  return (
<>
<nav className={`navbar navbar-expand-lg navbar-info bg-info `}>
  <div className="container-fluid ">
  <NavLink className="navbar-brand fw-semibold fs-4" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
        <NavLink className="nav-link" aria-current="page"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/about">About</NavLink>
        </li>
      </ul>
      </div>
      <div className="form-check form-switch ">
  <input className="form-check-input" onClick={props.ToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
      
</nav>
</>
  )
}
