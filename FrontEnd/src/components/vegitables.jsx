import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/vegitable.css"
import { Navbar } from "./Navbar";
export const Vegitable = ()=>{

    const [data, setdata] = useState([]);

    const findData = ()=>{
     const d = [...data].filter((e)=> (e.name==="Pumpkin Green"));
     setdata(d)
    }
    // words.filter(word => word.length > 6);

  console.log(data);
  useEffect(() => {
    GetData();
  }, []);

  // console.log(data);




  const GetData = async () => {
    try {
      const data = await fetch(`https://fraazodev.herokuapp.com/vegitables`);
      const res = await data.json();
      setdata(res);
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <div>
           <Navbar/>
        <div className="m-1">
        <div>
          <button onClick={findData}>{"Pumpkin >"}</button>
        </div>
        <div className="main-11">
          {data.map((e) => (
            <Link to={`/vegitables/${e._id}`} key= {e.id}>
            <div key={e.id} className="main-2">
              <div className="img-1">
                <img src={e.image} alt="" />
              </div>
              <div className="p-1">
                <p>{e.name}</p>
                <p>₹ {e.price}</p>
                <p>{e.weight} {e.feild}</p>
              <button onClick={()=>{
                fetch(`https://fraazodev.herokuapp.com/cart/${e._id}`,{
                  method : "POST",
                  headers : {
                      "content-type" : "application/json"
                  },
                })
              }}>ADD</button>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    )
}