import React from 'react'
import ".././Csscomponent/Footer.css"

function Footer() {
  return (
    <>
        <div className='Footer '>
          <div className='Footer_Header '>@copyRightsKiraHostinger</div>
          <div className='container Mobile_footer'>
           <div className='row'>
          <div className='py-5 first_row col-lg-4 col-md-4 col-sm-4'>
            <div className='text-light py-4 text-uppercase  '>Hosting Details</div>
            <div>Web Hosting</div>
            <div>VPS Hosting</div>
            <div> Minecraft Server Hosting</div>
            <div>Cloud Hosting</div>
            <div>CyberPanel Hosting</div>
            <div>WordPress Hosting</div>
          </div>

          <div className='py-5 second_row col-lg-4 col-md-4 col-sm-4 text-uppercase '>
          <div className='text-light py-4'>Company</div>
            <div>About Hostinger</div>
            <div>Our Technology</div>
            <div>Road Map</div>
            <div>Customer Care</div>
            <div>Blog</div>
            <div>WordPress Hosting</div>
          </div>

          <div className='py-5 third_row col-lg-4 col-md-4 col-sm-4 text-uppercase '>
          <div className='text-light py-4'>Hosting Details</div>
            <div>Tutorial</div>
            <div>Knowledge base</div>
            <div>Report Online Abuse</div>

          </div>
         </div>
         </div>
        </div> 
    </>
  )
}

export default Footer