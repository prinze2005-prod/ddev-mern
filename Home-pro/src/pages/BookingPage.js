import React from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function BookingPage() {
  return (
    <main>
      <header style={{ backgroundColor: "orange" }}>
        {" "}
        <br />{" "}
        <center>
          <h2>Book a Service</h2>
        </center>
        <br />
      </header>
      <Container>
        <br></br>
        <h6>* Required Field</h6>
           
        <Form>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>* Enter the address where service is needed</Form.Label>
            <Form.Control type="text" placeholder="123 Sait Way NW T1T1T1" />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="serviceName">
            <Form.Label>* What service do you require?</Form.Label>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                --Select a service--
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Plumbing</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Electrician</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Painter</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Heating and Cooling</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Handyman Services</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Appliances Repair</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group className="mb-3" controlId="serviceDate">
            <Form.Label>* Select prefferred service Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="serviceDate">
            <Form.Label>* Select prefferred service Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inquiry">
            <Form.Label>Brief description of the problem</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button variant="primary" style={{ color: "black" }}>
          Submit
        </Button>{" "}
        <br/> <br/>
      </Container>
    </main>
  );
}

export default BookingPage;
