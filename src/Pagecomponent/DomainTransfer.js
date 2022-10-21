import React, { useState } from 'react'
import Banner from './Banner'
import "../Csscomponent/DomainTransfer.css"
import DomainTrasfer1 from  "../DomainTrasfer1"
import Gurantee from './Gurantee'

function DomainTransfer() {
    const [DomainTransfer1, setDomainTransfer1] = useState(DomainTrasfer1)



  return (
    <>
     <Banner Heading = "Transfer Your Domain" Paragraph = "Use our special domain transfer offer and migrate your domain name to Hostinger today. " ButtonName = "Get Offer"/>
     <div className='container  py-5'>
        <h1 className='Domain_transfer text-center'>How to Transfer Domain Names:</h1>
     </div>
     <div className='container my-5'>
      <div className='row my-5' >
         <div className='col-md-6 col-12'>  <div><img src = "Domain/transfer1.jpg" className='img-fluid' alt='name'/></div></div>
         <div className='col-md-6 col-12'>
          
          <ul>

             {DomainTransfer1.map((elem)=>{
                return(
                    <li key = {elem.id} className='Domain_transfer_Heading'>
                     <div>
                      <h4 className=''>{elem.Name} </h4>
                        <p className='Domain_transfer_paragragh'>{elem.Paragraph}</p>
                     </div>
                   </li>
                )
             })}

            </ul> 
             
         </div>
      </div>

     </div>
     <div className='Why_Domain_transfer'>
        <div className=' py-5'>
        <h1 className='text-center'>Why Transfer Your Domain to Hostinger ?</h1></div>
        <hr className='bg-white'/>
        <div className='container pt-5'>
         <div className='row px-5'>
            <div className='col-md-4 col-12'>
            <div><h5 className=' font-weight-bolder'>A web hosting company with advanced domain management tools</h5><p className = "py-4 " style = {{lineHeight:"30px"}}>Hostinger offers a wide variety of tools to meet the needs of beginners and advanced users. Manage multiple domains and websites, all from a single control panel.</p></div>
            </div>
            <div className='col-md-4 col-12'>
            <div><h5 className=' font-weight-bolder'>24/7 Support</h5><p className = "py-4 " style = {{lineHeight:"30px"}}>Our expert Customer Success team is experienced and ready to help round the clock. Let us help solve technical issues to get your websites up and running in no time.</p></div>
            </div>
            <div className='col-md-4 col-12'>
            <div><h5 className=' font-weight-bolder'>Lightning-fast websites</h5><p className = "py-4 " style = {{lineHeight:"30px"}}>Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website.</p></div>
            </div>
         </div>
         </div>
     </div>
     <Gurantee />
    </>
  )
}

export default DomainTransfer