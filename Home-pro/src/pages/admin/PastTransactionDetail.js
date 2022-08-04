import React from 'react';
import styled from 'styled-components';
import { Container, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
const PastTransactionDetail = () => {
	return (
<main>
      <Container>
        <br></br>
        <center>
          <h3>Past Transaction Detail </h3>
        </center>
        <br></br>
        <Form>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Job ID">
                <Form.Control
                  type="text"
                  placeholder="Job ID"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Service Name"
              >
                <Form.Control
                  type="email"
                  placeholder="Service Name"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Duration">
                <Form.Control
                  type="text"
                  placeholder="Duration"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="First Two Hour Charge">
                <Form.Control
                  type="text"
                  placeholder="First Two Hour Charge"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Additional Per Hour">
                <Form.Control
                  type="text"
                  placeholder="Additional Per Hour"
				  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Total Charge">
                <Form.Control
                  type="text"
                  placeholder="Total Charge"
                />
              </FloatingLabel>
            </Col>
          </Row>
         
          <br></br>
          <center>
            <Row>
              <Col>
                <Button
                  type="submit"
                  variant="warning"
                  style={{ color: "black", width: "50%" }}
                >
                  Save Changes
                </Button>
              </Col>
              <Col>
                <Link to="/pasttransaction">
                  <Button
                    variant="light"
                    style={{ color: "black", width: "50%" }}
                  >
                    Cancel
                  </Button>
                </Link>
              </Col>
            </Row>
          </center>
         
        </Form>
      </Container>
    </main>
  );
};
export default PastTransactionDetail;
