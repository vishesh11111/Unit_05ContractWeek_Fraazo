
import { Link } from "react-router-dom"
export const Navbar = ()=>{

    return(
        <div className="navbar">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/vegitables">Vegetables</Link></div>
            <div><Link to="/fruits">Fruits</Link></div>
            <div><Link to="/cart">Cart</Link></div>
        </div>
    )
}