import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <>
      <header className='header fixed-top'>
        <div className="logo">
          <a href="/"><div className="icon"><i className="bi bi-clock"></i></div>We are open 24/7</a>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="#" className="fa fa-twitter"></a>
            </li>
            <li>
              <a href="#" className="fa fa-linkedin"></a>
            </li>
            <li>
              <a href="#" className="fa fa-instagram"></a>
            </li>
            <li> <a href="#" className="fa fa-facebook"></a> </li>
          </ul>
        </div>
      </header>
    </>
  )
}
