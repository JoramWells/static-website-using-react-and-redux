import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* <div style={{ width:"100%", backgroundColor:"white", top:"0", padding:".3rem"}}>
        <h3 className="text-center">JUSTICE & PEACE CENTER</h3>
        
      </div> */}

      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
        style={{ backgroundColor: "hsla(163, 59%, 40%, 1)", color: "white" }}
      >
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="jpc-logo"
            style={{ height: "60px", width: "60px", borderRadius: "5px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link >
              <Link to="/"  style={{ color: "white", fontSize: "1.2rem" }}>HOME</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about"  style={{ color: "white", fontSize: "1.2rem" }}>ABOUT US</Link>
            </Nav.Link>
            <NavDropdown
              title="WHERE WE WORK"
              id="collasible-nav-dropdown"
              style={{ color: "white", fontSize: "1.2rem" }}
            >
              <NavDropdown.Item > <Link to="/work">Governance $ Human Rights</Link> </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="/work">Resource Mobilization</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/work">Access to Justice</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/work">Women and Gender</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/work">Peace Building</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#deets"
              style={{ color: "white", fontSize: "1.2rem" }}
            >
              WHAT WE DO
            </Nav.Link>
            <Nav.Link
              href="#deets"
              style={{ color: "white", fontSize: "1.2rem" }}
            >
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
