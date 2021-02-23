import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './index.css'



export default function Header (){
    return(

<Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" style={{backgroundColor: "hsla(163, 59%, 40%, 1)", color:"white"}}>
  <Navbar.Brand href="#home">
      {/* <img src={logo} alt="jpc-logo" style={{height:"60px", width:"60px", borderRadius:"50px"}} /> */}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features" style={{color:"white"}}>JUSTICE & PEACE CENTER</Nav.Link>

    </Nav>
    <Nav>
      <Nav.Link href="#home"  style={{color:"white"}}>HOME</Nav.Link>
      <Nav.Link href="#about"  style={{color:"white"}}>ABOUT US</Nav.Link>
      <NavDropdown title="WHERE WE WORK" id="collasible-nav-dropdown" style={{color:"white"}}>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets"  style={{color:"white"}}>WHAT WE DO</Nav.Link>
      <Nav.Link href="#deets"  style={{color:"white"}}>CONTACT US</Nav.Link>


    </Nav>
  </Navbar.Collapse>
</Navbar>
        

    );
}