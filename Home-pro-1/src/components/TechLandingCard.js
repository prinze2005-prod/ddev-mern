import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import icon1 from "../assets/techicon1.png";
import icon2 from "../assets/techicon2.png";
import icon3 from "../assets/techicon3.png";
import icon4 from "../assets/techicon4.png";
import icon5 from "../assets/techicon5.png";
import icon6 from "../assets/techicon6.png";

function TechLandingCard() {
  return (
    <div className="container">
      <br />
      <Row>
        <center>
          <Card
            href=""
            style={{
              borderRadius: 20 + "px",
              width: "50%",
              height: "100%",
              padding: "20px",
              backgroundColor: "#ffb347",
            }}
          >
            <Card.Body>
              <Card.Title>
                <center>
                  <h3>2022 AT A GLANCE</h3>
                  <h5>
                    completed tasks: 24 <br />
                    average star: 4.5
                    <br />
                    revenue: $ 14,021
                  </h5>
                </center>
              </Card.Title>
            </Card.Body>
          </Card>
        </center>
      </Row>
      <br />
      <br />
      <center>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card
              href=""
              style={{
                borderRadius: 20 + "px",
                width: "80%",
                height: "100%",
              }}
            >
              <center>
                <Card.Img
                  variant="top"
                  src={icon1}
                  style={{ width: "100px", height: "100px", marginTop: "20px" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Get Performance Data</center>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                borderRadius: 20 + "px",
                width: "80%",
                height: "100%",
              }}
            >
              <center>
                <Card.Img
                  variant="top"
                  src={icon2}
                  style={{ width: "100px", height: "100px", marginTop: "20px" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Tasks in Progress</center>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card
              style={{
                borderRadius: 20 + "px",
                width: "80%",
                height: "100%",
              }}
            >
              <center>
                <Card.Img
                  variant="top"
                  src={icon3}
                  style={{ width: "100px", height: "100px", marginTop: "20px" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Look up Schedule</center>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card
              style={{
                borderRadius: 20 + "px",
                width: "80%",
                height: "100%",
              }}
            >
              <center>
                <Card.Img
                  variant="top"
                  src={icon4}
                  style={{ width: "100px", height: "100px", marginTop: "20px" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Completed Task</center>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card
              style={{
                borderRadius: 20 + "px",
                width: "80%",
                height: "100%",
              }}
            >
              <center>
                <Card.Img
                  variant="top"
                  src={icon5}
                  style={{ width: "100px", height: "100px", marginTop: "20px" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Pending Tasks</center>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card
              style={{
                borderRadius: 20 + "px",
                width: "80%",
                height: "100%",
              }}
            >
              <center>
                <Card.Img
                  variant="top"
                  src={icon6}
                  style={{ width: "100px", height: "100px", marginTop: "20px" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Contact Admin</center>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </center>
    </div>
  );
}

export default TechLandingCard;
