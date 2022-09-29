import React,{useEffect, useState} from 'react'
// import Banner from './Pagecomponent/Banner';
import Home from './Pagecomponent/Home';
import Navbar from './Pagecomponent/Navbar';
import WebHostingData from './WebhostingData';
import wordpressHostingData from './wordpressHostingData';
import CloudHostingdata from './CloudHostingData';
import {Routes,Route} from "react-router-dom"
import WebHosting from './Pagecomponent/WebHosting';
import WordpressHosting from './Pagecomponent/WordpressHosting';
import CloudHosting from './Pagecomponent/CloudHosting';
import Carts from './Pagecomponent/Carts';
import Footer from './Pagecomponent/Footer';
import Domain from './Pagecomponent/Domain';
import DomainTransfer from './Pagecomponent/DomainTransfer';





function Hostinger() {

  const [Webhosting, setWebhosting] = useState(WebHostingData)
  const [wordpresshosting, setwordpressWebhosting] = useState(wordpressHostingData)
  const [Cloudhosting, setCloudhosting] = useState(CloudHostingdata)
  const [Cart, setCart] = useState([])

  console.log(Cart)

  useEffect(() => {

   
  }, [])


  // individual web Hosting Api 
  const addwebhosting = (WebHosting , Months = 1) =>{
    
    // const exist = Cart.find((x) => x.Name === WebHosting.Name && x.package === WebHosting.package)
    const exist = Cart.find((x) =>  x.Name === WebHosting.Name )


    if(exist)
    {
      setCart(
        Cart.map((x) =>
        // x.Name === WebHosting.Name &&  x.package === WebHosting.package ? { ...exist, Months: Months } : x
        x.Name === WebHosting.Name ? { ...WebHosting , Months: Months } : x
      )
      )
    }
   
    else{
      setCart([...Cart, { ...WebHosting, Months: Months }]);
      // setCart([...Cart, { ...WebHosting, Months: Months }]);
    }
 
     
  }

    // individual workpress Hosting Api 

  const addwordpresshosting = (Wordpress , Months = 1) =>{
    
    // const exist = Cart.find((x) => x.Name === Wordpress.Name && x.package === Wordpress.package)
    const exist = Cart.find((x) =>  x.Name === Wordpress.Name )

    if(exist)
    {
      setCart(
        Cart.map((x) =>
        // x.Name === Wordpress.Name &&  x.package === Wordpress.package ? { ...exist, Months: Months } : x
        x.Name === Wordpress.Name ? { ...Wordpress , Months: Months } : x
      )
      )
    }
   
    else{
      setCart([...Cart, { ...Wordpress, Months: Months }]);
    }
 
     
  }

    // individual Cloud Hosting Api 

  const addcloudhosting = (CloudHosting , Months = 1) =>{
    
    // const exist = Cart.find((x) => x.Name === CloudHosting.Name && x.package === CloudHosting.package)
    const exist = Cart.find((x) =>  x.Name === CloudHosting.Name )

    if(exist)
    {
      setCart(
        Cart.map((x) =>
        // x.Name === CloudHosting.Name &&  x.package === CloudHosting.package ? { ...exist, Months: Months } : x
        x.Name === CloudHosting.Name ? { ...CloudHosting , Months: Months } : x
      )
      )
    }
   
    else{
      setCart([...Cart, { ...CloudHosting, Months: Months }]);
    }
 
     
  }

  // Remove Function 

  const Removehostingplan = (Webhosting) =>{

    const exist = Cart.find((x) =>  x.Name === Webhosting.Name )
    setCart(Cart.filter((elem)=> elem.Name !== Webhosting.Name  ))
       
  }




  
  return (
    <>
       <Navbar Carts={Cart} />
         <Routes>
         <Route path="/" element={<Home WebHostingData = {Webhosting} addwebhosting = {addwebhosting} />} />
         <Route path="/web_hosting" element={<WebHosting  WebHostingData = {Webhosting} addwebhosting = {addwebhosting} />} />
         <Route path="/cloud_hosting" element={<CloudHosting CloudHostingdata = {Cloudhosting} addcloudhosting = {addcloudhosting} />} />
         <Route path="/wordpress_hosting" element={<WordpressHosting wordpresshostingData = {wordpresshosting} addwordpresshosting = {addwordpresshosting} />} />
         <Route path="/cart" element={<Carts  Carts={Cart} addwebhosting = {addwebhosting} addwordpresshosting = {addwordpresshosting} Removehostingplan = {Removehostingplan} addcloudhosting = {addcloudhosting} />} />
         <Route path="/domain_search" element={<Domain />} />
         <Route path = "/domain_transfer" element={<DomainTransfer />} />
       </Routes>
       <Footer />
    </>
  )
}

export default Hostinger