import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
export const FoodDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  // Ste Data


  // image: {type: String,},
  // name : { type: String,},
  // price : {type: Number,},
  // wiegt : { type : String,},
  // Description : {type :String,},
  // Benefits : { type : String,},
  // Info : { type : String,},
  // quantity : {type: Number}

  ////////////
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const data = await fetch(`https://fraazodev.herokuapp.com/fruits/${id}`);
    const res = await data.json();
    setData(res);
  };

  return (
    <>
       <Navbar/>
    <div className="data-1">
      <div className="d-1">
        <img src={data.image} alt="" />
      </div>
      <div className="d-2">
        <p>{data.name}</p>
        <p>
          {data.weight} {data.feild}
        </p>
        <p>{data.price}</p>
        <button
          className="b-1"
          onClick={() => {
            // setImg = data.image;
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
          }}
          
        >
          ADD
        </button>
      </div>
    </div>
    </>
  );
};
