import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/fruits.css";
import { Navbar } from "./Navbar";

export const Fruits = () => {
  const [data, setdata] = useState([]);

  console.log(data);
  useEffect(() => {
    GetData();
  }, []);

  const findData = ()=>{
    const d = [...data].filter((e)=> (e.name==="Chikoo"));
    setdata(d)
   }

  // console.log(data);

  const GetData = async () => {
    try {
      const data = await fetch(`https://fraazodev.herokuapp.com/fruits`);
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
          <button onClick={findData}>{"Chikoo >"}</button>
        </div>
        <div className="main-11">
          {data.map((e) => (
            <Link to={`/fruits/${e._id}`} key= {e.id}>
            <div key={e.id} className="main-2">
              <div className="img-1">
                <img src={e.image} alt="" />
              </div>
              <div className="p-1">
                <p>{e.name}</p>
                <p>₹ {e.price}</p>
                <p>{e.weight} {e.feild}</p>
              <button>ADD</button>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
  );
};
