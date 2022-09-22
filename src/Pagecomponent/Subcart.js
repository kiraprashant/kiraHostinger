import React, {useState , useEffect} from 'react'

function Subcart(props) {

  const {Carts ,  addwebhosting , addwordpresshosting, addcloudhosting, Removehostingplan }  = props


  const [Month, setMonths] = useState(Carts.Months)
 

  const handlepackageValue = (e) =>{
    setMonths(e.target.value)

  }

  let data = Carts.Price;

  if(Month >= 24){

     let  Price =  Carts.Price - (Carts.Price  * (80/100));
     data = Price

   }
   
   else if(Month >= 12){
      
     let  Price =  Carts.Price - (Carts.Price  * (50/100));
     data = Price

   }
   else if(Month >= 6){

    let  Price =  Carts.Price - (Carts.Price  * (25/100));
    data = Price
    
   }
   else {

    let  Price =  Carts.Price - (Carts.Price  * (0/100));
    data = Price

   }

   
   

  useEffect(() => {
    // addwebhosting(Carts,Month)
    if( Carts.Name === "web Hosting")
    {
       addwebhosting(Carts,Month)
    }
    else if(Carts.Name === "Workpress Hosting"){
      addwordpresshosting(Carts,Month)
    }

    else if(Carts.Name === "Cloud Hosting"){
      addcloudhosting(Carts,Month)
    }

  
    
    

  }, [Month])





  return (

                    <div className='my-5' style = {{border:"1px solid #e5e5e5"}}>
                    <div className='px-2 py-3 mb-3 Cart_left_Header d-flex justify-content-between align-items-center  ' style = {{borderBottom:""}}><span>{Carts.package} {Carts.Name} Plan </span> <span className='Cart_save'>Save ₹ <span className=' text-bold'>{Math.round((Carts.Price * Carts.Months)  - (data * Carts.Months))}</span></span></div>

                    <div className='d-flex justify-content-between align-items-center px-2 '>
                       <div className='Cart_left mt-4'>
                        {/* <p>{Carts.package}</p> */}
                        <p className='display-4 Cart_price'><sup style={{fontSize:"32px"}}>₹</sup><span> {Math.round(data)}</span>
                        {/* { 

                          Carts.Months >= 12 ? Math.round(Carts.Price  / 2 ) : (Carts.Price) 
                          
                        } */}
                        <span className='px-4 d-block' style = {{fontSize:"14px",color:"#727586",marginTop:"10px"}}>INR / Month</span></p>
                        {/* <p>For {Carts.Months} Months {Carts.Months  > 6 ? <span>Free Domain For 1 Year</span> : <span>no Free Domain For 1 Year</span>}</p> */}
                    
                       </div>
                        <div>
                        <div>
                         
                        </div>
                          <p>
                          
                          
                          <select value = {Month} className='Subcarts_Select' onChange={(e)=> handlepackageValue(e,Carts)}>
                            <option value = "1">1</option>
                            <option value= "6">6</option>
                            <option value= "12">12</option>
                            <option value= "36">36</option>
                          </select>
                          
                          <span> Months </span></p>
                          <div className='text-center '><button onClick={()=> Removehostingplan(Carts)} className='text-white bg-danger py-2 px-5'>Remove</button></div>
                        </div>
                    </div>
                    <div className=''>{Carts.Months  > 6 ? <div className='Cart_left_bottom'>Free Domain For 1 Year</div> : null}</div>
                    </div>     
    
  )
}

export default Subcart