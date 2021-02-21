import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import child from './child.jpg'
import child3 from './child3.jpg'

export default function HeaderAbout () {
    return (
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Achievements</h2>
          <ol>
              <li>Successfully conducted social audit exercise for CDF funds in Pokot and Trans-Nzoia Counties</li>
              <li>Lobbied for the introduction of mobile courts in ASAL areas</li>
              <li>Facilitated mitigation cases of Gender Based Violence</li>
              <li>Established child Human Rights clubs in schools</li>
              <li>Resolved Civil cases through ADR mechanisms</li>

          </ol>

          <h2 style={{textAlign:"center"}}>Recent Activities</h2>
          <CardDeck>
              <Card>
                  <Card.Img variant="top" src={child}></Card.Img>
              </Card>
              <Card>
                  <Card.Img variant="top" src={child3}></Card.Img>
              </Card>
              <Card>
              <Card.Img variant="top" src={child}></Card.Img>
              </Card>
          </CardDeck>



        </div>
    );
  }


