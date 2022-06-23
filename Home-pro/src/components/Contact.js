import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
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
            <Form>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">*Email address</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Service Request Number"
                />
                <label htmlFor="floatingPasswordCustom">
                  *Service Request Number
                </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Technician Name"
                />
                <label htmlFor="floatingPasswordCustom">*Technician Name</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="date"
                  placeholder="Date"
                />
                <label htmlFor="floatingPasswordCustom">*Date</label>
              </Form.Floating>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="*Inquiry"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
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
