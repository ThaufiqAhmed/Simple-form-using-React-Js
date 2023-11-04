import React from "react";
import "./FormBody.css"
import { useState } from "react";

function FormBody(){
    const [Firstname,setFirstname]=useState("")
    const [Lastname,setLastname]=useState("")
    const [Mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")
    const [Pass,setPass]=useState("")
    const [Conpass,setConpass]=useState("")
    const [Dob,setDob]=useState("")
    const [Gender,setGender]=useState("")
    const [State,setState]=useState("")
    const [selectcourse,setSelectcourse]=useState("")
    const [Delivery,setDelivery]=useState("")
    const [Comments,setComments]=useState("")
    const [passError, setpassError]=useState(false)


    const OptionGender =(e)=>(setGender(e.target.value)) 
    const OptionDelivery =(e)=>(setDelivery(e.target.value))
const handlesubmit = (e)=>{
    e.preventDefault();
    if(Pass !== Conpass){
      setpassError(true)
    }
    else{
        setpassError(false)
    console.log("First Name : "+Firstname)
    console.log("Last Name : "+Lastname)
    console.log("Mobile Number : "+Mobile)
    console.log("E Mail : "+email)
    console.log("Password : "+Pass)
    console.log("Confirm Password : "+Conpass)
    console.log("Dob : "+Dob)
    console.log("Gender : "+Gender)
    console.log("State : "+State)
    console.log("Course : "+selectcourse)
    console.log("Mode Of Class : "+Delivery)
    console.log("Comments : "+Comments)
    alert(`Your Response Updated Successfully ${Firstname} ${Lastname}`)
    }
}

    return(
        <>
        <form className="registration-form" onSubmit={handlesubmit} >
        <fieldset>
            <legend>Personal Information</legend>
        <div className="Form-Body">
            <label htmlFor="firstname">First Name :</label>
            <input id="Firstname" value={Firstname} type="text" placeholder="Enter your First Name " onChange={(e)=>setFirstname(e.target.value)} required/>
        </div>
        <div className="Form-Body">
            <label htmlFor="lastname">Last Name :</label>
            <input id="Lastname" value={Lastname} type="text" placeholder="Enter your Last Name " onChange={(e)=>setLastname(e.target.value)} required/>
        </div>
        <div className="Form-Body">
            <label htmlFor="mobile">Mobile Number :</label>
            <input id="MobileNumber" value={Mobile} maxLength={10} type="text" placeholder="Enter your Number" onChange={(e)=>setMobile(e.target.value)} required/>
        </div>
        <div className="Form-Body">
            <label htmlFor="email">Email :</label>
            <input id="Email" value={email} type="email" placeholder="Enter your email " onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className="Form-Body">
            <label htmlFor="password">Password :</label>
            <input id="Password" value={Pass} type="password" placeholder="Enter your Password " name="password" onChange={(e)=>setPass(e.target.value) } required/>
        </div>
        <div className="Form-Body">
            <label htmlFor="conpassword">Confirm Password :</label>
            <input id="ConPassword" value={Conpass} type="password" placeholder="Enter your Confirm Password " name="conpassword"  onChange={(e)=>setConpass(e.target.value)} required/>
        </div>
        <div className="Form-Body">
            <label htmlFor="dob">DOB :</label>
            <input id="Dob" value={Dob} type="date" onChange={(e)=>setDob(e.target.value)} />
        </div>
        <div className="Form-Body1">
            <label htmlFor="gender">Gender :</label>
            <input id="radio" checked={ Gender === "male"}  onChange={OptionGender} className="Gender" value="male" type="radio"  name="gender" required/><label>Male </label>
            <input id="radio" checked={ Gender === "female"} onChange={OptionGender} className="Gender" value="female" type="radio"  name="gender" required/><label>Female </label>
        </div>
        <div className="Form-Body">
            <label htmlFor="state">Select State :</label>
            <select id="SelectState"  value={State} onChange={(e)=> setState(e.target.value)} required>
                <option></option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>Telungana</option>
                </select>
        </div>
        </fieldset>
        <fieldset>
            <legend>Course Information </legend>
            <div className="Form-Body"> 
            <label htmlFor="selectcourse">Select Course :</label>
            <select value={selectcourse} onChange={(e)=>setSelectcourse(e.target.value)} >
                <option></option>
                <option>Java Full Stack</option>
                <option>Python Full Stack</option>
                <option>Software Testing</option>          
            </select>
                  </div>
        <div className="Form-Body1">
            <label htmlFor="Delivery">Delivery Mode :</label>
            <input id="radio" checked={Delivery === "Online"} 
            onChange={OptionDelivery} type="radio" name="Deliverymode" value="Online" required/><label>Online</label>
            <input id="radio" checked={Delivery === "Offline"} 
             onChange={OptionDelivery} type="radio"   name="Deliverymode" value="Offline" required/><label>Offline</label>
        </div>
        <div className="Form-Body">
            <label htmlFor="comments">Comments :</label>
            <textarea value={Comments} onChange={(e)=>setComments(e.target.value)}>
            </textarea>
        </div>
        </fieldset>
        <br></br>
        {passError && <p className="Warning">*Password Does Not Match*</p>}
        <button type="Submit">Register</button>
        </form>
        </>
    )
}

export default FormBody