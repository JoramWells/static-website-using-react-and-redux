import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './index.css'
import logo from './img/logo.png'
import {Link} from 'react-router-dom';


export default function Header (){
    return(

      <>
      {/* <div style={{ width:"100%", backgroundColor:"white", top:"0", padding:".3rem"}}>
        <h3 className="text-center">JUSTICE & PEACE CENTER</h3>
        
      </div> */}

      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{backgroundColor: "hsla(163, 59%, 40%, 1)", color:"white"}}>
  <Navbar.Brand href="#home">
  <img src={logo} alt="jpc-logo" style={{height:"60px", width:"60px", borderRadius:"5px"}} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Nav>
      <Nav.Link href="/"  style={{color:"white", fontSize:"1.2rem"}}>HOME</Nav.Link>
      <Nav.Link href="/about"  style={{color:"white", fontSize:"1.2rem"}}>ABOUT US</Nav.Link>
      <NavDropdown title="WHERE WE WORK" id="collasible-nav-dropdown" style={{color:"white", fontSize:"1.2rem"}}>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets"  style={{color:"white", fontSize:"1.2rem"}}>WHAT WE DO</Nav.Link>
      <Nav.Link href="#deets"  style={{color:"white", fontSize:"1.2rem"}}>CONTACT US</Nav.Link>


    </Nav>
  </Navbar.Collapse>
</Navbar>
      </>


        

    );
}