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
  const [navbarcolor, setnavbarcolor] = useState(false);
  const changeback = () => {
    if (window.scrollY >= 80) {
      setnavbarcolor(true);
    } else {
      setnavbarcolor(false);
    }
  };
  window.addEventListener("scroll", changeback);
  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
        variant="dark"
        expand="lg"
        className={navbarcolor ? "bkcolor" : "bkcolor_1"}
      >
        <Navbar.Brand href="#home">Ajay Tiwari</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#sec1">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Videos</Nav.Link>
            <Nav.Link href="#pricing">Contact Me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav_bar;
