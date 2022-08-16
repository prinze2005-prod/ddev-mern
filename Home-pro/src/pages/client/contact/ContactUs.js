/**
 * @author Saksham Ohri, Gao Liu, Eze Adiele
 * @description This page is for sending an inquiry to admin, it contains a form
*/
import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import picture from "../../../assets/hero-bcg.jpeg";
import { PageHero } from "../../../components";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Alerts from "../../../components/Alerts";
const { REACT_APP_API_ENDPOINT } = process.env;

function ContactUs({ user, handleLogout }) {
  let history = useHistory();
  const [alertShow, setAlertShow] = React.useState(false);

  const emailInputRef = useRef();
  const serviceNumberInputRef = useRef();
  const inquiryInputRef = useRef();

  async function submitHandler(event) {
   
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    const enteredServiceNumber = serviceNumberInputRef.current.value;
    const enteredInquiry = inquiryInputRef.current.value;
    if(enteredEmail != null || enteredInquiry != null){
      setAlertShow(true);
    }
    //  if(enteredServiceNumber === null){
    //    enteredServiceNumber = 'No service number'
    //  }

    const inquiryData = {
      email: enteredEmail,
      serviceNumber: enteredServiceNumber,
      inquiry: enteredInquiry,
    };
    console.log(inquiryData);
    try {
      const response = await fetch(
        REACT_APP_API_ENDPOINT +"/api/general/createinquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: inquiryData.email,
            serviceNumber: inquiryData.serviceNumber,
            description: inquiryData.inquiry,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (!!responseData) {
        history.push("/contactus");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
      {alertShow && (
        <Alerts message="Your inquiry has been sent successfully !" />
      )}
      <Container>
        <br></br>
        <Row>
          <Col>
            <Form style={{ marginTop: "100px" }}>
              <h6>* All Fields are required except Service Request Number</h6>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  ref={emailInputRef}
                  required
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
                  required
                />
              </FloatingLabel>
              <Button
                variant="warning"
                style={{ color: "black" }}
                onClick={submitHandler}
              >
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
