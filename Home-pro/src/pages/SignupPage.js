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

function SignupPage() {
  return (
    <main>
      <PageHero title="Register" />
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
