import { createContext ,useState} from "react";

const myContext= createContext();

const ContextApi=()=>{
    const [color,setColor]=useState();

    return(
        <>

        <h1>Theme changing program!</h1>

        

        <myContext.Provider value={{color,setColor}}>
        <div style={{width:"300px",
            height:"300px",
            border:"2px solid black"
            ,display:"flex",
            justifyContent:"center"
            ,alignItems:"center",
            backgroundColor:color}}>

            <h2>Cybrom</h2>
            </div>
             <br />
        <button onClick={()=>{setColor("yellow")}}>Change color to yellow!</button>
        <button onClick={()=>{setColor("red")}}>Change color to red!</button>

           
        </myContext.Provider>


      </>
    )
}
export default ContextApi;