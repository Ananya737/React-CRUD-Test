import axios from "axios";
import { useState,useEffect } from "react";

const About=()=>{
    const [mydata,setMyData]=useState([]);


    const loaddata=async()=>{
        let api="http://localhost:3000/Employees";
        let res=await axios.get(api);
        console.log(res.data);
        setMyData(res.data);
        console.log(mydata);
    }

    useEffect(()=>{
        loaddata()
    },[]);

    
let sn=0;
    let ans=mydata.map((key)=>{
        sn++;
        return(
            <>
            <tr>
               
                <td>{sn}</td>
                <td>{key.emp_id}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
            </tr>


            </>
        )
    })

   


    return(
      <>
  
      
      <h1>Data Display!</h1>

     <table border={5} cellPadding={5}>
        <tr>
            <th>Sr no.</th>
            <th>Employee id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
        </tr>
        {ans}
     </table>
      




      </>
    )
  }
  export default About;