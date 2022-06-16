import React from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
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
      description: enteredDescription
    };
    //will not throw error if server sends back error code (404, etc...)
    try{
      const response = await fetch('http://localhost:5000/admin/createjob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fname: bookingData.fname,
          lname: bookingData.lname,
          email: bookingData.email,
          ptype: bookingData.ptype,
          pnumber: bookingData.pnumber,
          street: bookingData.street,
          postalCode:bookingData.postalCode,
          city: bookingData.city,
          province: bookingData.province,
          start_time: bookingData.start_time,
          description: bookingData.description

         
        })
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch(err){
      console.log(err);
    }
  }

  return (
    <main>
      <PageHero title="Booking" />
      <Container>
        <br></br>
        <Form style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <h6>* Required Field</h6>
          <Form.Group className="mb-3" controlId="fname">
            <Form.Label>* Enter your first name</Form.Label>
            <Form.Control type="text" required ref={fnameInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="lname">
            <Form.Label>* Enter your last name</Form.Label>
            <Form.Control type="text" required ref={lnameInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>* Enter your email address</Form.Label>
            <Form.Control type="text" required placeholder="name@example.com" ref={emailInputRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ptype">
            <Form.Label>* Enter your phone Type</Form.Label>
            <Form.Control type="text" required ref={ptypeInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="pnumber">
            <Form.Label>* Enter your phone number</Form.Label>
            <Form.Control type="number" required ref={pnumberInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="street">
            <Form.Label>* Enter the street address where service is needed</Form.Label>
            <Form.Control type="text" required ref={streetInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>* Enter your Postal Code</Form.Label>
            <Form.Control type="text" required ref={postalCodeInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>* Enter your city</Form.Label>
            <Form.Control type="text" required ref={cityInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="province">
            <Form.Label>* Enter your province</Form.Label>
            <Form.Control type="text" required ref={provinceInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="serviceName">
            <Form.Label>* What service do you require?</Form.Label>

            <Dropdown>
              <Dropdown.Toggle
                variant="warning"
                style={{ color: "black" }}
                id="dropdown-basic"
              >
                --Select a service--
              </Dropdown.Toggle>

              <Dropdown.Menu>
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
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>* Select prefferred service Date</Form.Label>
            <Form.Control type="date" ref={dateInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="time">
            <Form.Label>* Select prefferred service Time</Form.Label>
            <Form.Control type="time" ref={timeInputRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Brief description of the problem</Form.Label>
            <Form.Control as="textarea" rows={3} required ref={descriptionInputRef} />
          </Form.Group>
          <Button variant="warning" style={{ color: "black" }} onClick={submitHandler}>
            Submit
          </Button>{" "}
        </Form>
        <br /> <br />
      </Container>
    </main>
  );
}

export default BookingPage;
