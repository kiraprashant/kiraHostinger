import React from 'react'
import "../Csscomponent/Trust.css"

function Trust(props) {
    const {plan} = props
  return (
    <>
            <div className='container my-5 pt-5'>
      <h1 className='text-center text-success'>Hosting Services Trusted by Thousands</h1>
       <p className='text-center mt-4'>Don’t just take our word for it. We’re the web hosting provider of choice for thousands of happy customers.</p>
       <div className='row my-5'>
         <div className='col-12 '>
           <div><img src = "Hosting/three.jpg" className='img-fluid' alt='name'/></div>
         </div>

       </div>

       <div className='hostingplan py-5'>
          <h1 className='text-center text-light '>Choose Your {plan} plan</h1>
       </div>
     </div>
    </>
  )
}

export default Trust