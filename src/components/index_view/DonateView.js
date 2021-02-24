import React from "react";
import Container from "react-bootstrap/Container";
import download from "./img/download.webp";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function DonateView() {
  return (
    <Container fluid className="mt-4 mb-5">
      <h1>Donate</h1>
      <Col md={10} className="divCenter">
        <hr />

        <p>
          Community support has been our main source of income. County
          government and Local government too. We urge and encourage people to
          contribute to help sustain individuals with our care{" "}
          <a href="#learn" style={{ textDecorationLine: "underline" }}>
            learn more...
          </a>
          <br />
          Fundraising and all opportunities.
        </p>

        <Row>
          <Col>
            <img src={download} alt="download image" />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    placeholder="jorammanoah1@gmail.com"
                    type="email"
                  />
                  <Form.Text className="text-muted">
                    Will never share your email with someone eles
                  </Form.Text>
                  <Button variant="primary">SUBMIT</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
