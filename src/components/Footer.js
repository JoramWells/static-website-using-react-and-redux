import React from "react";
import "./index.css";
import logo from "./logo.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col>
              <img
                src={logo}
                alt="Justice and peace center logo"
                style={{ width: "70px", height: "70px" }}
              />
            </Col>
            <Col>
              <h4>Regions</h4>
              <ul>
                <li>North Eastern Uganda</li>
                <li>Bungoma(Mt Elgon)</li>
                <li>Elgeiyo Marakwet</li>
                <li>Trans-Nzoia</li>
                <li>West-Pokot</li>
                <li>Turkana</li>
              </ul>
            </Col>
            <Col>
              <strong>justice and peace center</strong>
              <br />
              Kitale, Kenya, 20300
              <br />
              <abbr title="Phone">P:</abbr>+254-9998-0846
            </Col>
          </Row>
        </Container>
        <div className="divFooter" >
            <strong>Copyright @ 2021</strong>
        </div>
      </footer>
    </div>
  );
}
