import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
var message = "";

function LoginPage() {
  let history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  let responseData;
  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    //will not throw error if server sends back error code (404, etc...)
    try {
      const response = await fetch("http://localhost:5000/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });
      responseData = await response.json();
      console.log(responseData);
      message = responseData.message;

      if (message == "success" || message == "Account in use") {
        //do redirect to home page
        history.push("/");
      } else {
        //have alert or error message
        history.push("/login");
      }
    } catch (err) {
      console.log(err);
      message = "Failed";

      LoginPage();
    }
    console.log(message);
  }

  // console.log(!!responseData);
  //somewhere here is to implement redirection

  return (
    <main>
      <Container>
        <br></br>
        <br></br>
        <center>
          <MDBCard style={{ maxWidth: "30rem" }}>
            <MDBCardBody>
              <MDBCardTitle>Welcome Back</MDBCardTitle>
              <br></br>

              <center>
                <form>
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
                  <Button
                    variant="warning"
                    type="submit"
                    onClick={submitHandler}
                    style={{ color: "black", width: "100%" }}
                  >
                    Submit
                  </Button>{" "}
                  <br></br>
                  <br></br>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <Link to="#">Forgot password?</Link>
                    </MDBCol>
                    <MDBCol>
                      <p>
                        Not a member? <Link to="/signup">Register</Link>
                      </p>
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

export default LoginPage;
