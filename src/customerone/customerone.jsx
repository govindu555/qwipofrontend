import { useNavigate, useParams } from "react-router-dom";
import "./customerone.css"
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";


// this is for displaying one customer page.

const CustomerOnePage=()=>{

    const [customerdata,setCustomerdata]=useState({})

    const pa=useParams()

    const id=pa.id

    useEffect(()=>{
           customerfun()
    },[])

    async function customerfun(){
          const data=await axios.get("https://qwipobackend-tst5.onrender.com/onecustomer/"+id)
          setCustomerdata(data.data)
    }


    const nav=useNavigate()

    function backfun(){
         nav("/customerlist")
    }


    return(
        <div className="customermainlist">
            <div className="customermainlist2">
                <h1 className="customerheads"><BsArrowLeft className="back" onClick={backfun}/>Hii, Welcome...</h1>
                <div className="customerhead2">
                    <div className="customerhead3">
                        <h1 className="customer1">Frist Name</h1>
                        <h1 className="customer2">{customerdata.fname}</h1>
                    </div>
                    <div  className="customerhead3">
                        <h1 className="customer1">Last Name</h1>
                        <h1 className="customer2">{customerdata.lname}</h1>
                    </div>
                    <div  className="customerhead3">
                        <h1 className="customer1">Phone Number</h1>
                        <h1 className="customer2">{customerdata.phone}</h1>
                    </div>
                    <div  className="customerhead3">
                        <h1 className="customer1">City</h1>
                        <h1 className="customer2">{customerdata.city}</h1>
                    </div>
                    <div  className="customerhead3">
                        <h1 className="customer1">State</h1>
                        <h1 className="customer2">{customerdata.state}</h1>
                    </div>
                    <div  className="customerhead3">
                        <h1 className="customer1">Pin Code</h1>
                        <h1 className="customer2">{customerdata.pincode}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerOnePage;