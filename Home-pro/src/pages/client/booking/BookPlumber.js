import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { PageHero } from "../../../components";
import { useHistory } from "react-router-dom";

const BookPlumber = () => {
  let history = useHistory();

  let HP_userFName = "";
  let HP_userLName = "";
  let HP_userEmail = "";
  try {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cook = cookies[i].split("=");
      if (cook[0].includes("HP_userFName")) {
        HP_userFName = cook[1];
      }
      if (cook[0].includes("HP_userLName")) {
        HP_userLName = cook[1];
      }
      if (cook[0].includes("HP_userEmail")) {
        HP_userEmail = cook[1];
        HP_userEmail = HP_userEmail.replace("%40", "@");
      }
    }
  } catch (err) {
    console.log(err);
  }

  const [modalShow, setModalShow] = useState(false);
  const [bookingData, setBookdingData] = useState(null);

  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const emailInputRef = useRef();
  const pnumberInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const descriptionInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = fnameInputRef.current.value;
    const enteredLastName = lnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredpNumber = pnumberInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    setBookdingData({
      fname: enteredFirstName,
      lname: enteredLastName,
      email: enteredEmail,
      pnumber: enteredpNumber,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      start_time: enteredDate + enteredTime,
      description: enteredDescription,
    });

    setModalShow(true);
    return;
  }

  const handlerSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/general/createjob",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname: bookingData.fname,
            lname: bookingData.lname,
            email: bookingData.email,
            pnumber: bookingData.pnumber,
            street: bookingData.street,
            postalCode: bookingData.postalCode,
            city: "Calgary",
            province: "Alberta",
            service: 2,
            start_time: bookingData.start_time,
            description: bookingData.description,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (!!responseData) {
        history.push("/BookingConfirmPage");
      }
    } catch (err) {
      console.log(err);
    }
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Proceed Your Booking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>You Information</h5>
            First Name: {bookingData.fname} <br></br>
            Last Name: {bookingData.lname} <br></br>
            Email: {bookingData.email} <br></br>
            Phone Number: {bookingData.pnumber} <br></br>
            Street: {bookingData.street} <br></br>
            Postal Code: {bookingData.postalCode} <br></br>
            City: Calgary <br></br>
            Province: Alberta <br></br>
            Service: Plumbing <br></br>
            Service Date:{bookingData.start_time.slice(0, 10)}
            <br></br>
            Service Time: {bookingData.start_time.slice(10)}
            <br />
            Description: {bookingData.description}
            <br />
            <br></br>
            <h5 style={{ color: "darkred" }}>
              Please ensure above information is correct
            </h5>
            <h5 style={{ color: "darkred" }}>
              Click "Submit" to proceed your booking
            </h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            style={{ color: "black" }}
            onClick={props.onHide}
          >
            Cancel
          </Button>
          <Button
            variant="warning"
            style={{ color: "black" }}
            onClick={handlerSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <main>
      <Container>
        <br></br>
        <center>
          <h3>Book a Plumber</h3>
        </center>
        <h6>* All Fields are required</h6>
        <Form onSubmit={submitHandler}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="First Name">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  defaultValue={HP_userFName}
                  required
                  ref={fnameInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  defaultValue={HP_userLName}
                  required
                  ref={lnameInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Email Address"
              >
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  defaultValue={HP_userEmail}
                  required
                  ref={emailInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  required
                  ref={pnumberInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Street">
                <Form.Control
                  type="text"
                  placeholder="Street"
                  required
                  ref={streetInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Postal Code">
                <Form.Control
                  type="text"
                  placeholder="Postal Code"
                  required
                  ref={postalCodeInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="City">
                <Form.Control type="text" value="Calgary" readOnly />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Province">
                <Form.Control type="text" value="Alberta" readOnly />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>

          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Date">
                <Form.Control
                  type="date"
                  placeholder="Date"
                  required
                  ref={dateInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Time">
                <Form.Control
                  type="time"
                  placeholder="Time"
                  required
                  ref={timeInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Brief Description"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              required
              style={{ height: "100px" }}
              ref={descriptionInputRef}
            />
          </FloatingLabel>
          <br></br>
          <center>
            <Button
              type="submit"
              variant="warning"
              style={{ color: "black" }}
              //onClick={() => setModalShow(true)}
            >
              Submit
            </Button>
          </center>
          {bookingData && (
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          )}
          <br></br>
          <br></br>
        </Form>
      </Container>
    </main>
  );
};

export default BookPlumber;
