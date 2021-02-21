import React from "react";
import Carousel from "react-bootstrap/Carousel";
import child from './child.jpg'
import child3 from './child3.jpg'
import jpc from './jpc.jpg'
import meeting1 from './meeting1.jpg'

export default function Header0() {
  return (
    <div style={{zIndex:"-1"}}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={jpc}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={meeting1}
            alt="Second slide"
            style={{opacity:0.7}}

          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={child}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
