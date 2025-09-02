import "./customeredit.css"
import { useState } from "react";
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"


//this is for editting customer data page.


const CustomerEditPage=()=>{

    const pa=useParams()
    const id=pa.id


    const [customerdata,setCustomerdata]=useState({
        fname:"",
        lname:"",
        phone:"",
        city:"",
        state:"",
        pincode:""
    })


    function formfun(e){
        const {name,value}=e.target;
        setCustomerdata({...customerdata,[name]:value})
    }

    const nav=useNavigate()

    async function submitfun(e){
        e.preventDefault();
        await axios.put("https://qwipobackend-1-gujp.onrender.com/customeredit/"+id,customerdata)
        const conform=window.confirm("Are You Sure...")
        if(conform==true){
           nav("/customerlist")
        }
    }

    return(
        <div className="formmain">
            <div>
                <h1 className="mainhead">Edit Customer Details</h1>
                <form className="form" onSubmit={submitfun}>
                    <div className="formitems">
                        <h1 className="formitem">First Name *</h1>
                        <input className="forminput" type="text" placeholder="first name" name="fname" onChange={formfun} required/>
                    </div>
                    <div className="formitems">
                        <h1 className="formitem">Last Name *</h1>
                         <input className="forminput" type="text" placeholder="last name" name="lname" onChange={formfun} required/>
                    </div>
                    <div className="formitems">
                        <h1 className="formitem">Phone Number *</h1>
                        <input className="forminput" type="text" placeholder="phone" name="phone" onChange={formfun} required/>
                    </div>
                    <div className="formitems">
                        <h1 className="formitem">City *</h1>
                        <input className="forminput" type="text" placeholder="city" name="city" onChange={formfun} required/>
                    </div>
                    <div className="formitems">
                        <h1 className="formitem">State *</h1>
                        <input className="forminput" type="text" placeholder="state" name="state" onChange={formfun} required/>
                    </div>
                    <div className="formitems">
                        <h1 className="formitem"> Pin Code *</h1>
                        <input className="forminput" type="text" placeholder="pincode" name="pincode" onChange={formfun} required/>
                    </div>
                    <div>
                        <input className="customersubmit" type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomerEditPage;