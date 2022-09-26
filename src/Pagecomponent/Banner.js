import React from 'react'
import "../Csscomponent/Banner.css"
import {Link} from "react-router-dom" 


function Banner(props) {
  const {Heading , Paragraph , ButtonName , plan} = props
  return (
    <>
    <div className='mt-5 pt-5 Home_background'>
       <div className='container text-white Solgan'>
           <div className='px-3 text-center'>
               <h1 className='Heading-Size'>{Heading}</h1>
               <p className='Paragraph_size'>{Paragraph}</p>
               <Link className='text-dark text-decoration-none' to = "/web_hosting">  <button className='text-center d-block mx-auto my-3 px-5 Bacground_button_size py-2'>{ButtonName} </button> </Link>
               <p  className='Gruanttee'><i className="fa-solid fa-check text-success pr-2"></i> 30-day money-back guarantee </p>
           </div>
       </div>
    </div>


    </>
  )
}

export default Banner