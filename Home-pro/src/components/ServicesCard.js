import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.jpg";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.jpg";
import icon6 from "../assets/icon6.jpg";
export default function ServicesCard() {
  return (
    <div className="container">
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
                  style={{ width: "38%", height: "100%" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Plumbing</center>
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
                  style={{ width: "45%", height: "100%" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Electrician</center>
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
                  style={{ width: "40%", height: "100%" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Painter</center>
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
                  style={{ width: "60%", height: "100%" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Heating and Cooling</center>
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
                  style={{ width: "55%", height: "100%" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Handyman Services</center>
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
                  style={{ width: "35%", height: "100%" }}
                />
              </center>
              <Card.Body>
                <Card.Title>
                  <center>Appliances Repair</center>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </center>
    </div>
  );
}
