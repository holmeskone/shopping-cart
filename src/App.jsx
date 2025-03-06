import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
<div className="App">
      <Navigation />
      <Outlet /> {/* This renders the current route (Home, Shop, etc.) */}
    </div>
  );
}

export default App;