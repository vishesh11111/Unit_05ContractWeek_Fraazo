import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/home.css";

export const HomeVeg = () => {
  const [data, setdata] = useState([]);

  console.log(data);
  useEffect(() => {
    GetData();
  }, []);
  console.log(data);

  const GetData = async () => {
    try {
      const data = await fetch(`https://fraazodev.herokuapp.com/vegitables`);
      const res = await data.json();
      let c = 0;
      let arr = [];
      for (let i = 0; i < res.length; i++) {
        c++;
        if (c <= 6) {
          arr.push(res[i]);
          console.log(c);
        }
      }
      setdata(arr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <h1>Vegitables</h1>
        <div className="main-1">
          {data.map((e) => (
            <Link to={`/vegitables/${e._id}`} key= {e.id}>
            <div key={e.id} className="main-2">
              <div className="img-1">
                <img src={e.image} alt="" />
              </div>
              <div className="p-1">
                <p>{e.name}</p>
                <p>{e.weight} {e.feild}</p>
                <p>₹ {e.price}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
  );
};
