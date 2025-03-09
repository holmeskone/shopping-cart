import "./Cart.css";
import { useOutletContext } from "react-router-dom"; // Add: Import useOutletContext

const Cart = () => {
    const { cart, setCart } = useOutletContext();

const listItems = cart.map((item) => 
<div key={item.id} className="product-section">
    <div className="cart-product-image">
        <img className="product-image-value" src={item.image} alt="" />
    </div>
    <div className="product-data">
        <h4 className="product-data-title-value">{item.title}</h4>
        <h5 className="product-data-title-category">{item.category}</h5>
    </div>
    <div className="product-quantity">
        <span className="product-quantity-value">{item.quantity}</span>
    </div>
    <div className="product-price">
        <span className="product-price-value">{item.price}</span>
    </div>
</div>);


const Test = ()=> {
    return (
    <div className="price-section">
        <div className="product-subtotal">
            <h4 className="subtotal-title">Subtotal</h4>
            <h4 className="subtotal-value">{cart.reduce((sum, p)=> sum+(p.price*p.quantity), 0).toFixed(2)}</h4>
        </div>
        <div className="shipping-subtotal">
            <h4 className="shipping-title">Shipping</h4>
            <h4 className="shipping-value">Free</h4>
        </div>
        <div className="final-total">
            <h4 className="total-title">Total</h4>
            <h4 className="total-value">{cart.reduce((sum, p)=> sum+(p.price*p.quantity), 0).toFixed(2)}</h4>
        </div>
    </div>)
 }

let displayItems = <>{listItems}</> 
let noItems = "sad days"



return(
    <div className="checkout">
        <div className="items">
            <h2>Bag</h2>
            {cart.length>0 ? displayItems : noItems}
        </div>
        <div className="summary">
            <h2>Summary</h2>
            <Test />
        </div>
    </div>
)}

export default Cart;