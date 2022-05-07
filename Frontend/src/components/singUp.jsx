import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";


export const SingUp = ()=>{
    const navigate = useNavigate();


    return (
        <div className="signUp">
            <Navbar/>
            <h1>SignUp</h1>
            <input type="text" name="" id="in-1"onChange={((e)=>e.target.value)} placeholder="Enter Your Frist Name.."/>
            <input type="text" name="" id="in-2"onChange={((e)=>e.target.value)} placeholder="Enter Your Last Name.."/>
            <input type="number" name="" id="in-3"onChange={((e)=>e.target.value)} placeholder="Enter Your Age.."/>
            <input type="number" name="" id="in-4"onChange={((e)=>e.target.value)} placeholder="Enter Your Mobile Number.."/>
            <button onClick={()=>{
                let a = document.getElementById("in-1").value;
                let b = document.getElementById("in-2").value;
                let c = document.getElementById("in-3").value;
                let d = document.getElementById("in-4").value;
                let payload = {
                    frist_name : a,
                    last_name : b,
                    age : c,
                    mobile_number : d,
                }

                fetch("https://fraazodev.herokuapp.com/login",{
                            method : "POST",
                            headers : {
                                "content-type" : "application/json"
                            },
                            body : JSON.stringify(payload)
                        })
                        navigate("/", {replace: true});
            }} className="btn-0">Submit</button>
        </div>
    )
} 