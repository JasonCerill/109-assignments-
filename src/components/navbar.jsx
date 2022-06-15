
import "./navbar.css";
import {useContext} from 'react';
import StoreContext from "../context/storeContext";

function Navbar(){
    
    let cart = useContext(StoreContext).cart;
   
    return (
    
    <div className="navbar navbar-expand-lg navbar-dark">

        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                WhoKnows
            </Link>

            <button 
                className="navbar-toggler"
                type= "button" 
                data-bs-toggle="collapse" 
                data-bs-targets="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>

            
        </button>


        </div>

        <form className="d-flex">
            <Link className = "btn btn-outline-light" to = "/cart">
               {cart.length} View Cart 
            </Link>
        </form>
        
    </div>

    

    );
}



export default Navbar;

