import "../css/Nfood.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const NFoodDetails = () => {
  var { id } = useParams();
  var [data, setData] = useState({});
  const navigate = useNavigate();
  // console.log("kkkkkkk");
  // console.log(data);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const data = await fetch(`https://fraazodev.herokuapp.com/vegitables/${id}`);
    const res = await data.json();
    setData(res);
  };

  return (
    <div>
      <Navbar/>
    <div className="data-1">
      <Navbar/>
      <div className="d-1"><img src={data.image} alt="" /></div>
      <div className="d-2">
       <p>{data.name}</p>
        <p>{data.weight} {data.feild}</p>
        <p>{data.price}</p>
        <button className="b-1" onClick={() => {
      
            const payload = {
              image: data.image,
              name: data.name,
              price: data.price,
              wiegt: data.weight,
              Description: data.Description,
              Benefits: data.Benefits,
              Info: data.info,
              quantity: data.qty,
            };

            fetch(`https://fraazodev.herokuapp.com/cart`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(payload)
            });
            navigate(-1, { replace: true });
          }}>ADD</button>
      </div>
    </div>
    </div>
  );
};
