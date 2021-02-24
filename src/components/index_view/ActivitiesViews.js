import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import prison2 from './img/prison2.jpg'
import meeting5 from './img/meeting5.jpg'
import Container from 'react-bootstrap/esm/Container'

export default function ActivitiesViews() {
    return (
        <Container className="mt-5 mb-5">
          <h1 style={{ textAlign: "center", color:"#00284d" }}>Recent Activities</h1>

          <hr />
          <p className="mb-4 mt-2">Every work that we do is backed with the theme of our mission statement. Our thematic concern and how much we are budgeting.
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
        </Container>
    )
}
