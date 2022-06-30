import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import { PageHero } from "../components";
import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function LoginPage() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  let message = "";

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
      message = await response.json();
      console.log(message);
    } catch (err) {
      console.log(err);
    }
  }

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
                      ref={passwordInputRef}
                    />
                  </FloatingLabel>
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
                    <span>{message}</span>
                  </MDBRow>
                  <Button
                    variant="warning"
                    type="submit"
                    onClick={submitHandler}
                    style={{ color: "black" }}
                  >
                    Submit
                  </Button>
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
