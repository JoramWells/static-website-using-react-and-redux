import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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



        </div>
    );
  }


