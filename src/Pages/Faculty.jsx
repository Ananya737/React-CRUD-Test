import axios from "axios";
import { useState } from "react";

const Faculty=()=>{
    const [input,setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))

    }

    const handleSub=async()=>{
        let api="http://localhost:3000/Employees";
        let res=await axios.post(api,input);
        alert("Data Saved!");
        setInput(res.data);
    }

    return(
      <>

      <h1>data Inserting!</h1>

      Enter Employee id <input type="text"  name="emp_id" value={input.emp_id} onChange={handleInput}/>  <br />
      Enter Name <input type="text" name="name" value={input.name}  onChange={handleInput}/>  <br />
      Enter Designation <input type="text"  name="designation" value={input.designation} onChange={handleInput}/>  <br />
      Enter Salary <input type="text" name="salary" value={input.salary} onChange={handleInput} />  <br />
   <button onClick={handleSub}>Submit</button>
      
      
      </>
    )
  }
  export default Faculty;