import React from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { PageHero } from "../components";

function BookingPage() {
  return (
    <main>
      <PageHero title="Booking" />
      <Container>
        <br></br>
        <Form style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <h6>* Required Field</h6>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>* Enter your full name</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>* Enter your email address</Form.Label>
            <Form.Control type="text" required placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>* Enter your phone number</Form.Label>
            <Form.Control type="number" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>* Enter the address where service is needed</Form.Label>
            <Form.Control type="text" required />
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
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>
          <Button variant="warning" style={{ color: "black" }}>
            Submit
          </Button>{" "}
        </Form>
        <br /> <br />
      </Container>
    </main>
  );
}

export default BookingPage;
