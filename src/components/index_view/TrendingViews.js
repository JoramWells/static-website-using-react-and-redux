import React from "react";
import hiv from "./img/hiv.jpg";
import covid from "./img/covid.png";
import justice3 from "./img/justice3.jpg";
import women from "./img/women.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Media from 'react-bootstrap/Media'
import Container from "react-bootstrap/Container";

export default function TrendingViews() {
  return (
    <Container fluid className=" mt-5 mb-5">
      <h1>Trending</h1>
      <Col md={10} className="divCenter">
      <hr />

      <ul className="list-unstyled">
        <Media as="li" >
          <img
                width={64}
                height={64}
                className="mr-3"
                src={hiv}
                alt="Generic placeholder"

           />
           <Media.Body>
             <p>The Covid-19 pandamic has ensured decline in the economy.Creating
          awareness on the youth about importance of responsibility.</p>
           </Media.Body>

        </Media>
        <Media as="li" >
          <img
                width={64}
                height={64}
                className="mr-3"
                src={covid}
                alt="Generic placeholder"

           />
           <Media.Body>
             <p>The Covid-19 pandamic has ensured decline in the economy.Creating
          awareness on the youth about importance of responsibility.</p>
           </Media.Body>

        </Media>
        <Media as="li" >
          <img
                width={64}
                height={64}
                className="mr-3"
                src={justice3}
                alt="Generic placeholder"

           />
           <Media.Body>
             <p>The Covid-19 pandamic has ensured decline in the economy.Creating
          awareness on the youth about importance of responsibility.</p>
           </Media.Body>

        </Media>
        <Media as="li" >
          <img
                width={64}
                height={64}
                className="mr-3"
                src={women}
                alt="Generic placeholder"

           />
           <Media.Body>
             <p>          Access to justice and gender equality has been one among the very many
          problems facing our community.</p>
           </Media.Body>

        </Media>

      </ul>

      </Col>


    </Container>

  );
}
