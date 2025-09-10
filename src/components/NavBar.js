import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";

function NavBar() {
  const isLoggedIn = false; // change to true for demo
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm position-relative">
      <Container>
        {/* Left Side: Logos + App Name */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/assets/images/emblem.png"
            alt="National Emblem"
            width="40"
            className="me-2"
          />
          <img
            src="/assets/images/logo.png"
            alt="MP Govt"
            width="40"
            className="me-2"
          />

          {/* Text Block */}
          <div className="d-flex flex-column lh-1">
            <small className="text-muted small-text">Madhya Pradesh</small>
            <span className="fw-bold">Ajeevika Mart</span>
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Right Side */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
     

<Nav className="me-3">
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/about">About Us</Nav.Link>

  {/* Category Dropdown */}
  <NavDropdown title="Category" id="category-dropdown">
    {/* First level category */}
    <NavDropdown.Item href="/categories/agriculture">Agriculture</NavDropdown.Item>
    <NavDropdown.Item href="/categories/handicrafts">Handicrafts</NavDropdown.Item>

    {/* Divider */}
    <NavDropdown.Divider />

    {/* Second-level dropdown */}
    <NavDropdown title="Textiles" drop="end" id="subcategory-dropdown">
      <NavDropdown.Item href="/categories/textiles/cotton">
        Cotton
      </NavDropdown.Item>
      <NavDropdown.Item href="/categories/textiles/silk">
        Silk
      </NavDropdown.Item>
      <NavDropdown.Item href="/categories/textiles/wool">
        Wool
      </NavDropdown.Item>
    </NavDropdown>
  </NavDropdown>

  <Nav.Link href="/calendar">Dairy Calendar 2025</Nav.Link>
</Nav>


          {/* Search Icon */}
          <div
            className="me-2 d-flex align-items-center"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch />
          </div>

          {/* Cart Icon */}
          <Nav.Link href="/cart" className="me-3 fs-5">
            <FaShoppingCart />
          </Nav.Link>

          {!isLoggedIn ? (
            <>
              <Button variant="btn outlined-violet" className="me-2">
                Login
              </Button>
              <Button variant="btn bg-violet">Signup</Button>
            </>
          ) : (
            <>
              <Nav.Link href="/wishlist">❤️</Nav.Link>
              <Nav.Link href="/notifications">🔔</Nav.Link>
              <NavDropdown title="👤" id="profile-dropdown">
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="/edit-profile">
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Navbar.Collapse>
      </Container>

      {/* Floating Search Bar */}
      {showSearch && (
        <div
          className="position-absolute top-100 start-50 translate-middle-x w-50 bg-white shadow rounded p-2 d-flex align-items-center"
          style={{ zIndex: 1050 }}
        >
          <Form className="d-flex flex-grow-1">
            <Form.Control
              type="text"
              placeholder="Search..."
              className="me-2"
              autoFocus
            />
            <Button variant="bg-violet">Search</Button>
          </Form>
          {/* Close Button */}
          <Button
            variant="outline-danger"
            size="sm"
            className="ms-2"
            onClick={() => setShowSearch(false)}
          >
            <FaTimes />
          </Button>
        </div>
      )}
    </Navbar>
  );
}

export default NavBar;
