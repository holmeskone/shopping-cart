import { Link } from "react-router-dom";
import "./Home.css";
import Product from "../../components/product/useProduct";
const Home = () => {
  return (
    <div>
      <div className="hero">
      <h1>Welcome to mojis'</h1>
      <h2>Discover our selection of styles.</h2>
      <div className="cta">
        <Link to="/shop">
        <button type="button">Shop</button>
        </Link>
      </div>
      <div>
      </div>
      </div>
    </div>
  );
}

export default Home;