import React from "react";
import "./index.css";
import logo from "./img/logo.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <Container fluid>
        <div className="row" style={{ backgroundColor:"hsl(163, 59%, 55%, 1)", paddingTop:"50px", paddingBottom:"50px"}}>
          
          <div className="col-sm-4">
            {/* <img
              src={logo}
              alt="Justice and peace center logo"
              style={{ width: "70px", height: "70px" }}
            /> */}
          </div>
          <div className="col-sm-4">
            <h5>Regions</h5>
            <ul>
              <li>North Eastern Uganda</li>
              <li>Bungoma(Mt Elgon)</li>
              <li>Elgeiyo Marakwet</li>
              <li>Trans-Nzoia</li>
              <li>West-Pokot</li>
              <li>Turkana</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <strong>justice and peace center</strong>
            <br />
            Kitale, Kenya, 20300
            <br />
            <abbr title="Phone">P:</abbr>+254-9998-0846
          </div>
        
      </div>
        </Container>

        <div style={{backgroundColor: "hsla(163, 59%, 40%, 1)", color:"white", textAlign:"center", padding:"20px"}} >
            <strong>Copyright @ 2021</strong>
        </div>
      </footer>
    </div>
  );
}
