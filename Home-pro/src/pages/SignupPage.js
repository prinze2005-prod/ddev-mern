import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SignupPage() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const pnumberInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();

  /* need work on this after backend finish for sign up


  async function submitHandler(event) {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current.value;
    const enteredFirstName = fnameInputRef.current.value;
    const enteredLastName = lnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredpNumber = pnumberInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
   

    const bookingData = {
      fname: enteredFirstName,
      lname: enteredLastName,
      email: enteredEmail,
      pnumber: enteredpNumber,
      password: enteredPassword,
      street: enteredStreet,
      postalCode: enteredPostalCode,
    };
    //will not throw error if server sends back error code (404, etc...)
    try {
      const response = await fetch("http://localhost:5000/admin/createjob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: bookingData.fname,
          lname: bookingData.lname,
          email: bookingData.email,
          ptype: "Home",
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
    } catch (err) {
      console.log(err);
    }
  }

  */

  return (
    <main>
      <Container>
        <br></br>
        <br></br>
        <center>
          <MDBCard style={{ maxWidth: "30rem" }}>
            <MDBCardBody>
              <MDBCardTitle>Welcome</MDBCardTitle>

              <center>
                <form>
                  <br></br>
                  <Row className="g-2">
                    <Col md>
                      <FloatingLabel
                        controlId="floatingFnameInputGrid"
                        label="First Name"
                      >
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          required
                          ref={fnameInputRef}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel
                        controlId="floatingLnameInputGrid"
                        label="Last Name"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          required
                          ref={lnameInputRef}
                        />
                      </FloatingLabel>{" "}
                    </Col>
                  </Row>
                  <br></br>
                  <FloatingLabel
                    controlId="floatingEmailInputGrid"
                    label="Email"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      ref={emailInputRef}
                    />
                  </FloatingLabel>
                  <br></br>
                  <FloatingLabel
                    controlId="floatingPasswordInputGrid"
                    label="Password"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      ref={passwordInputRef}
                    />
                  </FloatingLabel>
                  <br></br>
                  <FloatingLabel
                    controlId="floatingAddressInputGrid"
                    label="Street Address"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Street Address"
                      required
                      ref={streetInputRef}
                    />
                  </FloatingLabel>
                  <br></br>
                  <Row className="g-2">
                    <Col md>
                      <FloatingLabel
                        controlId="floatingPostalInputGrid"
                        label="Postal Code"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Postal Code"
                          required
                          ref={postalCodeInputRef}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel
                        controlId="floatingPhoneInputGrid"
                        label="Phone Number"
                      >
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
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <Button
                        variant="warning"
                        type="submit"
                        // onClick={submitHandler}
                        style={{ color: "black", width: "100%" }}
                      >
                        Sign up
                      </Button>
                    </MDBCol>
                    <MDBCol>
                      <Link to="/">
                        {" "}
                        <Button
                          variant="light"
                          style={{ color: "black", width: "100%" }}
                        >
                          Cancel
                        </Button>
                      </Link>
                    </MDBCol>
                  </MDBRow>
                </form>
              </center>
            </MDBCardBody>
          </MDBCard>
        </center>
        <br></br>
        <br></br>
      </Container>
    </main>
  );
}

export default SignupPage;
