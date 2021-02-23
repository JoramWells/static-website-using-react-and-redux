import React from "react";
import ReactPlayer from "react-player/lazy";
import Container from "react-bootstrap/esm/Container";

export default function AchievmentView() {
  return (
    <Container>
          <div style={{ padding: "5px" }} className=" mt-4">
      <h1 style={{ textAlign: "center", color: "#00284d" }}>Achievements</h1>
      <div className="container"><hr />
      </div>

      <div className="row">
        <div className="col-sm-2"></div>

        <div className="col-sm-10">
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
        </div>
        <div className="col-sm-2"></div>
      </div>

      <div style={{ margin: "auto", display: "block" }} className="col-sm-8">
        <ReactPlayer
          width ="auto"
          className="ml-auto mr-auto"
          url="https://www.youtube.com/watch?v=QbNEIQvgIdg"
        />
      </div>
    </div>
    </Container>

  );
}
