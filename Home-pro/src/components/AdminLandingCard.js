import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import icon1 from "../assets/admin1.png";
import icon2 from "../assets/admin2.png";
import icon3 from "../assets/techicon3.png";
import icon4 from "../assets/admin3.png";
import icon5 from "../assets/admin4.png";
import icon6 from "../assets/admin5.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function AdminLandingCard() {
  return (
    <CardContainer>
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
            <NavLink
              to="adminClientAdd"
              style={(isActive) => ({
                color: isActive ? "#ffb347" : "black",
              })}
            >
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
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "20px",
                    }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>
                    <center>Add a Client</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
          <Col>
            <NavLink
              to="/adminTechAdd"
              style={(isActive) => ({
                color: isActive ? "#ffb347" : "black",
              })}
            >
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
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "20px",
                    }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>
                    <center>Manage Technicians</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>{" "}
          <Col>
            <NavLink
              to="adminJob"
              style={(isActive) => ({
                color: isActive ? "#ffb347" : "black",
              })}
            >
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
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "20px",
                    }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>
                    <center>Job Manager</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>{" "}
          <Col>
            <NavLink
              to="/pasttransaction"
              style={(isActive) => ({
                color: isActive ? "#ffb347" : "black",
              })}
            >
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
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "20px",
                    }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>
                    <center>Past Transaction</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>{" "}
          <Col>
            <NavLink
              to="/reviewInquiries"
              style={(isActive) => ({
                color: isActive ? "#ffb347" : "black",
              })}
            >
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
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "20px",
                    }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>
                    <center>Review Inquiries</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>{" "}
          <Col>
            <NavLink
              to="/adminProfile"
              style={(isActive) => ({
                color: isActive ? "#ffb347" : "black",
              })}
            >
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
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "20px",
                    }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>
                    <center>Profile</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
        </Row>
      </center>
    </div>
    </CardContainer>
  );
}
const CardContainer = styled.div`
.card:hover{
	transform: scale(1.2);
    transition-duration: 0.5s;
	box-shadow: 10px 10px 5px grey;
}
`;

export default AdminLandingCard;
