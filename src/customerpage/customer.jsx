import { useNavigate } from "react-router-dom";
import "./customer.css"

//this is for customer page.

const CustomerPage=()=>{
  

    const nav=useNavigate()

     function formfun(){
        nav("/customerform")
     }

    return(
        <div className="customermain">
            <div>
                <p className="customerhead">Hi, Welcome any customer details add in this...</p>
                <button className="customeradd" onClick={formfun}>Add Customer Details</button>
            </div>
        </div>
    )
}

export default CustomerPage;