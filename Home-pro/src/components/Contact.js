import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import picture from "../assets/hero-bcg.jpeg";
import { PageHero } from "../components";
import { useRef } from "react";

function Contact(props) {
  const emailInputRef = useRef();
  const seriviceNumberInputRef = useRef();
  const technicianInputRef = useRef();
  const dateInputRef = useRef();
  const inquiryInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredSeriviceNumber = seriviceNumberInputRef.current.value;
    const enteredTechnician = technicianInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredInquiry = inquiryInputRef.current.value;

    const inquiryData = {
      email: enteredEmail,
      seriviceNumber: enteredSeriviceNumber,
      technician: enteredTechnician,
      date: enteredDate,
      inquiry: enteredInquiry,
    };

    props.onAddInquiry(inquiryData);
  }

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
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>* Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                  ref={emailInputRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="seriviceNumber">
                <Form.Label>* Service Request Number</Form.Label>
                <Form.Control
                  type="text"
                  required
                  ref={seriviceNumberInputRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="technician">
                <Form.Label>Technician Name</Form.Label>
                <Form.Control type="text" ref={technicianInputRef} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="serviceDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" ref={dateInputRef} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="inquiry">
                <Form.Label>* Inquiry</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  required
                  ref={inquiryInputRef}
                />
              </Form.Group>
              <Button variant="warning" style={{ color: "black" }}>
                Submit
              </Button>{" "}
            </Form>
          </Col>
          <Col className="text-center">
            <br></br>
            <img
              className="img-fluid shadow-2-strong rounded"
              src={picture}
              alt="customerService"
            />
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

export default Contact;
