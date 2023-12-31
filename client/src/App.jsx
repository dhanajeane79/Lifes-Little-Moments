/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavBar from "./Components/NavBar";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import AllProducts from "./Components/AllProducts";
import ProductItem from "./Components/ProductItem";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
import OrderStatus from "./Components/OrderStatus";
import ContactUs from "./Components/ContactUs";
import ViewCart from "./Components/ViewCart";
import UserProfile from "./Components/UserProfile";
import HavingSomeFun from "./Components/HavingSomeFun";
import Checkout from "./Components/Checkout";
import CartProvider from "./Components/CartProvider";
import { Container } from "react-bootstrap";

function App() {
  const BASE_URL = "http://localhost:4000/api";
  const storedToken = localStorage.getItem("authToken"); // Check if there is a token in localStorage
  const [token, setToken] = useState(storedToken || ""); // Set initial value to storedToken
  const [user, setUser] = useState(null);
  // State to store the authentication token
  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken"); // Check if there's a token in sessionStorage
    if (authToken) {
      setToken(authToken); // Set the token in state
    }
  }, []);

  // Function to handle successful login and set token

  const handleLoginSuccess = (newToken) => {
    console.log("handleLoginSuccess called with token:", newToken);
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
  };

  // Function to handle logout and clear token
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token from localStorage
    setToken(""); // Clear the token from state
  };

  return (
    <Router>
      <div className="app">
        <Container>
          <NavBar isLoggedIn={Boolean(token)} logout={handleLogout} />
        </Container>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                {" "}
                <Home />{" "}
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                {" "}
                <AboutUs />{" "}
              </Layout>
            }
          />
          <Route
            path="/order-status"
            element={
              <Layout>
                {" "}
                <OrderStatus />{" "}
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                {" "}
                <ContactUs />{" "}
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                {" "}
                <AllProducts user={user} BASE_URL={BASE_URL} token={token} />
              </Layout>
            }
          />
          <Route
            path="/product"
            element={
              <Layout>
                {" "}
                <ProductItem user={user} BASE_URL={BASE_URL} token={token} />
              </Layout>
            }
          />

          <Route
            path="/having-some-fun"
            element={
              <Layout>
                {" "}
                <HavingSomeFun user={user} BASE_URL={BASE_URL} token={token} />
              </Layout>
            }
          />

          <Route
            path="/cart"
            element={
              <Layout>
                {" "}
                <ViewCart BASE_URL={BASE_URL} token={token} />
              </Layout>
            }
          />

          <Route
            path="/register"
            element={
              <Layout>
                {" "}
                <RegistrationForm BASE_URL={BASE_URL} />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                {" "}
                <Login
                  BASE_URL={BASE_URL}
                  setUser={setUser}
                  handleLoginSuccess={handleLoginSuccess}
                  token={token}
                  setToken={setToken}
                />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <UserProfile BASE_URL={BASE_URL} token={token} />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
