import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { Link, useHistory } from "react-router-dom";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
const { REACT_APP_API_ENDPOINT } = process.env;

const TechProfile = ({ user }) => {
  let history = useHistory();

  const [modalShow, setModalShow] = useState(false);
  const [profileData, setProfileData] = useState([
    "Name",
    "",
    "Phonenumber",
    "Street",
    "PostalCode",
  ]);

  let HP_refreshToken;
  let HP_accessToken;
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
    }
  } catch (err) {
    console.log(err);
  }
  useEffect(() => {
    fetch(REACT_APP_API_ENDPOINT +"/api/tech/getTechProfile", {
      method: "POST",
      credentials: "include", //TWO THINGS: Cookies and this header <============
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
        accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        setProfileData([
          data.name,
          "",
          data.phoneNumber,
          data.address.street,
          data.address.postalCode,
        ])
      );
  }, []);

  const fnameInputRef = useRef();
  const passwordInputRef = useRef();
  const pnumberInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredName = fnameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredpNumber = pnumberInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    setProfileData([
      enteredName,
      enteredPassword,
      enteredpNumber,
      enteredStreet,
      enteredPostalCode,
    ]);

    setModalShow(true);
    return;
  }

  const handlerSubmit = async () => {
    try {
      var cookies = document.cookie.split(";");
      let HP_refreshToken;
      let HP_accessToken;
      for (var i = 0; i < cookies.length; i++) {
        var cook = cookies[i].split("=");
        if (cook[0].includes("HP_refreshToken")) {
          HP_refreshToken = cook[1];
        }
        if (cook[0].includes("HP_accessToken")) {
          HP_accessToken = cook[1];
        }
      }
      const response = await fetch(
        REACT_APP_API_ENDPOINT +"/api/tech/editprofile",
        {
          method: "PATCH",
          credentials: "include", //TWO THINGS: Cookies and this header <============
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: profileData[0],
            password: profileData[1],
            pnumber: profileData[2],
            street: profileData[3],
            postalCode: profileData[4],
            refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
            accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData) {
        console.log("updated!");
        console.log(profileData);
        history.push("/tech");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleNameChange = (events) => {
    let text = events.target.value;
    setProfileData([
      text,
      profileData[1],
      profileData[2],
      profileData[3],
      profileData[4],
    ]);
  };
  const handlePNumberChange = (events) => {
    let text = events.target.value;
    setProfileData([
      profileData[0],
      profileData[1],
      text,
      profileData[3],
      profileData[4],
    ]);
  };
  const handleStreetChange = (events) => {
    let text = events.target.value;
    setProfileData([
      profileData[0],
      profileData[1],
      profileData[2],
      text,
      profileData[4],
    ]);
  };
  const handlePCodeChange = (events) => {
    let text = events.target.value;
    setProfileData([
      profileData[0],
      profileData[1],
      profileData[2],
      profileData[3],
      text,
    ]);
  };

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
            Confirm your changes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>You Information</h5>
            Name: {profileData[0]} <br></br>
            Password: ******** <br></br>
            Phone Number: {profileData[2]} <br></br>
            Street: {profileData[3]} <br></br>
            Postal Code: {profileData[4]}
            <br />
            <br></br>
            <h5 style={{ color: "darkred" }}>
              Please ensure above information is correct
            </h5>
            <h5 style={{ color: "darkred" }}>
              Click "Continue" to save your changes
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
          <h3>Manage your profile</h3>
        </center>
        <h6>* All Fields are required</h6>
        <Form onSubmit={submitHandler}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="First Name">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  required
                  value={profileData[0]}
                  onChange={handleNameChange}
                  ref={fnameInputRef}
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
                  required
                  ref={passwordInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  value={profileData[2]}
                  onChange={handlePNumberChange}
                  required
                  ref={pnumberInputRef}
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
                  value={profileData[3]}
                  onChange={handleStreetChange}
                  required
                  ref={streetInputRef}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Postal Code">
                <Form.Control
                  type="text"
                  placeholder="Postal Code"
                  value={profileData[4]}
                  onChange={handlePCodeChange}
                  required
                  ref={postalCodeInputRef}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>
          <center>
            <MDBRow className="mb-4">
              <MDBCol>
                <Button
                  variant="warning"
                  type="submit"
                  style={{ color: "black", width: "50%" }}
                >
                  Save Changes
                </Button>
              </MDBCol>
              <MDBCol>
                <Link to="/tech">
                  {" "}
                  <Button
                    variant="light"
                    style={{ color: "black", width: "50%" }}
                  >
                    Cancel
                  </Button>
                </Link>
              </MDBCol>
            </MDBRow>
          </center>
          {profileData && (
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

export default TechProfile;
