import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><i className="bi bi-back"></i> Bisnes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Project</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/footer">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
