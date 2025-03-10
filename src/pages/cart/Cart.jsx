import "./Cart.css";
import { useOutletContext } from "react-router-dom"; // Add: Import useOutletContext

const Cart = () => {
    const { cart, setCart } = useOutletContext();
    let cartReplica = [...cart];

function increment(productId){
    const numericId = productId.replace("increment-", "");
    const product = cartReplica.find(p => p.id == numericId);
    let index = cartReplica.indexOf(product)
    let currentQuantity = parseInt(cartReplica[index].quantity)
    let newQuantity = (currentQuantity + 1)
    cartReplica[index].quantity=newQuantity
    setCart(cartReplica)
    localStorage.setItem("cart", JSON.stringify(cartReplica));
}

function decrement(productId) {
    const numericId = productId.replace("decrement-", "");
    
    // Create a deep copy of the cart to avoid mutation issues
    const cartReplica = JSON.parse(JSON.stringify(cart));
    
    const product = cartReplica.find(p => p.id == numericId);
    if (!product) return;
    
    const index = cartReplica.indexOf(product);
    let currentQuantity = parseInt(cartReplica[index].quantity);
    
    if (currentQuantity > 1) {
      // Decrement the quantity if it's greater than 1
      cartReplica[index].quantity = currentQuantity - 1;
    } else {
      // Remove the product from the cart if quantity would reach 0
      cartReplica.splice(index, 1);
    }
    
    // Update state and localStorage
    setCart(cartReplica);
    localStorage.setItem("cart", JSON.stringify(cartReplica));
  }


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
        <h4>Quantity</h4>
        <div className="quantity-editor">
            <button className="decrement" id={`decrement-${item.id}`} onClick={event => {
                decrement(event.target.id)}}>-</button>
            <span id={item.title} className="product-quantity-value">{item.quantity}</span>
            <button className="increment" id={`increment-${item.id}`} onClick={event => {
                increment(event.target.id)}}>+</button>
        </div>
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
let noItems = "nothing in cart..."



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