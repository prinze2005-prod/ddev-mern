import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import { PageHero } from "../components";

function LoginPage() {
  return (
    <main>
      <PageHero title="Login" />
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
                  <MDBInput
                    className="mb-4"
                    type="email"
                    id="form2Example1"
                    label="Email address"
                  />
                  <MDBInput
                    className="mb-4"
                    type="password"
                    id="form2Example2"
                    label="Password"
                  />

                  <MDBBtn
                    type="submit"
                    className="mb-4"
                    color="warning"
                    block
                    style={{ color: "black" }}
                  >
                    Sign in
                  </MDBBtn>
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
