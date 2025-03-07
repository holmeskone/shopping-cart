import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({cart, setCart}) => {
  // Change: Remove the useEffect that was overriding the cart state
  // The cart state should already be managed by App.jsx

  function EmptyCart() {
    return <i className="fa-solid fa-cart-shopping"></i>;
  }

  function FullCart() {
    return <i className="fa-solid fa-cart-plus"></i>;
  }

  return (
    <div className="header">
      <nav>
        <div>
          <Link to="/">mojis'</Link>
        </div>
        <div>
          <Link to="/shop">shop</Link>
        </div>
        <div>
          <Link to="/cart">
            {cart.length > 0 ? <FullCart /> : <EmptyCart />} {/* Change: Check array length instead of boolean */}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;