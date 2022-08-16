import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { Link, useHistory } from "react-router-dom";

// author: Gao Liu, Saksham Ohri, Scott Normore, Eze Adiele
// This page is used to add a technician's information

const AdminAddTech = ({ user }) => {
  let history = useHistory();

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const passwordInputRef = useRef();
  const [serviceNameList, setServiceNameList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [techData, setTechData] = useState(null);
  const [showHint, setShowHint] = React.useState(false);
  const onClick = () => setShowHint(true);

  const [checkedState, setCheckedState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  //   event handler for checkbox
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  function submitHandler(event) {
    event.preventDefault();
    // create a new array for services
    let updatedServices = [];
    for (var i = 0; i < 6; i++) {
      if (checkedState[i]) {
        updatedServices.push(i + 1);
      }
    }

    let updatedServicesNameList = [];
    if (updatedServices.length !== 0) {
      for (i = 0; i < updatedServices.length; i++) {
        switch (updatedServices[i]) {
          case 1:
            updatedServicesNameList.push("Electrical");
            break;
          case 2:
            updatedServicesNameList.push("Plumbing");
            break;
          case 3:
            updatedServicesNameList.push("Heating & Cooling");
            break;
          case 4:
            updatedServicesNameList.push("Painting");
            break;
          case 5:
            updatedServicesNameList.push("Handyman");
            break;
          case 6:
            updatedServicesNameList.push("Appliance Service");
        }
      }
    }
    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enterPassword = passwordInputRef.current.value;

    setTechData({
      name: enteredName,
      tech_email: enteredEmail,
      phoneNumber: enteredPhoneNumber,
      services: updatedServices,
      password: enterPassword,
      address: {
        city: "Calgary",
        province: "Alberta",
        postalCode: enteredPostalCode,
        street: enteredStreet,
      },
    });
    // setTechData({ ...techData, services: updatedServices });

    setServiceNameList(updatedServicesNameList);

    // return;
    errorHander();
  }

  function errorHander() {
    let isEmpty = true;
    for (var checkedBox in checkedState) {
      if (checkedState[checkedBox]) {
        isEmpty = false;
        setModalShow(true);
        return;
      }
    }

    if (isEmpty) {
      alert("at least one checkbox is needed!!!");
      return;
      //stop the rendering
    }
  }

  //   const handlerSubmit = async () => {
  //     try {
  //       const response = await fetch("", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({}),
  //       });
  //       const responseData = await response.json();
  //       console.log(responseData);
  //       if (!!responseData) {
  //         history.push("/BookingConfirmPage");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  async function handlerSubmit() {
    let isEmpty = true;
    for (var checkedBox in checkedState) {
      if (checkedState[checkedBox]) {
        isEmpty = false;
        console.log("good!");
        break;
        //write to database now!
      }
    }
    console.log("I was ran!");
    if (isEmpty) {
      alert("at least one checkbox is needed!!!");
      setModalShow(false);
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/adminaddtech",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: techData.tech_email,
            name: techData.name,
            password: techData.password,
            street: techData.address.street,
            postalCode: techData.address.postalCode,
            number: techData.phoneNumber,
            services: techData.services,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (!!responseData) {
        history.push("/Admin");
      }
    } catch (err) {
      console.log(err);
    }
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
            Proceed Your Updating
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>New Technician Information</h5>
            <div>
              <b>Technician Name:</b> {techData.name} <br></br>
              <b>Technician Email:</b> {techData.tech_email} <br></br>
              <b>Phone Number:</b> {techData.phoneNumber} <br></br>
              <b>Password:</b> {techData.password}
              <br></br>
              <b>Service Types:</b>
              <br></br>
              <ul>
                {serviceNameList.map((service) => (
                  <li key={service}>&#9830;{service}</li>
                ))}
              </ul>
              <b>Street:</b>
              {techData.address.street} <br></br>
              <b>City:</b> Calgary <br></br>
              <b>Province:</b> Alberta<br></br>
              <b>Postal Code:</b> {techData.address.postalCode}
            </div>
            <br />
            <br></br>
            <h5 style={{ color: "darkred" }}>
              Please ensure above information is correct
            </h5>
            <h5 style={{ color: "darkred" }}>
              Click "Continue" to update technician information
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

  function Hint() {
    return (
      <div>
        <br></br>
        <p style={{ color: "red", textAlign: "left" }}>
          Password must contain:<br></br> at least 1 UpperCase <br></br>at least
          1 LowerCase <br></br>at least 1 Number/SpecialChar<br></br>
          length: 8-24
        </p>
      </div>
    );
  }

  return (
    <main>
      <Container>
        <br></br>
        <center>
          <h3>New Technician Information</h3>
        </center>
        <br></br>
        <Form onSubmit={submitHandler}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Name">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  required
                  ref={nameInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Technician Email"
              >
                <Form.Control
                  type="email"
                  placeholder="Technician Email"
                  required
                  ref={emailInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onClick={onClick}
                  pattern="(?=^.{8,24}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required
                  ref={passwordInputRef}
                />
              </FloatingLabel>
              {showHint ? <Hint /> : null}
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Street">
                <Form.Control
                  type="text"
                  placeholder="Street"
                  required
                  ref={streetInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="City">
                <Form.Control
                  type="text"
                  placeholder="City"
                  value="Calgary"
                  disabled
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Province">
                <Form.Control
                  type="text"
                  placeholder="Province"
                  value="Alberta"
                  disabled
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Postal Code(A1A1A1)"
              >
                <Form.Control
                  type="text"
                  placeholder="Postal Code(A1A1A1)"
                  pattern="[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]"
                  required
                  ref={postalCodeInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Phone Number(0001112222)"
              >
                <Form.Control
                  type="text"
                  placeholder="Phone Number(0001112222)"
                  pattern="\d{10}"
                  required
                  ref={phoneNumberInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>

          <Row className="g-2">
            <Col md>
              <span>Service Type:</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="1"
                id="electrical"
                onChange={() => handleOnChange(0)}
              />
              &nbsp;<label htmlFor="electrical">Electrical</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="2"
                id="plumbing"
                onChange={() => handleOnChange(1)}
              />
              &nbsp;<label htmlFor="plumbing">Plumbing</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="3"
                id="heating"
                onChange={() => handleOnChange(2)}
              />
              &nbsp;<label htmlFor="heating">Heating & Cooling</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="4"
                onChange={() => handleOnChange(3)}
                id="painting"
              />
              &nbsp;<label htmlFor="painting">Painting</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="5"
                onChange={() => handleOnChange(4)}
                id="handyman"
              />
              &nbsp;<label htmlFor="handyman">Handyman</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="6"
                onChange={() => handleOnChange(5)}
                id="appliance"
              />
              &nbsp;<label htmlFor="appliance">Appliances</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </Col>
          </Row>
          <br></br>

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
                <Link to="/admin">
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

export default AdminAddTech;
