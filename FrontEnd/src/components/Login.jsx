import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Login = ({lm}) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const final = async () => {
    let a = document.getElementById("inp-1").value;
    let m = false;
    for (let i = 0; i < data.length; i++) {
      if (a == data[i].mobile_number) {
        m = false;
        break;
      } else {
          m = true;
      }
    }
    if (m == true) {
        navigate("/singUp", { replace: true });
    } else {
        navigate("/", { replace: true });
    }
  };

//   useEffect(() => {
 
//   });

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const data = await fetch(`https://fraazodev.herokuapp.com/login`);
      const res = await data.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="Login">
      <button onClick={()=>{
        lm(false)
      }}>X</button> 
      <h1>Login</h1>
      <input type="number" name="" id="inp-1" className="" placeholder="Enter Mobile Number"/>
      <button onClick={final}>Submit</button>
      <div>
      </div>
    </div>
    </div>
  );
};
