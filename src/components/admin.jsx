import "./admin.css"



const Admin = () => {
    const [product, setProduct] = useState({});
    const[coupon, setCoupon] = useState([]);
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    
    
    const saveProduct = () => {
        console.log("Saving Product");
    };

const textChanged = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    let copy = {...product};
    copy[name] = val
    setProduct(copy);

    };

const couponChanged = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    let copy = {...coupon};
    copy[name] = val
    setCoupon(copy);
};



const saveCoupon = () => {
    console.log ("Saving Coupon", coupon);

    let copy = [...allCoupons];
    copy.push(coupons);
    setAllCoupons(copy);
}

    return (

        <div className="admin-page">
            <h4>Store Administration</h4>

            <div className="content">
                <section className="products">
                    <h5>Register new Product</h5>



                    <div className="field">
                        <label>Title</label>
                        <input name="title" onChange={textChanged} className="form-control" type="text"/>
                    </div>

                    <div className="field">
                        <label>Category</label>
                        <input className="form-control" type="text"/>
                    </div>

                    <div className="field">
                        <label>Image</label>
                        <input name="image" onChange={textChanged} className="form-control" type="text"/>
                    </div>

                    <div className="field">
                        <label>Price</label>
                        <input name="price" onChange={textChanged} type="text"/>
                    </div>

                    <div className="field">
                        <button onClick={saveProduct} classname="btn btn-primary" >Register Product</button>
                    </div>

                    <hr />

                    <ul>
                        {allProdcuts.map(p,index)=>} 
                    </ul>

                    
                    
                    <div className="field">
                        <label>Coupon</label>
                        <input name="price" onChange={couponChanged} type="text"/>
                    </div>

                    <div className="field">
                        <label>Code</label>
                        <input name="code" onChange={couponChanged} type="text"/>
                    </div>
                    
                    <div className="field">
                        <label>Discount</label>
                        <input name="discount" onChange={couponChanged} type="text"/>
                    </div>


                    <div className="field">
                        <button onClick={saveCoupon} classname="btn btn-primary">Register Coupon</button>
                    </div>

                    <hr />
                <ul>
                        {allCoupons.map(c) => (
                        <li>{c.code} - {c.discount}
                        </li>
                        ))}
                </ul>

                
                </section>

                <section className="coupons">


                </section>


            </div>

        </div>
    )
}

export default Admin;