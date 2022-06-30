import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { PageHero } from "../components";
import { useRef } from "react";
import Select from 'react-select';


function BookingPage() {
  const dropdownOptions = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "The Color Blue",
      value: "blue",
    },
  ];
  const data = [
    {
      value: 1,
      label: "AB"
    },
    {
      value: 2,
      label: "BC"
    },
    {
      value: 3,
      label: "MB"
    },
    {
      value: 4,
      label: "NB"
    },
    {
      value: 5,
      label: "NL"
    },
    {
      value: 6,
      label: "NS"
    },
    {
      value: 7,
      label: "NS"
    },
    {
      value: 8,
      label: "NT"
    },
    {
      value: 9,
      label: "NU"
    },
    {
      value: 10,
      label: "ON"
    },
    {
      value: 11,
      label: "PE"
    },
    {
      value: 12,
      label: "QC"
    },
    {
      value: 13,
      label: "SK"
    },
    {
      value: 14,
      label: "YT"
    }
  ];
  const data2 = [
    {
      value: 1,
      label: "Electrical"
    },
    {
      value: 2,
      label: "Plumbing"
    },
    {
      value: 3,
      label: "Heating & Cooling"
    },
    {
      value: 4,
      label: "Painting"
    },
    {
      value: 5,
      label: "Handyman"
    },
    {
      value: 6,
      label: "Appliance Service"
    }
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  // handle onChange event of the dropdown
 
  const handleChange = e => {
    setSelectedOption(e);
   // const provinceInputRef = selectedOption.value;
  }

  const handleChangeService = e => {
    setSelectedService(e);
    serviceInputRef = e;
    //const serviceInputRef = selectedService.value;
  }
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const emailInputRef = useRef();

  const pnumberInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const provinceInputRef = useRef();
  const serviceInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const descriptionInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = fnameInputRef.current.value;
    const enteredLastName = lnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredpNumber = pnumberInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredProvince = provinceInputRef.current.value;
    const enteredService = serviceInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const bookingData = {
      fname: enteredFirstName,
      lname: enteredLastName,
      email: enteredEmail,

      pnumber: enteredpNumber,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
      province: enteredProvince,
      service: enteredService,
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
          ptype: "Home",
          pnumber: bookingData.pnumber,
          street: bookingData.street,
          postalCode: bookingData.postalCode,
          city: bookingData.city,
          province: bookingData.province,
          service: bookingData.service,
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
                <Form.Control type="text" placeholder="First Name" ref={fnameInputRef} />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                <Form.Control type="text" placeholder="Last Name" ref={lnameInputRef}/>
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
                <Form.Control type="email" placeholder="Email Address" ref={emailInputRef} />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control type="text" placeholder="Phone Number" ref={pnumberInputRef}/>
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Street">
                <Form.Control type="email" placeholder="Street" ref={streetInputRef}  />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Postal Code">
                <Form.Control type="text" placeholder="Postal Code" ref={postalCodeInputRef} />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="City">
                <Form.Control type="text" placeholder="City" ref={cityInputRef}/>
              </FloatingLabel>
            </Col>
            <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Province">
                <Form.Control type="text" placeholder="Province" ref={provinceInputRef}/>
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <center>
          <FloatingLabel controlId="floatingInputGrid" label="Service">
                <Form.Control type="text" ref={serviceInputRef}/>
              </FloatingLabel>
          </center>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Date">
                <Form.Control type="date" placeholder="Date" ref={dateInputRef}/>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Time">
                <Form.Control type="time" placeholder="Time" ref={timeInputRef} />
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
              ref={descriptionInputRef}
            />
          </FloatingLabel>
          <br></br>
          <center>
            <Button variant="warning" style={{ color: "black" }} onClick={submitHandler}>
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
