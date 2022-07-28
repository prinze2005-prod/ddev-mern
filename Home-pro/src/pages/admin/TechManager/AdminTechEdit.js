import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import { Link, useHistory } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader.js";

const AdminTechEdit = ({ user }) => {
  let history = useHistory();

  const [modalShow, setModalShow] = useState(false);
  const [techData, setTechData] = useState({
    name: "Elbow River Plumbing",
    tech_email: "info@calgaryplumbing.com",
    phoneNumber: "4031516598",
    services: [2, 3, 5],
    address: {
      city: "Calgary",
      province: "Alberta",
      postalCode: "T2H0S9",
      street: "409 Forge Rd SE",
    },
  });

  const isElectrical = techData.services.includes(1);
  const isPlumbing = techData.services.includes(2);
  const isHeating = techData.services.includes(3);
  const isPainting = techData.services.includes(4);
  const isHandyman = techData.services.includes(5);
  const isAppliance = techData.services.includes(6);

  async function submitHandler(event) {
    event.preventDefault();

    // setTechData({
    //   fname: "Joe",
    //   lname: "Blow",
    //   tech_email: "tech@gmail.com",
    //   phoneNumber: "4031516598",
    //   services: [2, 3, 5],
    // });

    setModalShow(true);
    return;
  }

  const handlerSubmit = async () => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const responseData = await response.json();
      console.log(responseData);
      if (!!responseData) {
        history.push("/BookingConfirmPage");
      }
    } catch (err) {
      console.log(err);
    }
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
            Proceed Your Booking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>You Information</h5>

            <br />
            <br></br>
            <h5 style={{ color: "darkred" }}>
              Please ensure above information is correct
            </h5>
            <h5 style={{ color: "darkred" }}>
              Click "Submit" to proceed your booking
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
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <main>
      <AdminHeader title="Edit Technician" />

      <Container>
        <br></br>
        <center>
          <h3>Technician Information</h3>
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
                  defaultValue={techData?.name}
                  onChange={(e) =>
                    setTechData({ ...techData, name: e.target.value })
                  }
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
                  defaultValue={techData?.tech_email}
                  onChange={(e) =>
                    setTechData({ ...techData, tech_email: e.target.value })
                  }
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
                  required
                  defaultValue={techData?.address.street}
                  onChange={(e) =>
                    setTechData({ ...techData.address, street: e.target.value })
                  }
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
                  required
                  defaultValue={techData?.address.postalCode}
                  onChange={(e) =>
                    setTechData({
                      ...techData.address,
                      postalCode: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  required
                  defaultValue={techData?.phoneNumber}
                  onChange={(e) =>
                    setTechData({ ...techData, phoneNumber: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>
          <br></br>

          <Row className="g-2">
            <Col md>
              <span>Service Type:</span>&nbsp;&nbsp;&nbsp;&nbsp;
              {/* {serviceType.map((service) => (
                  
                <>
                  <input
                    type="checkbox"
                    id={service.serviceId}
                    label={service.serviceName}
                    key={service.serviceId}
                  />
                  &nbsp;
                  <label htmlFor={service.serviceName}>
                    {service.serviceName}
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </>
              ))} */}
              <input
                type="checkbox"
                value="1"
                defaultChecked={isElectrical}
                id="electrical"
              />
              &nbsp;<label htmlFor="electrical">Electrical</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="2"
                defaultChecked={isPlumbing}
                id="plumbing"
              />
              &nbsp;<label htmlFor="plumbing">Plumbing</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="2"
                defaultChecked={isHeating}
                id="heating"
              />
              &nbsp;<label htmlFor="heating">Heating & Cooling</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="3"
                defaultChecked={isPainting}
                id="painting"
              />
              &nbsp;<label htmlFor="painting">Painting</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="4"
                defaultChecked={isHandyman}
                id="handyman"
              />
              &nbsp;<label htmlFor="handyman">Handyman</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                value="2"
                defaultChecked={isAppliance}
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
                  style={{ color: "black", width: "100%" }}
                >
                  Save Changes
                </Button>
              </Col>
              <Col>
                <Link to="/admin">
                  <Button
                    variant="light"
                    style={{ color: "black", width: "100%" }}
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

export default AdminTechEdit;
