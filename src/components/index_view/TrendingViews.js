import React from "react";
import hiv from "./img/hiv.webp";
import covid from "./img/covid.webp";
import justice3 from "./img/justice3.webp";
import women from "./img/women.webp";
import Col from "react-bootstrap/Col";
import Media from 'react-bootstrap/Media'
import Container from "react-bootstrap/Container";

const data =[
  {
    "id":1,
    "src":hiv,
    "paragraph":"The Covid-19 pandamic has ensured decline in the economy.Creating awareness on the youth about importance of responsibility."
  },
  {
    "id":2,
    "src":covid,
    "paragraph":"The Covid-19 pandamic has ensured decline in the economy.Creating awareness on the youth about importance of responsibility."
  },
  {
    "id":3,
    "src":justice3,
    "paragraph":"The Covid-19 pandamic has ensured decline in the economy.Creating awareness on the youth about importance of responsibility.",
  },
  {
    "id":4,
    "src":women,
    "paragraph":"The Covid-19 pandamic has ensured decline in the economy.Creating awareness on the youth about importance of responsibility.",
  },
]

export default function TrendingViews() {
  return (
    <Container fluid className=" mt-5 mb-5">
      <h1>Trending</h1>
      <Col md={10} className="divCenter">
      <hr />

      <ul className="list-unstyled">
        {data.map(item=>(
                  <Media key={item.id} as="li" >
                  <img
                        width={84}
                        className="mr-3"
                        src={item.src}
                        alt="Generic placeholder"
        
                   />
                   <Media.Body>
                     <p>{item.paragraph}</p>
                   </Media.Body>
        
                </Media>

        ))}
      </ul>

      </Col>


    </Container>

  );
}
