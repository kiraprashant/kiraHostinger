import React from 'react'
import "../Csscomponent/Gurantee.css"
import {Link} from "react-router-dom" 

function Gurantee() {
  return (
    <>
        <div className='text-center my-5'>
            <h1 className='Gurantee_heading display-4'> 30-Day Money-Back Guarantee </h1>
            <p className='Gurantee_paragraph'>We'll refund your payment if you’re not 100% satisfied with Hostinger. No hassle, no risk.</p>
            <Link className='text-dark text-decoration-none' to = "/web_hosting">  <button className='Gurantee_button'>Get Started</button></Link>
        </div>
    </>
  )
}

export default Gurantee