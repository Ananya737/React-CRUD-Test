import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faculty from "./Pages/Faculty";
import OurCourses from "./Pages/OurCourses";
import Contact from "./Pages/Contact";


const App=()=>{
  return(
    <>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="/about"element={<About/>}/>
  <Route path="/faculty"element={<Faculty/>}/>
  <Route path="/ourCourses"element={<OurCourses/>}/>
  <Route path="/contact"element={<Contact/>}/>

  </Route>
</Routes>
</BrowserRouter>

    
    </>
  )
}
export default App;