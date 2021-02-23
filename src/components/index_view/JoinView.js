import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player/youtube";

export default function JoinView() {
  return (
    <div
      style={{
        paddingTop: "30px",
        paddingBottom: "50px",
        backgroundColor: "hsl(163, 59%, 55%, 1)",
      }}
      className="mt-4 mb-5"
    >
      <Container fluid>
        <h1>Join Us</h1>

        <Col className="divCenter" xs={8}>
          <hr />
          <p style={{ color: "white" }}>
            We started out because of a lot of problems that were facing the
            community. Some include access to basic needs; food water and
            shelter. It was a rough start but all the things we did was to help.
            Community support has been our most important source of income
            <br />
            You can join us by sending a message to our email address{" "}
            <a href="#join">learn more</a>
          </p>
        </Col>

        <Col xs={8} className="divCenter">
        <ReactPlayer
            width="auto"
            className="ml-auto mr-auto "
            url="https://www.youtube.com/watch?v=QbNEIQvgIdg"
          />
        </Col>
      </Container>
    </div>
  );
}
