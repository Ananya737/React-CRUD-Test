import { Link,Outlet } from "react-router-dom";
import Topnav from "./Pages/Topnav";

const Layout=()=>{
    return(
      <>
      

      <Topnav/>
  
      <hr size="10"/>

      <Outlet />

      <hr size="10" />

      <footer>www.mycompany.com</footer>

      
      
      </>
    )
  }
  export default Layout;