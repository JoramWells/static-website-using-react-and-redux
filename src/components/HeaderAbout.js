import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import child from "./child.jpg";
import child3 from "./child3.jpg";
import prison2 from "./prison2.jpg";
import prison3 from "./prison3.jpg";
import meeting5 from "./meeting5.jpg";
import involved from './involved.png'

export default function HeaderAbout() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div style={{ padding: "50px" }}>
          <h2 style={{ textAlign: "center" }}>Achievements</h2>
          <h4 style={{ textAlign: "center", color: "grey" }}>
            We successfully completed and achieved
          </h4>
          <hr />

          <div>
            <ol style={{ margin: "auto", display: "block" }}>
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
          <h2 style={{ textAlign: "center" }}>Recent Activities</h2>
          <h4 style={{ textAlign: "center", color: "grey" }}>
            Some of the activities that we have been part of:
          </h4>
          <hr />
          <CardDeck style={{ textAlign: "center" }}>
            <Card>
              <Card.Img variant="top" src={prison2}></Card.Img>
              <Card.Body>
                <Card.Title>donation</Card.Title>

                <Card.Text>A donation to women's prison during Covid</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={prison3}></Card.Img>
              <Card.Body>
                <Card.Title>donation</Card.Title>
                <Card.Text>A donation to women's prison during Covid</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={meeting5}></Card.Img>
              <Card.Body>
                <Card.Title>donation</Card.Title>

                <Card.Text>A donation to women's prison during Covid</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
      <div style={{ backgroundColor:"#9cebb6", padding:"50px" }} className="mt-4 mb-5">
      <img src={involved} alt="Get innvolved" style={{width:"250px" ,margin:"auto", display:"block"}} />

        <h2 style={{textAlign: "center"}}>Join Us</h2>

        <div>
        <h4 style={{color:"grey"}}>Our story</h4>

            <p>We started out because of a lot of problems that were facing the community. Some include access to basic needs; food water and shelter.
            It was a rough start but all the things we did was to help. Community support has been our most important source of income
        </p>
            </div>

      </div>
      <Container>
          <div className="mt-4 mb-5" style={{textAlign:"center"}}> 
          <h2  >Donate</h2>
          <p>Community support has been our main source of income. County government and Local government too. We urge and encourage people to
              contribute to help sustain individuals with our care.
          </p>
          </div>
          <div style={{display:"flex", justifyContent:"space-between"}}>
              <div className="contribution">+2k Individuals</div>
              <div className="contribution" >Government</div>
              <div className="contribution" >Membership</div>
              <div className="contribution" >Community</div>

          </div>
          
      </Container>
    </div>
  );
}
