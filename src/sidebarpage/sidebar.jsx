import { useNavigate } from "react-router-dom";
import "./sidebar.css"


//this is for sidebar page.

const SidebarPage=()=>{


    const nav=useNavigate()

    function formfun(){
      nav("/")
    }


    function recordfun(){
        nav("/customerlist")
    }

    return(
        <div>
            <div className="sidemain">
                <h1 className="sidehead" onClick={formfun}>customer Form</h1>
                <h1 className="sidehead" onClick={recordfun}>customer records</h1>
            </div>
        </div>
    )
}

export default SidebarPage;