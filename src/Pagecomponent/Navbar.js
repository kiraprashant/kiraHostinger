import React , {useState}from 'react'
import "../Csscomponent/Navbar.css"
import {Link} from "react-router-dom"

function Navbar(props) {
   const { Carts } = props
const [HostingSubMenu, setHostingSubMenu] = useState("remove")
const [DomainSubMenu, setDomainSubMenu] = useState("remove")

const [HostingArrow, setHostingArrow] = useState("")
const [DomainArrow, setDomainArrow] = useState("")

const [MobileMenu, setMobileMenu] = useState("")
const [MobileSubMenuhosting, setMobileSubMenuhosting] = useState("remove")
const [MobileSubMenudomain, setMobileSubMenudomain] = useState("remove")

const [ModalShow, setModalShow] = useState("Modalhide")

const HideAndShowModal = (e) =>{
   e.stopPropagation()
  
   if(!ModalShow){
      setModalShow("Modalhide")
   }
   else{
      setModalShow("")
   }


}




const handlehosting = () =>{
  setDomainSubMenu("remove")
  setDomainArrow("")

 if(!HostingSubMenu){
  setHostingSubMenu("remove")
  setHostingArrow("")
 }
 else{
  setHostingSubMenu("")
  setHostingArrow("arrow_upward")
 }
}

const handledomain = () =>{
  setHostingSubMenu("remove")
  setHostingArrow("")

  if(!DomainSubMenu){
    setDomainSubMenu("remove")
    setDomainArrow("")
   }
   else{
    setDomainSubMenu("")
    setDomainArrow("arrow_upward")
   }

}

const handleMobileMenu = () =>{
  if(!MobileMenu){
    setMobileMenu("Mobie_menu_visible")

   }
   else{
    setMobileMenu("")

   }
}

const MobileSubMenuHosting = () =>{
  if(!MobileSubMenuhosting){
    setMobileSubMenuhosting("remove")

   }
   else{
    setMobileSubMenuhosting("")

   }

}

const MobileSubMenuDomain = () =>{

  if(!MobileSubMenudomain){
    setMobileSubMenudomain("remove")

   }
   else{
    setMobileSubMenudomain("")

   }

}

const sorry = () =>{
   alert("!Sorry Work in progress it will Recover from Future Upgrade")
}



  return (
    <>
        <div className='Navbar'>
          <div className='Nav_wrapper'>
          
            <ul className='Nav_item Desktop'>
                <li onMouseOver={()=>handlehosting()}>Hosting <i className={`fa-solid fa-angle-down ${HostingArrow}`}></i></li>    
                <li onMouseOver={()=>handledomain()}>Doamin <i className={`fa-solid fa-angle-down ${DomainArrow}`}></i></li>        
                <li><i className="fa-solid fa-cart-shopping"></i> <Link className='Navline_remove' to = "/cart"> <span className='linkColor'> Cart {Carts.length === 0 ? 0 : <span className='text-warning'><b> { Carts.length } </b> </span>}  </span></Link></li>
                <li onClick={(e) => HideAndShowModal(e)} className='sign_logout'> Sign-in </li>
            </ul>
               <div className='Mobile'><i onClick={() => handleMobileMenu()} className="fa-solid fa-bars "></i> <Link className='text-white' to = "cart" ><i className="fa-solid fa-cart-shopping pl-3"> {Carts.length === 0 ? 0 : <span className='text-warning'><b> { Carts.length } </b> </span>}  </i> </Link> </div>  { /* Only avaliable on Mobile devices */}
            <div className='Logo'> <Link className='Navline_remove' to = "/"> <span className='linkColor'> Hostinger </span></Link></div>
            </div> 
              
            {/* only see in Mobile Devices */}
            <div className={`Mobie_menu ${MobileMenu} py-5` }>
               
                  <ul className='Mobile_SubClass'>
                    <li><div onClick={()=> MobileSubMenuHosting()} style={{display:"flex",justifyContent:"space-between"}} className = "px-2 py-3">Hosting <i className={`fa-solid fa-angle-down ${HostingArrow}`}></i></div>
                       <ul style={{borderTop:"1px solid white",backgroundColor:"#5fa2f5"}} className = {`px-4 py-4 ${MobileSubMenuhosting}`}>
                          <li className = "py-4"><Link className='text-white' to = "/web_hosting" >Web Hosting</Link></li>
                          <li className = "py-4"><Link className='text-white' to = "/cloud_hosting" > Cloud Hosting</Link></li>
                          <li className = "py-4"><Link className='text-white' to = "/wordpress_hosting" > Wordpress Hosting</Link></li>
                          {/* <li className = "py-4">Vps Hosting</li>
                          <li className = "py-4">CyperPanel Hosting</li>
                          <li className = "py-4">MineCraft Server Hosting</li> */}


                       </ul>
                    </li>
                    <li><div onClick={()=> MobileSubMenuDomain()} style={{display:"flex",justifyContent:"space-between"}} className = "px-2 py-3">Domain <i className={`fa-solid fa-angle-down ${HostingArrow}`}></i></div>
                    <ul style={{borderTop:"1px solid white",backgroundColor:"#5fa2f5"}} className = {`px-4 py-4 ${MobileSubMenudomain}`}>
                          <li onClick={() => sorry()} className = "py-4">Domain Name Search</li>
                          <li onClick={() => sorry()} className = "py-4">Whooisi Lookup</li>
                          <li onClick={() => sorry()} className = "py-4">Domain Transfer</li>

                       </ul>
                    </li>
                    <li onClick={(e) => HideAndShowModal(e)} ><div  className = "px-2 py-3">Sigin-in </div></li>
      
                  </ul>
               
            </div>
            {/* only see in Mobile Devices */}

            <div  onMouseLeave={()=> handlehosting() } className={`Hosting w-75 ml-2 ${HostingSubMenu}`}>
            <div className='px-5 py-5'>
                <h3>Hosting</h3>
                <hr />

                 <div className='mt-5'>
                    <span  className='pt-5 font-weight-bold'><i style={{opacity:0.8,color:"#2771ca",fontSize:"24px"}} className="fa-sharp fa-solid fa-server pr-2"></i> <Link className='text-dark Navline_remove ' to = "/web_hosting"><span >Web Hosting</span></Link></span><br /><span style={{opacity:0.6}}> small Business To Medium Business</span><br />
                 </div>

                 <div className='mt-3' >
                    <span  className='pt-5 font-weight-bold'><i style={{opacity:0.8,color:"#2771ca",fontSize:"24px"}} className="fa-solid fa-cloud pr-2"></i><Link className='text-dark Navline_remove ' to = "/cloud_hosting"><span >Cloud Hosting</span></Link> </span><br /><span style={{opacity:0.6}}> for large Scale project</span><br />
                 </div>

                 <div className='mt-3'>
                    <span  className='pt-5 font-weight-bold'><i style={{opacity:0.8,color:"#2771ca",fontSize:"24px"}} className="fa-brands fa-wordpress-simple fa-lg pr-2"></i><Link className='text-dark Navline_remove ' to = "/wordpress_hosting"><span >  Wordpress Hosting </span> </Link> </span><br /><span style={{opacity:0.6}}> optimized solution for Wordpress</span><br />
                 </div>

                 {/* I didnt Complete this future definitely */}

                 {/* <div className='mt-3'>
                    <span  className='pt-5 font-weight-bold'><i style={{opacity:0.8,color:"#2771ca",fontSize:"24px"}} className="fa-solid fa-database pr-2"></i>  Vps Hosting</span><br /><span style={{opacity:0.6}}> Dedicated resource to Scale</span><br />
                 </div>

                 <div className='mt-3'>
                    <span  className='pt-5 font-weight-bold'><i style={{opacity:0.8,color:"#2771ca",fontSize:"24px"}} className="fa-solid fa-solar-panel pr-2"></i> CyperPanel Hosting</span><br /><span style={{opacity:0.6}}> Control Panel With Open/LiteSpeed Server</span><br />
                 </div>

                 <div className='mt-3'>
                    <span  className='pt-5 font-weight-bold'><i style={{opacity:0.8,color:"#2771ca",fontSize:"24px"}} className="fa-solid fa-signal pr-2"></i> MineCraft Server Hosting</span><br /><span style={{opacity:0.6}}> Share Your Minecraft Experince</span><br />
                 </div> */}

                
              


               </div> 
            </div>

            <div onMouseLeave={()=> handledomain() } className={`Domain w-75 ml-2 ${DomainSubMenu}`}>

            <div className='px-5 py-5'>
                <h3>Domain</h3>
                <hr />
               

                 <div className='mt-5'>
                    <span  onClick={() => sorry()} className='pt-5 font-weight-bold'><i style={{opacity:0.8,color:"#2771ca",fontSize:"24px"}} className="fa-solid fa-earth-asia pr-2"></i> Domain Name Search</span><br /><span style={{opacity:0.6}}> small Business To Medium Business</span><br />
                 </div>

                 <div className='mt-3' >
                    <span  onClick={() => sorry()} className='pt-5 font-weight-bold'><i style={{opacity:0.8,color:"#2771ca",fontSize:"24px"}} className="fa-regular fa-newspaper pr-2"></i> Whooisi Lookup</span><br /><span style={{opacity:0.6}}> for large Scale project</span><br />
                 </div>

                 <div className='mt-3'>
                    <span  onClick={() => sorry()} className='pt-5 font-weight-bold'><i style={{opacity:0.8,color:"#2771ca",fontSize:"24px"}} className="fa-solid fa-display fa-lg pr-2"></i> Domain Transfer</span><br /><span style={{opacity:0.6}}> optimized solution for Wordpress</span><br />
                 </div>


               </div> 
                
            </div>

            

        </div>
        <div  className={`modal_box_login ${ModalShow}`}>

             <div  className='Login'>
                <div className=' '>
                <h2 className='d-flex justify-content-between align-items-center'><p><span className='login_header'>H</span>Login</p><p className=''><i onClick={(e) => HideAndShowModal(e)} className="fa-solid fa-xmark closemodal"></i></p></h2>
                <hr />
                <div className='Form2_label'>
                         <label className='Form2_label' htmlFor='name'>Email</label>
                         <input type= "text"  className='Form_Class' placeholder='Please Enter your Email' id = "name" />
                      </div>

                      <div className='Form2_label'>
                         <label className='Form2_label' htmlFor='password'>Password</label>
                         <input type= "password"  className='Form_Class' placeholder='Please Enter your Password' id = "password" />
                      </div>
                       <hr />
                      <div className='my-4'>
                         <button className='Login_button'>Login</button>
                      </div>
                </div>
             </div>

        </div>
    </>
  )
}

export default Navbar