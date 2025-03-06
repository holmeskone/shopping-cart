import { Link } from "react-router-dom";
import AllProducts from "../../components/product/useProduct";
import "./Shop.css";

const Shop = () => {
    return(
    <div className="shop-display">
        <AllProducts />
    </div>
    )
};


export default Shop;