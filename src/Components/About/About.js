import React from 'react'
import img from '../images/img.jpg';
import './About.css'
import { Link } from "react-router-dom";

export default function About() {
  return (
   <><section id="about" className="about">
   <div className="container">

     <div className="row gy-4">

       <div className="col-xl-6 col-md-6" >
      <h2>We Have Many Year Experience in Consuntent Business</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id neque velit error voluptate accusantium suscipit nobis rem sapiente porro! Blanditiis mollitiLink numquam reprehenderit quis quos consequatur esse aperiam libero asperiores? Mollitia, consequatur harum asperiores atque sequi aspernatur doloremque aliquam debitis. Repellat non praesentium minimLink eLink similique distinctio veritatis alias consequatur.</p>
      <div className="">
          <button className='btn btn-info'>Know More</button>
      </div>
       </div>

       <div className="col-xl-2 col-md-6 " >
         {/* <div className='icon'>
         <i className="bi-play-circle-fill"></i>
         </div> */}
      
       <img src={img} alt="" />
       </div>
     </div>
    <div className="row low">
        <div className=" d-flex justify-content-center">
          <ul>
            <li className='m-5  '><i className="bi bi-wrench-adjustable"></i><Link to="#" ><b>Construct</b>ion</Link></li>
            <li className='m-5'><i className="bi bi-cloud-fill"></i><Link to="#"><b>Dummy</b> logo</Link></li>
            <li className='m-5 '><i className="bi bi-binoculars-fill"></i><Link to="#"><b>Random</b> logo</Link></li>
            <li className='m-5'><i className="bi bi-asterisk"></i><Link to="#"><b>Random</b> logo</Link></li>
            
          </ul>
        </div>
    </div>
   </div>
 </section></>
  )
}
