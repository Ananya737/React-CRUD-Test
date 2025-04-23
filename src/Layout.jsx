import { Link,Outlet } from "react-router-dom";
import Topnav from "./Pages/Topnav";

const Layout=()=>{
    return(
      <>
      {/* <Link to="/">Home</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/faculty">Faculty</Link>
      <Link to="/ourCourses">Our Courses</Link>
      <Link to="/contact">Contact</Link> */}

      <Topnav/>
  
      <hr size="10"/>

      <Outlet />

      <hr size="10" />

      <footer>www.mycompany.com</footer>

      
      
      </>
    )
  }
  export default Layout;