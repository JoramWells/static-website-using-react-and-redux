import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <div style={{ backgroundColor: "hsl(180, 20%, 95%, 1)" }}>
      <div className="back" style={{ height: "500px" }}></div>
      <Container className="py-4">
        <Col>
          <h2>About Us</h2>
          <hr />
          <p>
            Justice and Peace Centre Kitale (JPC) is a dully registered
            non-governmental human rights organization. The organization’s
            secretariat is based in expansive North Rift Region of Kenya,
            Trans-Nzoia County in Kitale town, Along Kitale-Eldoret Highway, on
            the road opposite National Oil Petrol Station at Nekeki building.
          </p>
        </Col>
        <Col>
          <h2>Mission and Vision</h2>
          <hr />
          <ul>
            <li>
              Champion for the rights of the indigenous and vulnerable groups in
              our society
            </li>
            <li>
              Enhance access to justice to the poor and the vulnerable persons
              of the community
            </li>
            <li>
              Promote democratic principles embedded in good governance and rule
              of law
            </li>
            <li>Enhance sustainable peace among conflicting communities</li>
            <li>
              Promote sustainable Environmental management of land and natural
              resources
            </li>
          </ul>
        </Col>
        <Col>
          <h2>Our Associates</h2>
          <hr />
          <ul>
            <li>National Government/County government</li>
            <li>NGOs, CBOs, and FBOs</li>
            <li>Self help groups</li>
            <li>Business community</li>
            <li>LSK</li>
            <li>KNUT</li>
            <li>Development partners</li>
          </ul>
        </Col>
      </Container>
    </div>
  );
}
