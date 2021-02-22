import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import child from "./child.jpg";
import child3 from "./child3.jpg";
import prison2 from "./prison2.jpg";
import prison3 from "./prison3.jpg";
import meeting5 from "./meeting5.jpg";
import involved from "./involved.png";
import "./index.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import justice3 from './justice3.jpg'
import hiv from './h.png'
import covid from './covid.png'
import women from './women.jpg'


export default function HeaderAbout() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div style={{ padding: "5px" }}>
          <h2 style={{ textAlign: "center", color:"#00284d" }}>Achievements</h2>
          <h4 style={{ textAlign: "center" }}>
            We successfully completed and achieved
          </h4>
          <hr />

          <div className="mr-auto ml-auto">
            <ol  >
              <li>
                Successfully conducted social audit exercise for CDF funds in
                Pokot and Trans-Nzoia Counties
              </li>
              <li>
                Lobbied for the introduction of mobile courts in ASAL areas
              </li>
              <li>Facilitated mitigation cases of Gender Based Violence</li>
              <li>Established child Human Rights clubs in schools</li>
              <li>Resolved Civil cases through ADR mechanisms</li>
            </ol>
          </div>
        </div>

        <div className="mt-4 mb-5">
          <h2 style={{ textAlign: "center", color:"#00284d" }}>Recent Activities</h2>
          <h4 style={{ textAlign: "center" }}>
            Some of the activities that we have been part of:
          </h4>
          <hr />
          <p className="mb-5 mt-5">Every work that we do is backed with the theme of our mission statement. Our thematic concern and how much we are budgeting.
            The involvement of second parties. Separate concerns and how much our team works to ensure that we have fulfilled everything on time.
          </p>
          <CardDeck>
            <Card style={{border:"none"}}>
              <Card.Img variant="top" src={prison2}></Card.Img>
              <Card.Body>
                <Card.Title>
                  Kitale Women's Prison
                </Card.Title>

                <Card.Text>
                  <small>25th April, 2020</small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{border:"none"}}>
              <Card.Img variant="top" src={prison3}></Card.Img>
              <Card.Body>
                <Card.Title>Donation</Card.Title>
                <Card.Text>

                  <small>25th April, 2020</small>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{border:"none"}}>
              <Card.Img variant="top" src={meeting5}></Card.Img>
              <Card.Body>
                <Card.Title >
                  Social Comittee
                </Card.Title>

                <Card.Text>

                  <small>25th April, 2020</small>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{border:"none"}}>
              <Card.Img variant="top" src={meeting5}></Card.Img>
              <Card.Body>
                <Card.Title>
                  Social Comittee
                </Card.Title>

                <Card.Text>

                  <small>25th April, 2020</small>
                </Card.Text>
              </Card.Body>
            </Card>

          </CardDeck>
        </div>
      </div>
      <div style={{ paddingTop: "50px", paddingBottom:"50px",    backgroundColor: "hsla(163, 59%, 40%, 0.9)"}} className="mt-4 mb-5">
        {/* <img
          src={involved}
          alt="Get innvolved"
          style={{ width: "250px", margin: "auto", display: "block" }}
        /> */}

        <h2 style={{ textAlign: "center", color:"#00284d" }}>Join Us</h2>

        <div className="col-sm-10 mr-auto ml-auto">

          <p style={{color:"white"}} >
            We started out because of a lot of problems that were facing the
            community. Some include access to basic needs; food water and
            shelter. It was a rough start but all the things we did was to help.
            Community support has been our most important source of income
            <br />
            You can join us by sending a message to our email address <a href="#join">learn more</a>
          </p>
        </div>
      </div>
      <Container fluid>
        <div className="mt-4 mb-5">
          <h2 style={{ textAlign: "center", color:"#00284d" }}>Donate</h2>
          <div className="col-sm-10 mr-auto ml-auto">
            <hr />
            <p>
              Community support has been our main source of income. County
              government and Local government too. We urge and encourage people
              to contribute to help sustain individuals with our care{" "}
              <a href="#learn" style={{ textDecorationLine: "underline" }}>
                learn more...
              </a>
              <br />
              Fundraising and all opportunities.
            </p>
            {/* <div className="col-sm-6 ml-auto mx-auto">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <Button variant="danger">Donate</Button>
              </InputGroup.Prepend>
              <FormControl
              placeholder="jorammanoah1@gmail.com"
               aria-describedby="basic-addon1" />
            </InputGroup>
            </div> */}


          </div>
        </div>
        {/* <div className="d-flex flex-row justify-content-between   flex-wrap">
          <div className="contribution">+2k Individuals</div>
          <div className="contribution">Government</div>
          <div className="contribution">Membership</div>
          <div className="contribution">Community</div>
        </div> */}
        <div className="section col-sm-10 mt-5 mb-5 mr-auto mx-auto" >
        <Row>
          <Col>
          <img  src={hiv} alt="HIV image" style={{width:"200px"}} />
          </Col>
          <Col>
          <img  src={covid} alt="Covid image" style={{width:"200px"}} />
          </Col>          
          <Col>
          <img  src={justice3} alt="Justice image" style={{width:"200px"}}/>
          </Col>
          <Col>
          <img  src={women} alt="Justice image" style={{width:"200px"}}/>
          </Col>

        </Row>
        </div>

      </Container>
    </div>
  );
}
