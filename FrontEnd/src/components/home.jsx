import { Link } from "react-router-dom";
import "../css/home.css";
import { HomeVeg } from "./HomeVeg";
import { HomeFru } from "./HomeFru";
import { Login } from "./Login";
import { SlideSection } from "./sliteStction";
import { useState, useEffect } from "react";
import Footer from "./footer";
import { Carousel, InputGroup, Button, FormControl } from 'react-bootstrap';

export const Home = () => {
const [t, sett] = useState(true);
const [da, setdats] = useState([]);



//////////////////////////////////////cart Length////////////////////

useEffect(()=>{
  tDat();
},[]);

  const tDat = async()=>{
      try {
          const data = await fetch(`https://fraazodev.herokuapp.com/cart`);
          const get = await data.json();
          setdats(get)
      } catch (error) {
          console.log(error)
      }
  }



/////////////////////////////////

  return (
    <div>
      <div>
        {/* for Nav Area */}
        {t ? <Login lm ={sett}/> : null}

        <div>
          <div className="f-1">
            <div className="m-14"><img src="https://globalprimenews.com/wp-content/uploads/2020/05/Fraazo-Logo.png" alt="" /></div>
            <div className="m-15"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kdJO6gddSL-XDJV6bJ_Dm3JhobJEANeEHw&usqp=CAU" alt="" /><select name="" id=""><option value="">Pune</option>
            <option value="">Rajsthan</option>
            <option value="">MP</option></select></div>
            
            <div className="m-12">
              <input type="text" name="" id="" placeholder="Find fresh Vegitables & fruits"/>
            </div>
            
            {/* ///////// */}
            <div className="mn-13">
          <div className="mn-12">
              

              <Link to="/cart" key={3}>
                Cart {da.length}
              </Link>
            </div>
            {/* /////////////// */}
          <div className="mn-12">
              <Link to="/credits" key={2}>
                Credits
              </Link>
            </div>
            {/* ////////// */}
            <div className="mn-12">
            <Link to="/login" key={1}>
                Login
              </Link>
            </div>
            </div>
          </div>
        </div>
        {/* Slide */}
        <SlideSection/>


        {/*  Vegitable*/}
        <HomeVeg />
        <HomeFru />
      </div>
      {/* Link Line */}
      <div className="main-3">
        <Link to="/vegitables" key={1}>
          <img
            src="https://fraazo-master.s3.ap-south-1.amazonaws.com/webban/Vegetables.png"
            alt=""
          />
        </Link>
        <Link to="/fruits" key={2}>
          <img
            src="https://fraazo-master.s3.ap-south-1.amazonaws.com/webban/Fruits.png"
            alt=""
          />
        </Link>
      </div>
      {/*  */}
      <div className='download-app'>
        <div className='download-img'>
          <img src="https://fraazo.com/static/app-screen-95bf468762091341a8e4bb213eeda2f8.png" alt="ioje" />
        </div>
        <div className='download-form'>
          <h2>Download The App</h2>
          <h5>Enter your phone number to recieve a text with a link to download the app</h5>
          <div className='bbb'>

            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                + 91
              </Button>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder='Enter Mobile Number'
              />
            </InputGroup>
          </div>
          <button id='button'>SUBMIT</button>
          <div className='available'>
            Available on
            <img src="https://www.edsys.in/wp-content/uploads/Play-Store-Logo-2.png" alt="" />
            <img src="https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png" alt="" />
          </div>
        </div>

      </div>
      {/*  */}
      <Footer/>
    </div>
  );
};
