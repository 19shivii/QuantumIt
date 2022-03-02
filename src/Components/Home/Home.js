import React from 'react'
import './Home.css'
import pdt from '../images/pdt.png';
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
  <section id="home" >
   <div className="container   ">
     <div className="row ">
       <div className="col-lg-7"> <p>Hey, we are here to help you</p>
     <h1>We Arer Consulting For Your Business Finances</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam mollitia vel consequuntur, magni cumque at odio nostrum eligendi, laboriosam dolorem tempore autem quo neque ea perferendis natus voluptas deleniti atque.</p>
     <button type="button" className="btn btn-info">Start Now</button>
     </div>
     <img src={pdt} alt="image" className='img col-lg-4 '  />
     </div>
  
   </div>
</section>
    </>
  )
}
