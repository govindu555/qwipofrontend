import { useEffect } from "react";
import "./customerdetails.css"
import axios from "axios";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";


//this is for displaying total customer data page.


const CustomerDetailsPage=()=>{

    useEffect(()=>{
           customerfun()
    },[])


    const [customerdata,setCustomerdata]=useState([])

    const [searchdata,setSearchdata]=useState([])


    async function customerfun(){
        const data= await axios.get("https://qwipobackend-tst5.onrender.com/getcustomer")
        setCustomerdata(data.data)
        setSearchdata(data.data)
    }

    const nav=useNavigate()

    function editfun(id){
        nav(`/customeredit/${id}`)
    }

    async function deletefun(id){
             const data=await axios.delete("https://qwipobackend-tst5.onrender.com/customerdelete/"+id)
             setCustomerdata(data.data)
    }


    function searchfun(e){
        console.log(e.target.value)
        if(e.target.value!=""){
        const data=searchdata.filter(item=>item.fname.includes(e.target.value) || item.lname.includes(e.target.value) || item.city.includes(e.target.value) || item.state.includes(e.target.value))
        setCustomerdata(data)
        console.log(data)
        }
        else{
            setCustomerdata(searchdata)
        }
    }

    return(
        <div className="customerdetails">
            <div className="customeritems">
                <input type="search" className="search" placeholder="Serach name or city or state" onChange={searchfun}/>
             <div className="customeritems">
                <h1 className="customeritem">S.no</h1>
                <h1 className="customeritem">Name</h1>
                <h1 className="customeritem">Phone</h1>
                <h1 className="customeritem">City</h1>
                <h1 className="customeritem">State</h1>
             </div>
             </div>
             <div className="customerlists">
                {customerdata.map((item,index)=>(
                    <div>
                        <div className="listmains" key={index}>
                            <NavLink className="customeritems2" to={`/customerone/${item._id}`}>
                                <h1 className="customeritem2">{index+1}</h1>
                                <h1 className="customeritem2">{item.fname}</h1>
                                <h1 className="customeritem2">{item.phone}</h1>
                                <h1 className="customeritem2">{item.city}</h1>
                                <h1 className="customeritem2">{item.state}</h1>
                            </NavLink>
                             <div className="icons">
                                <BsPencilSquare className="icon" onClick={()=>editfun(item._id)}/>
                                <BsTrash3 className="icon icon2" onClick={()=>deletefun(item._id)}/>
                            </div>
                        </div>
                        <hr className="line"/>
                    </div>
                ))}
             </div>
        </div>
    )
}

export default CustomerDetailsPage;