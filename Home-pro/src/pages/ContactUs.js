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
import { useHistory } from "react-router-dom";

function ContactUs() {
    let history = useHistory();

  const emailInputRef = useRef();
  const serviceNumberInputRef = useRef();
  const technicianInputRef = useRef();
  const dateInputRef = useRef();
  const inquiryInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredServiceNumber = serviceNumberInputRef.current.value;
    const enteredTechnician = technicianInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredInquiry = inquiryInputRef.current.value;

    const inquiryData = {
      email: enteredEmail,
      seriviceNumber: enteredServiceNumber,
      technician: enteredTechnician,
      date: enteredDate,
      inquiry: enteredInquiry,
    };
    try {
        const response = await fetch("http://localhost:5000/admin/createjob", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
       body: JSON.stringify({
          email: inquiryData.email,
          serviceNumber: inquiryData.serviceNumber,
          technician: inquiryData.technician,
          date: inquiryData.date,
          inquiry: inquiryData.inquiry,
          }),
        });
        const responseData = await response.json();
        console.log(responseData);
        if (!!responseData) {
            history.push("/");
          }
      } catch (err) {
        console.log(err);
      }
    
    
  }

  return (
    <main>
      <PageHero title="Contact Us" />
      <Container>
        <br></br>
        <Row>
          <Col>
            <h6>* All Fields are Required</h6>
            <Form>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  ref={emailInputRef}
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Service Request Number"
                  ref={serviceNumberInputRef}
                />
                <label htmlFor="floatingPasswordCustom">
                  Service Request Number
                </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="text"
                  placeholder="Technician Name"
                  ref={technicianInputRef}
                />
                <label htmlFor="floatingPasswordCustom">Technician Name</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="date"
                  placeholder="Date"
                  ref={dateInputRef}
                />
                <label htmlFor="floatingPasswordCustom">Date</label>
              </Form.Floating>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Inquiry"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  ref={inquiryInputRef}
                />
              </FloatingLabel>
              <Button variant="warning" style={{ color: "black" }} onClick={submitHandler}>
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

export default ContactUs;
