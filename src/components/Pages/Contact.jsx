import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>Contact Us</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Get in Touch</h2>
          <p>If you have any questions, feel free to reach out to us by filling out the form below.</p>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
