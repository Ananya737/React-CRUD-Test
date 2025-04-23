import { useState } from "react";


const Contact=()=>{

    const [sal,setSal]=useState(0);
    const [ta,setTa]=useState(0);
    const [da,setDa]=useState(0);
    const [hra,setHra]=useState(0);
    const [totalsal,setTotalsal]=useState(0);
    const [msg,setMsg]=useState("");

const tax=(sal,ta,da,hra)=>{
    let total=Number(sal)+Number(ta)+Number(da)+Number(hra);
    setTotalsal(total);

    if(total>=80000){
        setMsg("tax is 20% of salary");        
    }
    else if(total>=50000){
        setMsg("tax is 15% of salary");
    }
    else if(total>=30000){
        setMsg("tax is 10% of salary");
    }
    else if(total<30000){
        setMsg("No tax");
    }

    

}


    return(
      <>
  
      <h1>Ques 7</h1>

      
      Enter basic salary  <input type="number" onChange={(e)=>{setSal(e.target.value)}} /> <br />
     Enter TA <input type="number" onChange={(e)=>{setTa(e.target.value)}}/> <br />
       Enter DA <input type="number" onChange={(e)=>{setDa(e.target.value)}}/> <br />
      Enter HRA  <input type="number" onChange={(e)=>{setHra(e.target.value)}} /> <br />



<input  onClick={()=>{tax(sal,ta,da,hra)}} type="submit" />


<h1>Your total salary is {totalsal}</h1>
<h1>Your tax is {msg} which is {((totalsal/100)*10)}</h1>
      
      
      </>
    )
  }
  export default Contact;