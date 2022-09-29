import React, { useState ,useEffect } from 'react'
import Banner from './Banner'
import Subcart from './Subcart'
import ".././Csscomponent/Carts.css"


function Carts(props) {
    const {Carts ,  addwebhosting , Removehostingplan , addwordpresshosting , addcloudhosting} = props

    const [Month, setMonths] = useState(1)

    const [CouponCode, setCouponCode] = useState("")

    const [Applied, setApplied] = useState(false)

    const [ShowCouponResult, setShowCouponResult] = useState("")

    const [ShowCoupon, setShowCoupon] = useState(false)

    useEffect(() => {

      // addwebhosting(Month)
    
  }, [Month])

  const ApplyCoupon = () =>{

    setShowCoupon(true)
    const code = CouponCode
    if(code.toLocaleLowerCase() === "thapa"){
      setApplied(true)
      
    }
    else{
      setApplied(false)
    }
  }

  const progress = () =>{
    alert("!sorry Work in progress this will Recover from Next Upgrade")
  }
     
   
    const itemsPrice = Carts.reduce((a, c) => {




      if(c.Months >= 24){

            let  Price =  c.Price - (c.Price  * (75/100));
            return a + (Price * c.Months)

      }

      else if(c.Months >= 12){
        let  Price =  c.Price - (c.Price  * (50/100));
        return a + (Price * c.Months)
      }

      else if(c.Months >= 6){
        let  Price =  c.Price - (c.Price  * (25/100));
        return a + (Price * c.Months)
      }

      if(c.Months < 3){
        let  Price =  c.Price - (c.Price  * (0/100));
        return a + (Price * c.Months)
      }
      
    },0 );



  //  const itemsPrice = Carts.reduce((a, c) => a + (c.Price * c.Months) / 2 , 0)
    const fullyItemprice = Carts.reduce((a, c) => a + (c.Price * c.Months) , 0)

    const Taxprice = itemsPrice > 2000 ? 100 : 200 


    const Discount = Applied ? itemsPrice * 0.10 : 0

    const TotalPrice =  itemsPrice + Taxprice 

    const FinalPrice = Math.round(TotalPrice - Discount)



  return (
    <>
        <Banner Heading = "You’re almost there! Complete your order" Paragraph = "They are Diffrent Hosting package like Web Hosting , Wordpress Hosting And Cloud Hosting." ButtonName = "Add More" />
         <div className='container my-5'>
              <div className='row'>
               <div className='col-lg-8 col-md-8 col-12 FirstCart_Row'>
              {Carts.length === 0 ? <div>  your cart empty</div> : null}
              
              {Carts.map((elem, i)=>{
              return <Subcart key = {i} Carts = {elem}  addwebhosting = {addwebhosting} Removehostingplan = {Removehostingplan} addwordpresshosting = {addwordpresshosting} addcloudhosting = {addcloudhosting}/>
              })}

         </div>
            <div className='col-lg-4 col-md-4 col-12 SecondCart_Row'>
            {Carts.length === 0 ? <div> </div> 
            
            : 
            
            <div className='my-5 Order'>
               <div className=' mb-3 Summary'> Order Summary  </div>
               <div className='px-4 py-4'>
               <div><span>Price : </span><span></span>{itemsPrice}</div>  
               <div><span>Tax % Fees : </span><span className='text-danger'>{Taxprice}</span></div>
               <div><span>Discount : </span><span className='text-success'>{Math.round(Discount)}</span></div>
               <div>Total Save: <span className='text-success'> {Math.round(fullyItemprice + Discount - itemsPrice)}</span></div>
               <div className='pl-1'><b>Final Price</b> : <b>{FinalPrice}</b></div>

               </div>
               <div className='px-4 '>
               <div style={{lineHeight:"10px"}} className='Form2_label'>
                         <label style={{fontSize:"12px",lineHeight:"20px"}} className='Form2_label' htmlFor='name'>Enter The Code Thapa Flat 10% discount </label>
                         <input type= "text" value = {CouponCode} className='Form_Class mb-4 d-block' placeholder='Please Enter your Name' id = "name" onChange={(e) => setCouponCode(e.target.value)}/>
                         <div className='mb-4 mx-auto text-center' style={{marginTop:"-15px",fontSize:"12px"}}>
                         {
                             ShowCoupon ?
                              Applied ? <div className='text-success'>10% discount Applied</div> : <div className='text-danger'>expired or Invalid Coupon</div> 

                              :null
                              }
                         </div>     
                          
                         <button className='btn btn-primary d-block w-100 ' onClick={()=> ApplyCoupon()}>Apply Coupon</button>
                      </div>
                      <div className='my-4'>
                         <input type = "radio" name = "Payment" value = "Paytm"/> Paytm<br />
                         <input type = "radio" name = "Payment" value = "UPI"/> UPI<br />
                         <input type = "radio" name = "Payment" value = "GooglePay"/> GooglePay<br />
                         <input type = "radio" name = "Payment" value = "NetBanking"/> NetBanking<br />
            
                      </div>
                  <button onClick={()=> progress()} className='btn btn-success d-block w-100 my-3'>Proced To Pay</button>
               </div>
            </div>
            }
            
           </div>
         </div>

        </div> 
    </>
  )
}

export default Carts