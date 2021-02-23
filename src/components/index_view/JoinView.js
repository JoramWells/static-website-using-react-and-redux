import React from "react";
import Container from "react-bootstrap/esm/Container";
import ReactPlayer from "react-player/youtube";
import "./css/index.css";

export default function JoinView() {
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "hsl(163, 59%, 55%, 1)",
      }}
      className="mt-4 mb-5"
    >
      <Container fluid>
        <h1>Join Us</h1>

        <div className="col-sm-10 mr-auto ml-auto">
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
        </div>

        <div className="col-sm-8 mr-auto ml-auto">
          <ReactPlayer
            width="auto"
            className="ml-auto mr-auto "
            url="https://www.youtube.com/watch?v=QbNEIQvgIdg"
          />
        </div>
      </Container>
    </div>
  );
}
