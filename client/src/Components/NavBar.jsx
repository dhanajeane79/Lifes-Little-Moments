/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../CSS-Components/StyleNavBar.css";
import overlayImage from "../assets/Logo7.png";
import { CartContext } from "./CartProvider";


function NavBar({ isLoggedIn, logout }) {
  const { cartItems } = useContext(CartContext);

  

  // Use local state to manage the cart item count
  const [cartItemCount, setCartItemCount] = useState(cartItems.length || 0);

  // Effect to update the cart item count whenever the cartItems context changes
  useEffect(() => {
    setCartItemCount(cartItems.length || 0);
  }, [cartItems]);

  // Effect to persist the cart item count in localStorage
  useEffect(() => {
    localStorage.setItem("cartItemCount", cartItemCount);
  }, [cartItemCount]);

  const handleCartLinkClick = () => {
    // You can perform any desired actions here
    console.log("Cart link clicked");
  };

  console.log("Cart Items:", cartItems);

  return (
    <div className="nav-bar-combo">
      {/* First Navbar (Top Navbar) */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About US
            </Link>
            <Link to="/order-status" className="nav-link">
              Order Status
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
            <Link to="/products" className="nav-link">
                All Products
              </Link>
          </Nav>
        </Navbar.Collapse>
        
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        <Nav className="ms-auto align-items-end">
        <Link to="/cart" className="nav-link" onClick={handleCartLinkClick}>
            Cart ({cartItemCount})
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
              {!isLoggedIn ? (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              ) : (
                <li className="navbar-item">
                  <button onClick={logout}>Logout</button>
                </li>
              )}
            </Nav>


      </Navbar>

      {/* Second Navbar (Bottom Navbar) */}
      {/* <div className="middle-nav-container">
        <Navbar expand="lg" className="middle-nav">
          <Navbar.Brand>
            <img
              src={overlayImage} // Replace with your image URL
              alt="Your Logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <div className="header-title-container">
            <h2 className="header-title">Compassionate Care Emporium</h2>
          </div>
          <div className="middle-nav-link-container">
            <Nav className="ms-auto align-items-end">
            <Link to="/cart" className="nav-link">
                Cart ({cartItems?.length || 0})
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
              {!isLoggedIn ? (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              ) : (
                <li className="navbar-item">
                  <button onClick={logout}>Logout</button>
                </li>
              )}
            </Nav>
          </div>
        </Navbar>
      </div> */}

      {/* <div className="bottom-nav-container">
        <Navbar expand="lg" className="bottom-nav">
          <div className="bottom-nav-link-container">
            <Nav className="me-auto">
              <Link to="/products" className="nav-link">
                All Products
              </Link>
              <Link to="/products" className="nav-link">
                Around the House
              </Link>
              <Link to="/products" className="nav-link">
                Comfort
              </Link>
              <Link to="/products" className="nav-link">
                Safety
              </Link>
            </Nav>
          </div>
        </Navbar>
      </div> */}
    </div>
  );
}

export default NavBar;
