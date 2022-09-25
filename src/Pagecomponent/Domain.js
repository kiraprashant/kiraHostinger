import React, { useState } from 'react'
import Banner from './Banner'
import ".././Csscomponent/Domain.css"
import PopularDomain from "../PopularDomain" 
import DomainDetails from "../DomainDetails"


function Domain() {
    const [Search, setSearch] = useState("")
    const [Searchcheck, setSearchcheck] = useState()
    const [showAvailableDomain, setshowAvailableDomain] = useState("Available_Domain_remove")
    const [AllDomain, setAllDomain] = useState(PopularDomain)
    const [DomainDeatils, setDomainDeatils] = useState(DomainDetails)



    const handleavaliableDomain = () =>{

        if(Search === "" || Search === "null" || Search === "undefined"){
            return alert("plz fill")
        }   

        let data = Search

             if(data.includes(".")){
                setSearchcheck(data)
             }

             else {setSearchcheck(data+".in")}

            setshowAvailableDomain()
    }
  return (
    <>
             <Banner Heading = "Use Our Domain Checker to Search and Buy an Available Domain Name" 
                     Paragraph = "It’s easy – simply enter your desired domain name and instantly find out if it's available. Register it before someone else takes it."
                     ButtonName = "Get Started" />

              <div className='container'>
                 <div className='row my-5 pb-5 '>
                    <div className='col-md-9 '>
                    <input type= "text" value = {Search} className='Form_Class' placeholder='Search Here' id = "email" onChange={(e)=> setSearch(e.target.value)}/>
                    </div>
                    <div className='col-md-3 '>
                        <button onClick={()=> handleavaliableDomain()} className='w-100 d-block Button_search'>Search</button>
                    </div>
                 </div>

                 <div className={`Section2 Available_Domain my-5 ${showAvailableDomain} `}>
                     <div className=' px-2 py-2 AllDomainAvailable' >All Domain are Available</div>
                    <div  className='row px-4 mt-2 py-4 text-center'>
                        <p className='col-lg-6 col-md-6 col-12'>{Searchcheck}</p>
                        <p className='col-lg-6 col-md-6 col-12'>Domain is Available</p>
                    </div>
                 </div>

                   <div className='section3'>
                    <h2 className='my-5 text-center'>Choose From the Most Popular Domain Extensions</h2>
                    <hr />
                      <div className='row'>

                        {AllDomain.map((elem)=>{
                          
                          return(
                            <div key = {elem.id} className='col-lg-4 col-md-4 col-12 my-5'>
                             <div className='Alldomain_card px-5 py-5'>
                                <p style={{fontSize:"24px"}}><b>{elem.Name}</b></p>
                                <p>{elem.Description}</p>
                             </div>
                            </div>
                          )

                        })}
                    

                        
                     </div>
                 </div>
              </div>       

              <div className='section4 '>
                 <div className='container py-5 my-5 '>
                     <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div><img src = "Domain/one.webp" className='img-fluid' alt='name'/></div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12 First_row'>

                            <div>
                                <h2 className="mt-4 pb-2" style={{borderBottom:"1px solid White"}}>The Future Is .online</h2>
                                <p>Get a new website address that says you're always online with our domain finder.</p>

                                <h3  className="mt-4 pb-2 " style={{borderBottom:"1px solid White"}}>Build an Online Brand</h3>
                                <p className='mt-4'>Your domain name and its extension should be unique. Register a 
                                .online website address and show the world you're building a contemporary website or tech-driven enterprise.</p>

                                <h4  className="mt-4 pb-2 " style={{borderBottom:"1px solid White"}}>Build an Online Brand</h4>
                                <p className='mt-4'>A .online domain name is a new TLD that is not limited to a single location, 
                                letting your brand reach a worldwide audience. Since it is a new extension,
                                 you are more likely to find an available domain name that isn't too expensive.</p>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-6 col-12 Second_row mt-5'>
                            <div>
                                <h1 className="mt-4 pb-2" style={{borderBottom:"1px solid White"}}>.xyz Domain Names Are Always Available</h1>
                                <p>To ensure the availability of your website name during domain search, try a different extension.</p>

                                <h3  className="mt-4 pb-2 " style={{borderBottom:"1px solid White"}}>Stand Out From the Crowd</h3>
                                <p className='mt-4'>The most costly or popular web addresses are not always the best. When it comes to website names, 
                                standing out is very important. A .xyz extension is almost always available and memorable.</p>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12 mt-5'>
                            <div><img src = "Domain/two.png" className='img-fluid' alt='name'/></div>
                        </div>



                     </div>
                 </div>
                </div> 

                <div className='container Section5 py-5 my-5'>
                    <h1> FAQs About Domain Name Search </h1>
                    <p className='text-center pb-5'>Questions and answers regarding the Hostinger Domain Checker tool and domain registration process.</p>
                   {DomainDeatils.map((elem)=>{
                     return(
                      <div key = {elem.id} className='my-5 px-5 Domain_details '>
                         <div className='Domain_details_heading pt-4 d-flex justify-content-between'><p><strong>{elem.Name}</strong></p></div>
                         <div className='Domain_details_paragraph pb-5'>{elem.Description}</div>
                      </div>
                     )
                   })}
                </div>
    </>
  )
}

export default Domain