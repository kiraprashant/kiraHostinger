import React, { useState ,useEffect } from 'react'
import Banner from './Banner'
import ".././Csscomponent/Home.css"


function Home(props) {

  const {WebHostingData , addwebhosting} = props
    const [AllSecondItem, setAllSecondItem] = useState("Home_Remove")
    const [Months, setMonths] = useState(1)
    const [price, setprice] = useState()
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [TextAreaDisplay, setTextAreaDisplay] = useState("textarea_remove")
    
    const [WebHosting, setWebHosting] = useState(WebHostingData[1])
    useEffect(() => {

        Pricemoney()
      
    }, [Months])

  
    

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
     }
     else{
        setAllSecondItem("")
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
      <div className='Section_one container my-5 text-center '>
       <div className='Home_Solgan my-5'>
       <p className='Support text-primary'><i className="fa-solid fa-shield fa-2x pr-2"></i>Top-Sceurity</p>
       <p className='Support text-warning'><i className="fa-solid fa-face-smile fa-2x pr-2 "></i> Lightning-fast websites</p>
        <p className='Support text-success'><i className="fa-solid fa-handshake-simple fa-2x pr-2"></i>User-Friendly</p> </div>   
      <hr className='text-center mx-auto HomeHR'/>
         <h1 className='Section_heading_one mb-5'>All-In-One Web Hosting</h1>
         <p style={{lineHeight:"25px"}} className='w-50 text-center mx-auto mb-5'>We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</p>
         <hr className='text-center mx-auto HomeHR'/>
      </div>
      <div className='Section_Two container my-5'>
           <div className='d-flex justify-content-between align-items-center py-4'>
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
             <div className='FirstItem_Details py-5'>
                <div className='pl-5 ChildOne'>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i> Unmetered traffic (Unlimited GB) </p>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>100 Websites</p>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>100 GB SSD Storage </p>
                    <p> <i className="fa-solid fa-check text-success pr-2"></i>Free Weekly Backups </p>
                </div>
                <div className='ChildTwo'>
                    <p className='Money'>{WebHosting.Price} /<span className='MoneyDate' style={{fontSize:"22px"}}>mo</span></p>
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
           <div className='SecondItem'><h1 className = "py-3 d-flex justify-content-center align-items-center Feature_Header" onClick={()=> HandleAllSecondItem()} >See All Feature <i className="fa-solid fa-angle-down pl-2"></i> </h1>
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
           <div className='text-center py-3 my-5' style={{borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5",color:"#02489e",fontSize:"26px",crusor:"pointer"}} onClick={()=> HandleAllSecondItem()} >See Less</div>
          </div> 
         </div> 
    
       </div>
       
       <div className='container Section_Three pb-5'>
       
        <div className='text-center Services '>Our services include:</div>
       </div>

       <div className='Section_four '>
          <div className='domain_name_heading'>Find the perfect domain name</div>
          <p className='text-center Home_Search_Domain'>Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more)</p>
          <button onClick={()=> sorry()} className='Bacground_button_size py-2 px-5 mt'>Search Domain</button>
       </div>


       <div className='Section_five container py-5'>
      
       <div style={{fontSize:"48px",color:"#01489e"}} className='text-center py-4'>About us</div><hr />

       <div className='row d-flex justify-content-center align-items-center'>
             <div className='col-lg-6 col-md-6 col-sm-12 px-5'>
               
               <div className='px-5'>
               <h2 className=''>Committed People are Heroes</h2>
               <p className='About_us_paragraph'>
                The company grows as fast as the people who work here. 
                And Hostinger offers the vibe, which is perfect for personal development. 
                
               </p>
               </div>


             </div>
             <div className='col-lg-6 col-md-6 col-sm-12  '>
             <img src = "ContactImage/About_us.webp" name = "book" className='img-fluid Moving_image' />
             </div>
             

             <div className='col-lg-6 col-md-6 col-sm-12 px-5 my-5'>
                      
             <img src = "ContactImage/About_us_two.jpg" name = "book" className='img-fluid Moving_image' />

             </div>
             <div className='col-lg-6 col-md-6 col-sm-12  '>
             <div className='px-5'>
               <h2 className='mt-5'>Before We Speak, We Listen</h2>
               <p className='About_us_paragraph'>
               The Customer is the highest-ranking position in Hostinger. 
               They contribute to the development of our products by giving us feedback and complaints.
               
               </p>
               </div>
             </div>
          
          </div>

            <hr  className='mt-5 '/>
           <div style={{fontSize:"48px",color:"#01489e"}} className='text-center py-4'>Contact us</div>

            <hr />
           
            <div className='row py-5'>


               <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className='Form1  text-center'>
                    <img src = "ContactImage/contact2.webp" name = "book" className='img-fluid Moving_image' />
                     {/* <h1>We are Here 24/7</h1> */ } <br />
                     {/* <p className='py-2'>We are here for you 24/7/365. Our Customer Success Team is called that way for a reason.</p> */}
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
                         <button className='Login_button'>Login</button>
                      </div>

                      </div>


                   </div>
               </div>

            </div>
            <hr />
       </div>
    </>
  )
}

export default Home