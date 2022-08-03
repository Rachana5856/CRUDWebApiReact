import './App.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

function App() {

  const [firstName, setfirstName]=useState("")
  const [lastName, setlastName]=useState("")
  const [email, setEmail]=useState("")
  const [mobile, setMobile]=useState("")
  const [employee, setEmployee]=useState([])
  const url="http://localhost:51871/";
  const SubmitHandle=(e)=>{
    e.preventDefault()
   //alert(firstName+" "+lastName+" "+email+" "+mobile)
   
   const data={
    FirstName:firstName,
    LastName:lastName,
    Mobile:mobile,
    Email:email,
    Type:"Add"
   }
   console.log(data)
   axios
   .post(`${url}/api/Employee/AddEmployee`,data)
   .then((json)=>{
    
      alert(JSON.stringify(json))
   })
   .catch((error)=>{
    console.log("Reust failed")
   })

  }

  return (
    <>
    <div >
    <div className='demo' style={{display: 'inline-block'}}>
     <input type="text" value={firstName} placeholder="Enter First Name" onChange={(e)=>setfirstName(e.target.value)}></input><br></br>
     <input type="text" value={lastName} placeholder="Enter Last Name" onChange={(e)=>setlastName(e.target.value)}></input><br></br>
     <input type="text" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
     <input type="text" value={mobile} placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}></input><br></br>
     <button onClick={SubmitHandle}>Submit</button>
     </div>
    </div>
   
    </>
  );
}

export default App;
