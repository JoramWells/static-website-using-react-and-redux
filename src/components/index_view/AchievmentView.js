import React from "react";
import ReactPlayer from "react-player/lazy";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export default function AchievmentView() {
  return (
    <Container fluid className="mt-5">
      <h1>Achievements</h1>
      <Container><hr /></Container>
      <Row>
        <Col className="divCenter" xs={8}>
        <ol>
            <li>
              Successfully conducted social audit exercise for CDF funds in
              Pokot and Trans-Nzoia Counties
            </li>
            <li>Lobbied for the introduction of mobile courts in ASAL areas</li>
            <li>Facilitated mitigation cases of Gender Based Violence</li>
            <li>Established child Human Rights clubs in schools</li>
            <li>Resolved Civil cases through ADR mechanisms</li>
          </ol>
        </Col>

      </Row>

      <Col className="col-sm-8 divCenter">
        <ReactPlayer
          width ="auto"
          className="ml-auto mr-auto"
          url="https://www.youtube.com/watch?v=QbNEIQvgIdg"
        />
      </Col>
    </Container>

  );
}
