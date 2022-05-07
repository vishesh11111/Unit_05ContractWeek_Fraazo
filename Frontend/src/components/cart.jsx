import { useEffect, useState } from "react"
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";


export const Cart = ()=>{

    const [data, setdats] = useState([]);
    const navigate = useNavigate();

useEffect(()=>{
    GetDat();
},[]);

    const GetDat = async()=>{
        try {
            const data = await fetch(`https://fraazodev.herokuapp.com/cart`);
            const get = await data.json();
            setdats(get)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <Navbar/>
        <div>
            {data.map((e)=>(
                <div className="cart">
                    <img src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>{e.price} {e.feild}</p>
                    <button className="hello" onClick={()=>{
                         fetch(`https://fraazodev.herokuapp.com/cart/${e._id}`,{
                            method : "DELETE",
                            headers : {
                                "content-type" : "application/json"
                            },
                          });
                          navigate(0, { replace: true });
                    }}>Delete</button>
                    <button className="hello">CheckOut</button>
                </div>
            ))}
           
        </div>
        </div>
    )
}