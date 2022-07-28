import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { Link, useHistory } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader.js";

const AdminJobEdit = ({ user }) => {
  let history = useHistory();

  const [modalShow, setModalShow] = useState(false);
  const [techData, setTechData] = useState({
    first_name: "John",
    last_name: "Doe",
    tech_email: "unassigned",
    cust_email: "john.doe@gmail.com",
    status: "unassigned",
    description: "my pumpling system has some problem and doesn't work!!!!!!!",
    address: {
      street: "SAIT ",
      city: "Calgary",
      province: "Alberta",
      postalCode: "T1T 1T1",
    },
    phoneNumber: "1112223333",
    service_id: 2,
    __v: 0,
    job_id: 45,
    start_time: "2022-07-2910:33",
  });

  const emailInputRef = useRef();

  const dateInputRef = useRef();
  const timeInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;

    setTechData({
      ...techData,
      tech_email: enteredEmail,
      start_time: enteredDate + enteredTime,
    });

    setModalShow(true);
    return;
  }

  // const handlerSubmit = async () => {
  //   try {
  //     const response = await fetch("", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         tech_email: techData.email,
  //         start_time: techData.start_time,
  //       }),
  //     });
  //     const responseData = await response.json();
  //     console.log(responseData);

  // if (!!responseData) {
  //   history.push("/adminJobEdit");
  // }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  function handlerSubmit() {
    console.log(techData);
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Proceed Your Booking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>New Job Information</h5>
            Technician Email: {techData.tech_email} <br></br>
            Service Date:{techData.start_time.slice(0, 10)}
            <br></br>
            Service Time: {techData.start_time.slice(10)}
            <br />
            <br></br>
            <h5 style={{ color: "darkred" }}>
              Please ensure above information is correct
            </h5>
            <h5 style={{ color: "darkred" }}>
              Click "Continue" to update job information
            </h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            style={{ color: "black" }}
            onClick={props.onHide}
          >
            Cancel
          </Button>
          <Button
            variant="warning"
            style={{ color: "black" }}
            onClick={handlerSubmit}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <main>
      <AdminHeader title="Edit a Job" />

      <Container>
        <br></br>
        <center>
          <h3>Edit Job Information</h3>
        </center>
        <br></br>
        <Form onSubmit={submitHandler}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Job ID">
                <Form.Control
                  type="text"
                  placeholder="Job ID"
                  required
                  value={techData.job_id}
                  readOnly
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Technician Email"
              >
                <Form.Control
                  type="text"
                  placeholder="Technician Email"
                  required
                  defaultValue={techData.tech_email}
                  ref={emailInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="First Name">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={techData.first_name}
                  readOnly
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={techData.last_name}
                  readOnly
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Customer Email"
              >
                <Form.Control
                  type="text"
                  placeholder="Customer Email"
                  value={techData.cust_email}
                  readOnly
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  value={techData.phoneNumber}
                  readOnly
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Street">
                <Form.Control
                  type="text"
                  placeholder="Street"
                  value={techData.address.street}
                  readOnly
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Postal Code">
                <Form.Control
                  type="text"
                  placeholder="Postal Code"
                  value={techData.address.postalCode}
                  readOnly
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="City">
                <Form.Control type="text" value="Calgary" readOnly />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Province">
                <Form.Control type="text" value="Alberta" readOnly />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>

          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Date">
                <Form.Control
                  type="date"
                  placeholder="Date"
                  required
                  defaultValue={techData.start_time.slice(0, 10)}
                  ref={dateInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Time">
                <Form.Control
                  type="time"
                  placeholder="Time"
                  required
                  defaultValue={techData.start_time.slice(10)}
                  ref={timeInputRef}
                />
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
              value={techData.description}
              readOnly
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <br></br>
          <center>
            <Row>
              <Col>
                <Button
                  type="submit"
                  variant="warning"
                  style={{ color: "black", width: "30%" }}
                  //onClick={() => setModalShow(true)}
                >
                  Save Changes
                </Button>
              </Col>
              <Col>
                <Link to="/admin">
                  <Button
                    variant="light"
                    style={{ color: "black", width: "30%" }}
                  >
                    Cancel
                  </Button>
                </Link>
              </Col>
            </Row>
          </center>
          {techData && (
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          )}
          <br></br>
          <br></br>
        </Form>
      </Container>
    </main>
  );
};

export default AdminJobEdit;
