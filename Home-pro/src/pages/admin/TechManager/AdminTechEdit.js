import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { Link, useHistory } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader.js";

const AdminTechEdit = ({ user }) => {
  let history = useHistory();

  const [modalShow, setModalShow] = React.useState(false);
  const [bookingData, setBookingData] = React.useState(null);

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

    setBookingData({
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
      const response = await fetch("", {
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
          service: "Plumbing",
          start_time: bookingData.start_time,
          description: bookingData.description,
        }),
      });
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
            Service Time: {bookingData.start_time} <br></br>
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
      <AdminHeader title="Edit Technician Information" />

      <Container style={{ width: "40%" }}>
        <br></br>
        <center>
          <h3>Technician Information</h3>
        </center>
        <br></br>
        <Form onSubmit={submitHandler}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="First Name">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  required
                  defaultValue="Joe"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  required
                  defaultValue="blow"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Technician Email"
              >
                <Form.Control
                  type="email"
                  placeholder="Technician Email"
                  required
                  defaultValue="tech@gmail.com"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  required
                  defaultValue="1234567890"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Service Type">
                <Form.Select aria-label="Floating label select example">
                  <option value="plumber">Plumber</option>
                  <option value="painter">Painter</option>
                  <option value="heating">Heating</option>
                  <option value="handyman">Handyman</option>
                  <option value="electrician">Electrician</option>
                  <option value="appliance">Appliance</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>

          <br></br>
          <center>
            <Button
              type="submit"
              variant="warning"
              style={{ color: "black" }}
              //onClick={() => setModalShow(true)}
            >
              Save Changes
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

export default AdminTechEdit;
