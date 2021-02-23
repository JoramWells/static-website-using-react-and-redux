import React from "react";
import hiv from "./img/hiv.jpg";
import covid from "./img/covid.png";
import justice3 from "./img/justice3.jpg";
import women from "./img/women.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function TrendingViews() {
  return (
    <div className="col-sm-10 mt-5 mb-5 mr-auto mx-auto">
      <h1 style={{ textAlign: "center", color: "#00284d" }}>Trending</h1>
      <div className="section ">
        <hr />
        <p>
          The Covid-19 pandamic has ensured decline in the economy.Creating
          awareness on the youth about importance of responsibility.
          <br />
          Access to justice and gender equality has been one among the very many
          problems facing our community.
        </p>
        <Row className="mt-4">
          <Col>
            <img src={hiv} alt="HIV image" style={{ width: "200px" }} />
          </Col>
          <Col>
            <img src={covid} alt="Covid image" style={{ width: "200px" }} />
          </Col>
          <Col>
            <img
              src={justice3}
              alt="Justice image"
              style={{ width: "200px" }}
            />
          </Col>
          <Col>
            <img src={women} alt="Justice image" style={{ width: "200px" }} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
