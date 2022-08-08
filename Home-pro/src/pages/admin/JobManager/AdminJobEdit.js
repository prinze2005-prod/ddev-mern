import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { Link, useHistory } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;

const AdminJobEdit = ({ user }) => {
  let history = useHistory();

  const [modalShow, setModalShow] = useState(false);
  const [jobData, setJobData] = useState([
    "21321",
    "john.doe@gmail.com",
    "john",
    "doe",
    "jane.doe@gmail.com",
    "1111222233333",
    "SAIT ",
    "T1T 1T1",
    "2022-07-2910:33",
    "pizza time!"
  ]);


  let HP_refreshToken;
  let HP_accessToken;
  let jobId;
  try {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cook = cookies[i].split("=");
      if (cook[0].includes("HP_refreshToken")) {
        HP_refreshToken = cook[1];
      }
      if (cook[0].includes("HP_accessToken")) {
        HP_accessToken = cook[1];
      }
      if(cook[0].includes("jobID")){
        jobId= cook[1];
      }
    }
  } catch (err) {
    console.log(err);
  }

  useEffect(() => {
    fetch(REACT_APP_API_ENDPOINT +"/api/admin/getjobbyid", {
      method: "POST",
      credentials: "include", //TWO THINGS: Cookies and this header <============
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobID: jobId,
        refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
        accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        setJobData([
          data.job_id,
          data.tech_email,
          data.first_name,
          data.last_name,
          data.cust_email,
          data.phoneNumber,
          data.address.street,
          data.address.postalCode,
          data.start_time,
          data.description
        ])
      );
  }, []);

  const emailInputRef = useRef();

  const dateInputRef = useRef();
  const timeInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;

    setJobData([
      jobData[0],
      enteredEmail,
      jobData[2],
      jobData[3],
      jobData[4],
      jobData[5],
      jobData[6],
      jobData[7],
      enteredDate + enteredTime,
      jobData[9]
    ]);

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


  const handleEmailChange = (events) => {
    let text = events.target.value;
    setJobData([
      jobData[0],
      text,
      jobData[2],
      jobData[3],
      jobData[4],
      jobData[5],
      jobData[6],
      jobData[7],
      jobData[8],
      jobData[9]
    ]);

  };
  const handleDateChange = (events) => {
    let text = events.target.value;
    setJobData([
      jobData[0],
      jobData[1],
      jobData[2],
      jobData[3],
      jobData[4],
      jobData[5],
      jobData[6],
      jobData[7],
      text+jobData[8].slice(10),
      jobData[9]
    ]);
  };
  const handleTimeChange = (events) => {
    let text = events.target.value;
    setJobData([
      jobData[0],
      jobData[1],
      jobData[2],
      jobData[3],
      jobData[4],
      jobData[5],
      jobData[6],
      jobData[7],
      jobData[8].slice(0, 10)+text,
      jobData[9]
    ]);
  };
  async function handlerSubmit() {
    const response = await fetch(REACT_APP_API_ENDPOINT +"/api/admin/adminassignjob", {
      method: "PATCH",
      credentials: "include", //TWO THINGS: Cookies and this header <============
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobID: jobData[0],
        email: jobData[1],
        start_time: jobData[8],
        refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
        accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
      }), 
    });
    const responseData = response.json();
    console.log(responseData);
    history.push("/adminjob");
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
            Proceed Your Changes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>New Job Information</h5>
            Technician Email: {jobData[1]} <br></br>
            Service Date:{jobData[8].slice(0, 10)}
            <br></br>
            Service Time: {jobData[8].slice(10)}
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
                  value={jobData[0]}
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
                  value={jobData[1]}
                  onChange={handleEmailChange}
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
                  value={jobData[2]}
                  readOnly
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={jobData[3]}
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
                  value={jobData[4]}
                  readOnly
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  value={jobData[5]}
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
                  value={jobData[6]}
                  readOnly
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Postal Code">
                <Form.Control
                  type="text"
                  placeholder="Postal Code"
                  value={jobData[7]}
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
                  value={jobData[8].slice(0, 10)}
                  onChange={handleDateChange}
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
                  value={jobData[8].slice(10)}
                  onChange={handleTimeChange}
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
              value={jobData[9]}
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
          {jobData && (
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
