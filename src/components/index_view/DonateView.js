import React from 'react'
import Container from 'react-bootstrap/Container'
import download from './img/download.png'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import giphy from './img/giphy.gif'
import Form from 'react-bootstrap/Form'


export default function DonateView() {
    return (
        <Container fluid>
        <div className="mt-4 mb-5">
          
          <h1 style={{ textAlign: "center", color:"#00284d" }}>Donate</h1>
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
            <Row>
              <Col>
              <img src={download} alt="download image" />
              </Col>
              <Col xs={4}>
              <img  className="mt-5" src={giphy} alt="image giphy" style={{width:"200px", transform:"rotate(-180deg)"}} />
              </Col>
              <Col>
              <Card>
                  <Card.Body>
                    <Form>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control placeholder="jorammanoah1@gmail.com" type="email" />
                      <Form.Text className="text-muted" >Will never share your email with someone eles</Form.Text>
                      <Button variant="primary" >SUBMIT</Button>
                    </Form>
                  </Card.Body>
                </Card>

              </Col>
            </Row>




          </div>
        </div>
        {/* <div className="d-flex flex-row justify-content-between   flex-wrap">
          <div className="contribution">+2k Individuals</div>
          <div className="contribution">Government</div>
          <div className="contribution">Membership</div>
          <div className="contribution">Community</div>
        </div> */}




      </Container>
    )
}
