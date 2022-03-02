import React from 'react'
import './Services.css'
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <>
    <section id="services" className="services">
      <div className="container ">

        <div className="section-header">
          <h2>Our Services</h2>
          <p>ELink vitae aspernatur deserunt voluptatem impedit deserunt magnam occaecati dssumendLink quas ut ad dolores adipisci aliquam.</p>
        </div>

        <div className="row gy-5">

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-44">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-activity"></i></div>
              <h4><Link to="">Financial Consultancy</Link></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-44">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-send-fill"></i></div>
              <h4><Link to="">Content Marketing</Link></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-44">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-currency-exchange"></i></div>
              <h4><Link to="">Financial Advice</Link></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>


        </div>
        <div className="Button">
        <button type="button" className="btn btn-info">Services</button>
        </div>
      

      </div>
    </section>
    </>
  )
}
