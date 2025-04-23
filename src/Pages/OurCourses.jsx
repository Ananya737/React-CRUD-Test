import { useState } from "react";

const OurCourses=()=>{
    const [cnt,setCnt]=useState(0);

    return(
      <>
  
  <h1>Counter program!</h1>

  <h2>Count: {cnt}</h2>
  <button onClick={()=>{setCnt(cnt+10)}}>Increment</button>
  <button onClick={()=>{setCnt(cnt-10)}}>Decrement</button>
      
      
      </>
    )
  }
  export default OurCourses;