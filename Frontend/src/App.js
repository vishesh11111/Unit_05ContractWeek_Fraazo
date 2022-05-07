
import './App.css';
import {Route, Routes} from "react-router-dom";
import { Home } from './components/home';
import { Vegitable } from './components/vegitables';
import { Login } from './components/Login';
import { SingUp } from './components/singUp';
import { Fruits } from './components/fruits';
import { Credits } from './components/credits';
import { Cart } from './components/cart';
import { FoodDetails } from './components/FoodDetails';
import {NFoodDetails} from "./components/NFoodData"

function App() {
  return (
    <div className="App">



   <Routes >
  <Route path='/' element={<Home/>}></Route>
  <Route path='/fruits/:id' element={<FoodDetails/>}></Route>
  <Route path='/vegitables/:id' element={<NFoodDetails/>}></Route>
  <Route path='/vegitables' element={<Vegitable/>}></Route>
  <Route path='/fruits' element={<Fruits/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/credits' element={<Credits/>}></Route>
  <Route path='/singUp' element={<SingUp/>}></Route>
  {/* <Route path='/' element={<Home/>}></Route> */}
   </Routes>
 
    </div>
  );
}

export default App;
