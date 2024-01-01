import "./App.css";
import { useAuth } from "./context/global";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";

import { Routes, Route } from "react-router";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
function App() {
  const {
    isLoggedIn,
    setIsLoggedIn,
    getToken,
    setGetToken,
    userData,
    setUserData,
    login,
    logout,
  } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
