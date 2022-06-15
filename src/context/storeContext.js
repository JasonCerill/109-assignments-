import { createContext } from 'react';

 

//context:  will describe data structure, (promise), but will not hold any implementation


let StoreContext = createContext({
    cart: [],
    user: {},

    addProdToCart:  () => {},  
    removeProdFromCart:

});
    
export default StoreContext;