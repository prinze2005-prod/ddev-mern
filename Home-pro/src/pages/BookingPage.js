import React from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { PageHero } from "../components";
import { useRef } from "react";

function BookingPage() {
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const emailInputRef = useRef();
  const ptypeInputRef = useRef();
  const pnumberInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const provinceInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const descriptionInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = fnameInputRef.current.value;
    const enteredLastName = lnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredpType = ptypeInputRef.current.value;
    const enteredpNumber = pnumberInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredProvince = provinceInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const bookingData = {
      fname: enteredFirstName,
      lname: enteredLastName,
      email: enteredEmail,
      ptype: enteredpType,
      pnumber: enteredpNumber,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
      province: enteredProvince,
      start_time: enteredDate + enteredTime,
      description: enteredDescription,
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
          ptype: bookingData.ptype,
          pnumber: bookingData.pnumber,
          street: bookingData.street,
          postalCode: bookingData.postalCode,
          city: bookingData.city,
          province: bookingData.province,
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

  return (
    <main>
      <PageHero title="Booking" />
      <Container>
        <br></br>
        <h6>* All Fields are required</h6>
        <Form>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="First Name">
                <Form.Control type="text" placeholder="First Name" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                <Form.Control type="text" placeholder="Last Name" />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Email Address"
              >
                <Form.Control type="email" placeholder="Email Address" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control type="text" placeholder="Phone Number" />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Street">
                <Form.Control type="email" placeholder="Street" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Postal Code">
                <Form.Control type="text" placeholder="Postal Code" />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="City">
                <Form.Control type="email" placeholder="City" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Province">
                <Form.Select aria-label="Floating label select example">
                  <option>--Select--</option>
                  <option value="AB">AB</option>
                  <option value="BC">BC</option>
                  <option value="MB">MB</option>
                  <option value="NB">NB</option>
                  <option value="NL">NL</option>
                  <option value="NS">NS</option>
                  <option value="NT">NT</option>
                  <option value="NU">NU</option>
                  <option value="ON">ON</option>
                  <option value="PE">PE</option>
                  <option value="QC">QC</option>
                  <option value="SK">SK</option>
                  <option value="YT">YT</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <center>
            <Dropdown>
              <Dropdown.Toggle
                variant="warning"
                style={{ color: "black", width: "100%" }}
                id="dropdown-basic"
              >
                --Select a service--
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "100%" }}>
                <Dropdown.Item href="#/action-1">Plumbing</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Electrician</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Painter</Dropdown.Item>
                <Dropdown.Item href="#/action-4">
                  Heating and Cooling
                </Dropdown.Item>
                <Dropdown.Item href="#/action-5">
                  Handyman Services
                </Dropdown.Item>
                <Dropdown.Item href="#/action-6">
                  Appliances Repair
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </center>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Date">
                <Form.Control type="date" placeholder="Date" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Time">
                <Form.Control type="time" placeholder="Time" />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Brief Description"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <br></br>
          <center>
            <Button variant="warning" style={{ color: "black" }}>
              Submit
            </Button>{" "}
          </center>
          <br></br>
          <br></br>
        </Form>
      </Container>
    </main>
  );
}

export default BookingPage;
