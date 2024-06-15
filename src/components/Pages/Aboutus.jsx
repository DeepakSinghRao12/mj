import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image src="path/to/your/image.jpg" rounded fluid />
        </Col>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque leo ut arcu dictum, euismod volutpat nisi cursus.
            Suspendisse potenti. Proin feugiat ex nec arcu tristique, at
            interdum nulla fermentum.
          </p>
          <h2>Our Team</h2>
          <p>
            Donec imperdiet risus vel lacus interdum, nec posuere arcu tempor.
            Fusce at libero ut nulla elementum scelerisque nec a lacus.
          </p>
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
