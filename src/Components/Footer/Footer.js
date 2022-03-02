import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <section id="footer" className="footer">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center text-lg-start">
                            <h3>Subscribe Our Newsletter For More Updates</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullLink pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpLink qui officiLink deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12  footer-btn-container text-center">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control " placeholder="Enter your mail" />
                            </div>
                            <button className="btn btn-info d-block">Subscribe</button>
                        </div>
                    </div>

                </div>
            </section></>
    )
}
