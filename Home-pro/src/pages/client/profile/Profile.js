import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { PageHero } from "../../../components";
import { useHistory } from "react-router-dom";

const Profile = ({ user }) => {
  let history = useHistory();

  const [modalShow, setModalShow] = React.useState(false);
  const [profileData, setProfileData] = React.useState(null);

  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const pnumberInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = fnameInputRef.current.value;
    const enteredLastName = lnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredpNumber = pnumberInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    setProfileData({
      fname: enteredFirstName,
      lname: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      pnumber: enteredpNumber,
      street: enteredStreet,
      postalCode: enteredPostalCode,
    });

    setModalShow(true);
    return;

    //will not throw error if server sends back error code (404, etc...)
    try {
      const response = await fetch("http://localhost:5000/api/customer/editprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: profileData.fname,
          lname: profileData.lname,
          email: profileData.email,
          password: profileData.password,
          pnumber: profileData.pnumber,
          street: profileData.street,
          postalCode: profileData.postalCode,
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

  const handlerSubmit = async () => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: profileData.fname,
          lname: profileData.lname,
          email: profileData.email,
          password: profileData.password,
          pnumber: profileData.pnumber,
          street: profileData.street,
          postalCode: profileData.postalCode,
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
            Confirm your changes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>You Information</h5>
            First Name: {profileData.fname} <br></br>
            Last Name: {profileData.lname} <br></br>
            Email: {profileData.email} <br></br>
            Password: {profileData.password} <br></br>
            Phone Number: {profileData.pnumber} <br></br>
            Street: {profileData.street} <br></br>
            Postal Code: {profileData.postalCode}
            <br />
            <br></br>
            <h5 style={{ color: "darkred" }}>
              Please ensure above information is correct
            </h5>
            <h5 style={{ color: "darkred" }}>
              Click "Submit" to save your changes
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
      <PageHero title="Profile" />

      <Container>
        <br></br>
        <center>
          <h3>Manage your profile</h3>
        </center>
        <h6>* All Fields are required</h6>
        <Form onSubmit={submitHandler}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="First Name">
                <Form.Control
                  type="text"
                  placeholder="First Name"
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
                  required
                  ref={lnameInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Password">
                <Form.Control type="password" placeholder="Password" required />
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
          {profileData && (
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

export default Profile;
