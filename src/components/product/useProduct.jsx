import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom"; // Add: Import useOutletContext
import "./useProduct.css";

const useProductInfo = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        let alpha = data.map((catalog) => ({
          ...catalog,
          quantity: "0",
        }));
        setProducts(alpha); // Change: Directly set products to data
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return { products, error, loading };
};

const AllProducts = () => {
  const { cart, setCart } = useOutletContext(); // Add: Get handleCartChange from context
  const { products, error, loading } = useProductInfo();
  
  const addToCart = (productId, productQuantity) => {
    const product = products.find(p => p.id == productId);
    if (product) {
      // Get current cart from localStorage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      
      // Check if product already exists in cart
      const existingProductIndex = cart.findIndex(item => item.id == productId);
      
      if (existingProductIndex !== -1) {
        // If product exists, update its quantity
        cart[existingProductIndex].quantity = parseInt(productQuantity);
      } else {
        // If product doesn't exist, add it to cart
        const productToAdd = {...product, quantity: parseInt(productQuantity)};
        cart.push(productToAdd);
      }
      
      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      
      // Update cart state in App component
      setCart(cart);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  
  return (
    products.map((product) => {
      return(
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} className="product-image"/>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="CTA" id={product.id} onClick={(event) => {
            const quantity = document.getElementById(product.title).value;
            addToCart(event.target.id,quantity)
          }}>Buy now</button>
          <div className="shop-product-quantity">
            <input type="number" placeholder="0" id={product.title} />
          </div>
        </div>
      )
    })
  );
};

export default AllProducts;