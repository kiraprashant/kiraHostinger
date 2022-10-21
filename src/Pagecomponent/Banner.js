import React from 'react'
import "../Csscomponent/Banner.css"
import {Link} from "react-router-dom" 


function Banner(props) {
  const {Heading , Paragraph , ButtonName , plan} = props
  return (
    <>
    <div className='Home_background pt-5'>
       <div className='container text-white mt-5 pt-5 Solgan'>
         <div className='row'>
           <div className='col-md-6 col-sm-12'>
           <div className='px-3 '>
               <h1 className='Heading-Size'>{Heading}</h1>
               <p className='Paragraph_size'>{Paragraph}</p>
               <div className='d-flex '>


               <Link className='text-dark text-decoration-none' to = "/web_hosting"> 
                <div className='Main_button'>
                 <div style={{}} className='second_button'>
                  {ButtonName} 
                </div>
                <div className='Banner_overlay'></div>
               </div> </Link>
 
               <Link className='text-dark text-decoration-none' to = "/web_hosting"> 
                <div className='Main_button_read_more'>
                 <div style={{}} className='second_button'>
                  Read More
                </div>
                <div className='Banner_secondary_overlay'></div>
               </div> </Link>

               </div>

               
               <p  className='Gruanttee px-4'><i className="fa-solid fa-check text-success pr-2"></i> 30-day money-back guarantee </p>
           </div>
       </div>
       <div className='col-md-6 col-sm-12 banner_image'></div>
      </div> 
    </div>
   </div> 


    </>
  )
}

export default Banner