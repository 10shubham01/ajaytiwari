import React, { useState } from "react";
import "./Nav_bar.css";
import {
  NavDropdown,
  Navbar,
  NavLink,
  Form,
  Nav,
  FormControl,
} from "react-bootstrap";

function Nav_bar() {
  const [navbar, setnavbar] = useState(false);
  const changeback = () => {
    console.log("x>", window.scrollY);
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", changeback);
  return (
    <div>
      <h1> Bootstrap -Navbar</h1>
      <Navbar
        collapseOnSelect
        expand="lg"
        Navbar
        fixed="top"
        className={navbar ? "bg-light" : "bg-dark"}
      >
        <Navbar.Brand href="#home">Ajay Tiwari</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Tabs">Home</Nav.Link>
            <Nav.Link href="#Tabs">About</Nav.Link>
            <Nav.Link href="#SelectBox">Videos</Nav.Link>
            <Nav.Link href="#SelectBox">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav_bar;
