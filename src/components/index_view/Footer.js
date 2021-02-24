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
        <div className="row" style={{ backgroundColor:"hsl(163, 59%, 55%, 1)", paddingTop:"50px", paddingBottom:"50px", color:"white"}}>
          
          <div className="col-sm-3 text-center">
            <h4>Social Media</h4>
            <ul className="list-unstyled">
              <li>facebook</li>
              <li>twitter</li>
              <li>instagram</li>
              <li>gmail</li>

            </ul>

          </div>
          <div className="col-sm-3 text-center">
            <h4>FAQ</h4>
            <ul className="list-unstyled">
              <li>Areas of Operation</li>
              <li>Terms of Services</li>
              <li>Management</li>
              <li>Contribution</li>
              <li>Donation</li>
              <li>Join JPC</li>
            </ul>
          </div>
          <div className="col-sm-3 text-center">
            <h4 >Address</h4>
            <strong>justice and peace center</strong>
            <br />
            Kitale, Kenya, 20300
            <br />
            <abbr title="Phone">P:</abbr>+254-9998-0846
          </div>
          <div className="col-sm-3">
            jksdjskdl

          </div>
        
      </div>
        </Container>

        <div style={{backgroundColor: "hsla(163, 59%, 40%, 1)" ,textAlign:"center", padding:"20px"}} >
            <strong>Copyright @ 2021</strong>
        </div>
      </footer>
    </div>
  );
}
