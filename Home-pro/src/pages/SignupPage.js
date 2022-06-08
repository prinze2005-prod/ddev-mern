import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";

function SignupPage() {
  return (
    <main style={{ backgroundColor: "#EFEEED" }}>
      <header style={{ backgroundColor: "#ffb347" }}>
        {" "}
        <br />{" "}
        <center>
          <h2>Welcome</h2>
        </center>
        <br />
      </header>
      <Container>
        <br></br>
        <br></br>
        <center>
          <MDBCard style={{ maxWidth: "30rem" }}>
            <MDBCardBody>
              <MDBCardTitle>Register</MDBCardTitle>
              <MDBCardText>
                <center>
                  <form>
                    <br></br>
                    <MDBRow className="mb-4">
                      <MDBCol>
                        <MDBInput id="form6Example1" label="First name" />
                      </MDBCol>
                      <MDBCol>
                        <MDBInput id="form6Example2" label="Last name" />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      id="form6Example4"
                      label="Address"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      type="email"
                      id="form6Example5"
                      label="Email"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      type="tel"
                      id="form6Example6"
                      label="Phone"
                    />
                    <MDBRow className="mb-4">
                      <MDBCol>
                        <MDBBtn
                          className="mb-4"
                          color="warning"
                          type="submit"
                          block
                          style={{ color: "black" }}
                        >
                          Sign up
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol>
                        <Link to="/">
                          {" "}
                          <MDBBtn className="mb-4" color="light" block>
                            Cancel
                          </MDBBtn>
                        </Link>
                      </MDBCol>
                    </MDBRow>
                  </form>
                </center>
              </MDBCardText>
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
