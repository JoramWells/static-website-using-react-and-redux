import React from 'react'
import Container from 'react-bootstrap/Container'
import hiv from './hiv.jpg'
import covid from './covid.png'
import justice3 from './justice3.jpg'
import women from './women.jpg'


export default function DonateView() {
    return (
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

        <div className="col-sm-10 mt-5 mb-5 mr-auto mx-auto">
        <h2 style={{ textAlign: "center", color:"#00284d" }}>Trending</h2>
        <div className="section " >
        <hr />
        <p>The Covid-19 pandamic has ensured decline in the economy.Creating awareness on the youth about importance of responsibility.
          <br />
          Access to justice and gender equality has been one among the very many problems facing our community.
        </p>
        <div className="row mt-4">
          <div className="col-sm-3">
          <img  src={hiv} alt="HIV image" style={{width:"200px"}} />

          </div>
          <div className="col-sm-3">
          <img  src={covid} alt="Covid image" style={{width:"200px"}} />
          </div>
          <div className="col-sm-3">
          <img  src={justice3} alt="Justice image" style={{width:"200px"}}/>

          </div>
          <div className="col-sm-3">
          <img  src={women} alt="Justice image" style={{width:"200px"}}/>

          </div>

        </div>
        </div>
        </div>


      </Container>
    )
}
