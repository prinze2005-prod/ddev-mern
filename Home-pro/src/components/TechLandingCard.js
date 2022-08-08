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
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function TechLandingCard() {
  return (
    <CardContainer>
    <div className="container">
      <br />
      <center>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <NavLink
              to="/TechPerformance"
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
                    <center>Get Performance Data</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
          <Col>
            <NavLink
              to="/TechTaskInProgress"
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
                    <center>Tasks in Progress</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>{" "}
          <Col>
            <NavLink
              to="/techProfile"
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
          </Col>{" "}
          <Col>
            <NavLink
              to="/CompletedTask"
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
                    <center>Completed Task</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>{" "}
          <Col>
            <NavLink
              to="/PendingTasks"
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
                    <center>Pending Tasks</center>
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>{" "}
          <Col>
            <NavLink
              to="/ContactAdmin"
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
                    <center>Contact Admin</center>
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
export default TechLandingCard;
