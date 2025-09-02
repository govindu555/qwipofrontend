import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavbarPage from "./navbarpage/navbar";
import SidebarPage from "./sidebarpage/sidebar";
import CustomerPage from "./customerpage/customer";
import CustomerFormPage from "./customerform/customerform";
import CustomerDetailsPage from "./customerdetails/customerdetails";
import CustomerOnePage from "./customerone/customerone";
import CustomerEditPage from "./customeredit/customeredit";


// this is for routing page from one component to another component.

const App=()=>{

  return (
    <>
      <div>
         <BrowserRouter>
          <NavbarPage/>
          <SidebarPage/>
            <Routes>
              <Route path="/" Component={CustomerPage}/>
              <Route path="/customerform" Component={CustomerFormPage}/>
              <Route path="/customerlist" Component={CustomerDetailsPage}/>
              <Route path="/customerone/:id?" Component={CustomerOnePage}/>
              <Route path="/customeredit/:id?" Component={CustomerEditPage}/>
            </Routes>
         </BrowserRouter>
      </div>
    </>
  )
}

export default App;
