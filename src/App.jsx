// In App.jsx
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react"; // Add useEffect import
import "./App.css";

const App = () => {
    const [cart, setCart] = useState([]);
    

    // Add this useEffect to load cart data on initial render
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []); // Empty dependency array means this runs once when component mounts
    

    // const handleCartChange = (cartItem) => {
    //     setCart(cartItem);
    // };

    return (
        <div className="App">
            <Navigation cart={cart} setCart={setCart}/>
            <Outlet context={{cart, setCart}}/>
        </div>
    );
}

export default App;