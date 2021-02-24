import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Work() {
  return (
    <div style={{ backgroundColor: "hsl(180, 20%, 95%, 1)" }}>
      <div className="back" style={{height:"500px"}}></div>
      <Container className="py-4">
        <Col>
          <h2>Governance & Human Rights</h2>
          <hr />
          <ul>
            <li>
            Civic engagement (Mobilizing the critical mass for positive change)
            </li>
            <li>
            Monitoring, document and intervening in human rights violations
            </li>
            <li>
            Social Accountability
            </li>
            <li>Land Rights</li>
          </ul>
        </Col>
        <Col>
          <h2>Access to Justice</h2>
          <hr />
          <ul>
            <li>
            Alternative Dispute Resolution (ADR)
            </li>
            <li>
            Capacity building
            </li>
            <li>
            Legal Aid Clinics
            </li>
          </ul>
        </Col>
        <Col>
          <h2>Peace Building</h2>
          <hr />
          <ul>
            <li>Establishing and supporting Peace structures</li>
            <li>Conflict Transformation and Peace Building</li>
            <li>Production of IEC materials</li>
            <li>Research and advocacy</li>
            <li>Community dialogue</li>
            <li>Conflict mitigation</li>
            <li>Safety Audit</li>
          </ul>
        </Col>


        <Col>
          <h2>Women & Gender</h2>
          <hr />
          <ul>
            <li>Alternative Rights of passage</li>
            <li>Gender based violence</li>
            <li>Awareness raising</li>
            <li>Litigation</li>
          </ul>
        </Col>

      </Container>
    </div>
  );
}
