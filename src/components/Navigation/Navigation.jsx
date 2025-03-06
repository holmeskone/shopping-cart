import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
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
                    <Link to="/cart">cart'</Link>
                </div>
            </nav>
        </div>
    );
    }

export default Navigation;