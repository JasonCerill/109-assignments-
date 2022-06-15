
import "./product.css";
import QuantityPicker from './quantityPicker';
import { useState } from "react";
import {useState, useContext} from "react";
import StoreContext from "../context/storeContext";





const Product = (props) => {
    let [quantity, setQuantity] = useState(1);
    let addProdToCart = useContext(StoreContext).addProdToCart;

    let onQuantityChange = (value) => {
        setQuantity(value);
    };
    

const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
};

const addProduct = () => {
    console.log("Adding product to cart", props.data.title);
    let prodForCart = { ...props.data, quantity: quantity}:
    addProdToCart(prodForCart)
}


    console.log('the parameter value is: '+props.title);

    return(
        <div className="product">

            <img src={'/img/' + props.data.image}></img>

            <h3>{props.data.title}</h3>
            
            <label>Price:  {props.data.price}</label>
            <label>$Total</label>
            <QuantityPicker></QuantityPicker>

            <button>Add</button>

            

        </div>
    );
};

export default Product;