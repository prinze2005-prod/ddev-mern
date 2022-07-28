import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { Link, useHistory } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader.js";

const AdminAddClient = ({ user }) => {
  let history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const [modalShow, setModalShow] = useState(false);
  const [clientData, setClientData] = useState(null);
  const [showHint, setShowHint] = React.useState(false);
  const onClick = () => setShowHint(true);

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredFirstName = fnameInputRef.current.value;
    const enteredLastName = lnameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;

    setClientData({
      fname: enteredFirstName,
      lname: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      phoneNumber: enteredPhoneNumber,
      street: enteredStreet,
      postalCode: enteredPostalCode,
    });
    setModalShow(true);
    return;
  }

  const handlerSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/general/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName: clientData.fname,
          lName: clientData.lname,
          email: clientData.email,
          number: clientData.phoneNumber,
          street: clientData.street,
          postalCode: clientData.postalCode,
          password: clientData.password,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
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
            Proceed Your Adding a Client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>New Client Information</h5>
            <div>
              <b>First Name:</b> {clientData.fname} <br></br>
              <b>Last Name:</b> {clientData.lname} <br></br>
              <b>Email:</b> {clientData.email} <br></br>
              <b>Phone Number:</b> {clientData.number} <br></br>
              <b>Street:</b>
              {clientData.street} <br></br>
              <b>City:</b> Calgary <br></br>
              <b>Province:</b> Alberta<br></br>
              <b>Postal Code:</b> {clientData.postalCode}
            </div>
            <br />
            <br></br>
            <h5 style={{ color: "darkred" }}>
              Please ensure above information is correct
            </h5>
            <h5 style={{ color: "darkred" }}>
              Click "Continue" to add a client
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
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function Hint() {
    return (
      <div>
        <br></br>
        <p style={{ color: "red", textAlign: "left" }}>
          Password must contain:<br></br> at least 1 UpperCase <br></br>at least
          1 LowerCase <br></br>at least 1 Number/SpecialChar<br></br>
          length: 8-24
        </p>
      </div>
    );
  }

  return (
    <main>
      <AdminHeader title="Add Client" />

      <Container>
        <br></br>
        <center>
          <h3>New Client Information</h3>
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
              <FloatingLabel controlId="floatingInputGrid" label="Email">
                <Form.Control
                  type="text"
                  placeholder="Email;"
                  required
                  ref={emailInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingPasswordInputGrid"
                label="Password"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  pattern="(?=^.{8,24}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required
                  ref={passwordInputRef}
                  onClick={onClick}
                />
              </FloatingLabel>

              {showHint ? <Hint /> : null}
            </Col>
          </Row>
          <br />
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
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="City">
                <Form.Control
                  type="text"
                  placeholder="City"
                  value="Calgary"
                  disabled
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Province">
                <Form.Control
                  type="text"
                  placeholder="Province"
                  value="Alberta"
                  disabled
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Postal Code(A1A1A1)"
              >
                <Form.Control
                  type="text"
                  placeholder="Postal Code(A1A1A1)"
                  pattern="[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]"
                  required
                  ref={postalCodeInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Phone Number(0001112222)"
              >
                <Form.Control
                  type="text"
                  placeholder="Phone Number(0001112222)"
                  pattern="\d{10}"
                  required
                  ref={phoneNumberInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <br></br>
          <center>
            <Row>
              <Col>
                <Button
                  type="submit"
                  variant="warning"
                  style={{ color: "black", width: "50%" }}
                >
                  Add a Client
                </Button>
              </Col>
              <Col>
                <Link to="/admin">
                  <Button
                    variant="light"
                    style={{ color: "black", width: "50%" }}
                  >
                    Cancel
                  </Button>
                </Link>
              </Col>
            </Row>
          </center>
          {clientData && (
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

export default AdminAddClient;
