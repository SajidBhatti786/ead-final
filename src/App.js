import "./App.css";
import MyComponent from "./components/Test";
import { useAuth } from "./context/global";
import Dashbaord from "./components/Dashbaord";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router";
import { NavLink } from "react-router-dom";

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
      <MyComponent />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/about">About</NavLink>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashbaord />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
