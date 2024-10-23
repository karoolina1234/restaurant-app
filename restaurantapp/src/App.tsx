import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/Menu/Menu";
import HeaderComponent from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { Menu, Restaurant } from "./redux/types";
import { setLoading, setMenu, setRestaurant } from "./redux/reducer";
import Contact from "./pages/Contact/ContactPage";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRestaurantData = async () => {
      dispatch(setLoading(true));
      try {
        const restaurantResponse = await axios.get<Restaurant>(
          "http://localhost:5000/api/restaurant"
        );
        dispatch(setRestaurant(restaurantResponse.data));

        const menuResponse = await axios.get<Menu>(
          "http://localhost:5000/api/menu"
        );
        dispatch(setMenu(menuResponse.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchRestaurantData();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
