import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import picture from "../assets/hero-bcg.jpeg";
import { PageHero } from "../components";

function ContactPage() {
  return (
    <main>
      <PageHero title="Contact Us" />
      <Container>
        <br></br>
        <h4>
          Please provide us with your valuable feedback about previous or
          ongoing service.
        </h4>
        <br></br>
        <Row>
          <Col>
            <h6>* Required Field</h6>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>* Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="seriviceNumber">
                <Form.Label>* Service Request Number</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="technician">
                <Form.Label>Technician Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="serviceDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="inquiry">
                <Form.Label>* Inquiry</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button variant="primary" style={{color: 'black'}}>Submit</Button>{" "}
          </Col>
          <Col className="text-center">
            <br></br>
            <img className="img-fluid" src={picture} alt="customerService" />
            <br></br>
            <br></br>
            <p>Toll-free customer service: 1-800-123-4567</p>
            <p>Hours: Mon-Sat 8 AM - 8PM MDT</p>
            <p> Sun 11 AM - 7 PM MDT</p>
          </Col>
        </Row>
        <br></br>
      </Container>
    </main>
  );
}

export default ContactPage;
