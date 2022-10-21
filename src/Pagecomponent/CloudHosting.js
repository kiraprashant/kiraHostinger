import React, { useState } from 'react'
import Banner from './Banner'
import Trust from './Trust'

function CloudHosting(props) {
  const {CloudHostingdata , addcloudhosting} = props
  const [CloudHosting, setCloudHosting] = useState(CloudHostingdata)

  return (
    <>
          <Banner Heading = "Cloud Hosting as per  your Business Requirement" Paragraph = "Start your journey with our Premium plan and get a personal domain, lifetime SSL, and DDoS protection for free with a four-year subscription. " ButtonName = "Get Offer" />
          <Trust plan = "Cloud Hosting "/>
          <div className='container py-5'>
             <div className='row'>
                {CloudHosting.map((elem)=>{
                  return(
                    <div key = {elem.id} className = "col-lg-4 col-md-6 col-sm-12 my-3">
                       <div className='Webhostingborder text-center'>
                          <h4 className='text-center'>{elem.package}</h4>
                          <p className='text-center'>{elem.title}</p>
                          <p className='display-4 text-center Webhostingprice'>{elem.Price}<span  className = "pl-1" style = {{fontSize:"12px"}}>/ mo</span></p>
                          <button onClick={()=> addcloudhosting(elem)} className='Add_To_Cart'> Add To Cart </button>
                          <h6 className='my-4 font-weight-bold text-center'>Top feature comparison</h6>
                          <p>{elem.Website}</p>
                          <p>{elem.Storage}</p>
                          <p>{elem.Visits_Monthly}</p>
                          <p>{elem.Email_Account}</p>
                          <p>{elem. DataBase}</p>
                          <h6 className='my-4 font-weight-bold text-center'>Security</h6>
                          <p>{elem.Free_SSL}</p>
                          <p>{elem.Cloudflare}</p>
                          <h6 className='my-4 font-weight-bold text-center'>Free Bonuses </h6>
                          <p>{elem.Domain}</p>
                          <h6 className='my-4 font-weight-bold text-center'>WordPress Options</h6>
                          <p>{elem.ManageWrokpress_Acceleration}</p>
                          <p>{elem.wordpress_Staging_tool}</p>
                          <h6 className='my-4 font-weight-bold text-center'>Support</h6>
                          <p>{elem.MoneyBack}</p>
                          <p>{elem.Support}</p>

                       </div>
                    </div>
                  )
                })}
             </div>
        </div>
    </>
  )
}

export default CloudHosting