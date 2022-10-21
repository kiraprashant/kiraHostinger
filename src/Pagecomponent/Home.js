import React, { useState ,useEffect } from 'react'
import Banner from './Banner'
import ".././Csscomponent/Home.css"
import {Link} from "react-router-dom"


function Home(props) {

  const {WebHostingData , addwebhosting , ServiceData } = props
    const [AllSecondItem, setAllSecondItem] = useState("Home_Remove")
    const [Months, setMonths] = useState(1)
    const [price, setprice] = useState()
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [TextAreaDisplay, setTextAreaDisplay] = useState("textarea_remove")
    const [Feature_Header_active, setFeature_Header_active] = useState("")
    const [stateservicedata, setstateservicedata] = useState(ServiceData)
    
    const [WebHosting, setWebHosting] = useState(WebHostingData[1])

    useEffect(() => {

        Pricemoney()
      
    }, [Months])

  
    const Submit = () =>{

      if(!Name || !Email){
           alert("please fill The Form")
      }
      else{
        alert("Your Problem Will be Solved within 24Hrs Or 48Hrs")
        setTextAreaDisplay("")
        setEmail("")
        setName("")
      }

    }
    

    const handlepackageValue = (e) =>{

      setMonths(e.target.value)
    }

    const sorry = () =>{
      alert("!sorry Work in Progress Coming Upgrade")
    }

    const Pricemoney = () =>{
        

        if(Months >= 24){

          let  Price =  Math.round(WebHosting.Price - (WebHosting.Price  * (80/100)));
          setprice(Price)

          // setprice(WebHostiMonths)
     
        }
        
        else if(Months >= 12){
           
          let  Price =  Math.round(WebHosting.Price - (WebHosting.Price  * (50/100)));
          setprice(Price)
     
        }
        else if(Months >= 6){
     
         let  Price =  Math.round((WebHosting.Price - (WebHosting.Price  * (25/100))));
         setprice(Price)
         
        }
        else {
     
         let  Price =  Math.round(WebHosting.Price - (WebHosting.Price  * (0/100)));
         setprice(Price)
     
        }
    }

   const  HandleAllSecondItem = () =>{
      
     if(!AllSecondItem){
        setAllSecondItem("Home_Remove")
        setFeature_Header_active("")
     }
     else{
        setAllSecondItem("")
        setFeature_Header_active("Feature_Header_active")
     }

   }

   const handleTextArea = (e) =>{

      if(TextAreaDisplay){
        setTextAreaDisplay("")
      }
      else{
        setTextAreaDisplay("textarea_remove")
      }
   }

  return (
    <>
     <Banner Heading = "Everything You Need to Create a Website" Paragraph = "Join 1,278,620 website owners who are building their businesses online." ButtonName = "Get Started" />
    
      <div className='Section_one container text-center '>

        <div className='py-5' style={{color:"#b8bfd4",display:"flex",alignItem:"center",justifyContent:"space-between",fontSize:"22px",border:"1px solid b8bfd4" }}>
           <div>Wordpress</div>
           <div>Litespeed</div>
           <div>Cloudflare</div>
        </div>
  
         <h1 className='Section_heading_one '>All-In-One Web Hosting</h1>
         <p style={{lineHeight:"25px",color:"#9e9796"}} className='w-50 mobile-width text-center mx-auto mb-5'>We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</p>
   
      </div>
      <div className='Section_Two my-2'>
        <div className='container'>
           <div className='d-flex justify-content-between align-items-center py-2'>
           <span style={{fontSize:"24px"}}>Select Package</span>
           <select className='HomeSelect'  onChange={(e) => handlepackageValue(e)}>
             <option value = "1">1 months</option>
             <option value = "6">6 months</option>
             <option value = "12">12 months</option>
             <option value = "36">36 months</option>
           </select>
           </div>
           <div className='Heading_Two'>Trusted Web Hosting</div>
           <div className='FirstItem'>
             <div className='FirstItem_Details py-2'>
                <div className='pl-5 ChildOne'>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i> Unmetered traffic (Unlimited GB) </p>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>100 Websites</p>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>100 GB SSD Storage </p>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>Free Weekly Backups </p>
                </div>
                <div className='ChildTwo'>
                    <p className='Money'>₹{price} /<span className='MoneyDate' style={{fontSize:"22px"}}>mo</span></p>
                    <p>₹{price} / mo  per Months</p>
                    <button onClick={()=> addwebhosting(WebHosting, Months)} className='Add_To_Cart'> Add To Cart </button>
                </div>
                <div className='pl-5 ChildThree'>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>Unlimited Free SSL</p>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>Free Domain</p>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>Free Email</p>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>Optimized for WordPress</p>
                </div>
             </div>
           </div>
           <div className='SecondItem'><h1 className = {`d-flex justify-content-center align-items-center Feature_Header ${Feature_Header_active}`} onClick={()=> HandleAllSecondItem()} >See All Feature </h1>
           <div className={`${AllSecondItem}`}>
           <div className='SecondAllItem py-5'>
           
             <div className='ChildOne visibleChildOne pl-5'>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> Unmetered traffic (Unlimited GB) </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 100 Subdomains per account </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> Full DNS Editor  </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> Managed WordPress </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> WordPress acceleration </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 1-click autoinstaller </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 100 email mailboxes </p>
             </div>
             <div className='ChildThree visibleChildTwo pl-5 pl-5'>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 40 Active Processes </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 20 Entry Processes </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 400 000 Inodes </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 99.9% Uptime Guarantee  </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 24/7/365 chat and email service</p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> Knowledge Base </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> Tutorials </p>
             </div>
             <div className='ChildThree visibleChildThree pl-5'>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 40 Active Processes </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 20 Entry Processes </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 400 000 Inodes </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 99.9% Uptime Guarantee  </p>
             <p> <i className="fa-solid fa-check text-success pr-2"></i> 24/7/365 chat and email service</p>

             </div>
           </div>
           {/* <div className='text-center py-3 ' style={{color:"#02489e",fontSize:"26px",crusor:"pointer"}} onClick={()=> HandleAllSecondItem()} >See Less</div> */}
          </div> 
         </div> 
    
       </div>
      </div> 

       <div className='container text-center'>

       </div>
       
       <div className='Section_Three '>
       <div className='container'>
        <div className='text-center Services font-weight-bold '>Our services <span>include</span></div>

          <div className='row py-5 '>
            {
              
              stateservicedata.map((elem)=>{
                     return(
                      <div key = {elem.id} className='col-md-6 col-lg-4 col-12'>
                         <div className='service_conternt my-2'>
                            <div className=''>
                             <img src = {elem.image} alt = {elem.id} className = "img-fluid service_image" style={{height:"240px" , width:"100%",objectFit:"cover"}}/>
                                <div className='server_sub_content'>
                                  <div className=''></div>
                                   <div className='service_title'>
                                <h2>{elem.Name}</h2>
                             </div>
                            </div> 
                            <div className='Service_mobile'>{elem.Name}</div>
                         </div>
                      </div>
                     </div> 
                     )
              })
            }
           </div> 
          </div> 

       </div>

       <div className='Section_four Home_domain '>
          <div className='domain_name_heading'>Find the perfect domain name</div>
          <p className='text-center Home_Search_Domain'>Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more)</p>
          {/* <Link to = "domain_search" > <button  className='Bacground_button_size py-2 px-5 mt'>Search Domain</button></Link> */}
          <Link to = "domain_search" > 
          <div style={{width:"200px"}} className='Main_button'>
                 <div style={{}} className='second_button'>
                 Search Domain
                </div>
                <div className='Banner_overlay'></div>
               </div>
               </Link>
       </div>


       <div className='Section_five container'>
      
       {/* <div style={{fontSize:"48px",color:"#01489e"}} className='text-center py-2 font-weight-bold'>About us</div> */}

       <div className='row d-flex justify-content-center align-items-center'>
             <div className='col-lg-6 col-md-6 col-sm-12 px-5'>
               
               <div className=''>
               <h2 className='About_us_Heading'>Committed People are Heroes</h2>
               <p className='About_us_paragraph'>
                The company grows as fast as the people who work here. 
                And Hostinger offers the vibe, which is perfect for personal development. 
                
               </p>
               <p className='About_us_paragraph'>
               The Customer is the highest-ranking position in Hostinger. 
               They contribute to the development of our products by giving us feedback and complaints.
               
               </p>
               </div>


             </div>
             <div className='col-lg-6 col-md-6 col-sm-12  '>
             <img src = "ContactImage/About_us.webp" name = "book" className='img-fluid ' />
             </div>
             
          
          </div>

          <div className='row d-flex justify-content-center align-items-center mb-5'>

          <div className='col-lg-6 col-md-6 col-sm-12 order-md-1 order-2 '>
             <img src = "ContactImage/About_us_two.jpg" name = "book" className='img-fluid ' />
             </div>

             <div className='col-lg-6 col-md-6 col-sm-12 px-5 order-md-2 order-1'>
               
               <div className=''>
               <h2 className='About_us_Heading'>Committed People are Heroes</h2>
               <p className='About_us_paragraph'>
                The company grows as fast as the people who work here. 
                And Hostinger offers the vibe, which is perfect for personal development. 
                
               </p>
               <p className='About_us_paragraph'>
               The Customer is the highest-ranking position in Hostinger. 
               They contribute to the development of our products by giving us feedback and complaints.
               
               </p>
               </div>


             </div>
             
          
          </div>
    
       </div>

       <div className=''>
          <div className='container'>
           {/* <div style={{fontSize:"48px",color:"#01489e"}} className='text-center py-4 font-weight-bold'>Contact us</div> */}

           
            <div className='row py-5'>


               <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='Form1  text-center'>
                    <img src = "ContactImage/contact2.webp" name = "book" className='img-fluid Moving_image' />

                  </div>
               </div>

               <div className='col-lg-6 col-md-6 col-sm-12 Form2'>
                  <div></div>
                   <div className='Form2'>
                      <div className='Form2_label'>
                         <label className='Form2_label' htmlFor='name'>Name</label>
                         <input type= "text" value = {Name} className='Form_Class' placeholder='Please Enter your Name' id = "name" onChange={(e) => setName(e.target.value)}/>
                      </div>

                      <div>
                         <label htmlFor='email'>Email</label>
                         <input type= "Email" value = {Email} className='Form_Class' placeholder='Please Enter your Email' id = "email" onChange={(e) => setEmail(e.target.value)}/>
                      </div>

                      <div>
                         <label htmlFor='message'>Message</label>
                         <select className='Form_Class' id = "message">
                           <option>...</option>
                           <option>I have just paid, but invoice is unpaid</option>
                           <option>Can't Login / Register</option>
                           <option>Lost access to 2FA or Hostinger profile email?</option>
                         </select>

                         <label htmlFor='Complain'>Others Specific</label> <input type="checkbox" name="Complain" value="Others" onChange={(e)=> handleTextArea(e)}/>
                        <textarea className={`Form_Class mt-4 ${TextAreaDisplay}`}></textarea>

                        <div className='my-4'>
                         <button onClick={()=> Submit()} className='Login_button'>Submit</button>
                      </div>

                      </div>


                   </div>
               </div>

            </div>
            </div>
           </div> 
    </>
  )
}

export default Home