import "./catalog.css";
import Product from "./product";
import DataService from '../services/dataService';
import { useEffect, useState } from 'react';

const Catalog = () => {

    let[products, setProducts] = useState([]);

    const loadCatalog = () => {
        let service = new DataService();  //instance
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect(() => {
        loadCatalog();
    });

    return (
        <div className="catalog">
            

            <h2>What Lots of Us Want</h2>
            <h3>Current Inventory:  {products.length} Products</h3>

            {

                products.map( (prod) => (<Product key={prod.id} data={prod}></Product>) )


            }

            
        </div>
    );
};

export default Catalog;