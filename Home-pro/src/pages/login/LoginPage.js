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
import Alert from "react-bootstrap/Alert";
var message = "";

function LoginPage({ setUser }) {
  let history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  let responseData;

  const [result, setResult] = React.useState(null);

  async function submitHandler(event) {
    event.preventDefault();
    setResult(null);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    //will not throw error if server sends back error code (404, etc...)
    try {
      //setUser(null);

      const response = await fetch("http://localhost:5000/api/general/login", {
        method: "POST",
        credentials: "include",
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
        const userData = { username: loginData.email };
        //localStorage.setItem('user', userData);
        setUser(userData);
        history.push("/");
      } else {
        //have alert or error message
        setResult(message);

        history.push("/login");
      }
    } catch (err) {
      console.log(err);
      message = "Failed";

      LoginPage();
    }
    console.log(message);
    if(message === 'Customer'){
      const userData = { username: loginData.email };
      setUser(userData);
      history.push("/");
    } else if(message === 'Technician'){
      history.push("/tech");
    } 

  }

  return (
    <main>
      <Container style={{ minHeight: "600px" }}>
        <br></br>
        <br></br>
        <center>
          <MDBCard style={{ maxWidth: "30rem" }}>
            <MDBCardBody>
              <MDBCardTitle>Welcome Back</MDBCardTitle>
              <br></br>

              <center>
                <form onSubmit={submitHandler}>
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
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <Button
                        variant="warning"
                        type="submit"
                        style={{ color: "black", width: "100%" }}
                      >
                        Log In
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
                  {result && (
                    <div>
                      <br></br>
                      <Alert variant="danger">{result}</Alert>
                    </div>
                  )}

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
