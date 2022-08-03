import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const { REACT_APP_API_ENDPOINT } = process.env;

export default function PendingTask() {
  let history = useHistory();

  let HP_refreshToken;
  let HP_accessToken;

  const [jobData, setJobData] = useState([
    {
      job_id: 12345,
      cust_email: "customer@gmail.com",
      phoneNumber: 1234567890,
      start_time: "2022-07-2923:07",
      address: [{ street: "11 Sait way NW", postalCode: "A1A 1A1" }],
    },
    {
      job_idd: 12345,
      cust_email: "customer@gmail.com",
      phoneNumber: 1234567890,
      start_time: "2022-07-2923:07",
      address: [{ street: "11 Sait way NW", postalCode: "A1A 1A1" }],
    },
  ]);

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
    fetch(REACT_APP_API_ENDPOINT +"5000/api/tech/getunjobs", {
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
      .then((data) => setJobData(data));
  }, []);

  const handleAccept = async (event, param) => {
    console.log(param);
    await fetch(REACT_APP_API_ENDPOINT +"5000/api/tech/assignjob", {
      method: "POST",
      credentials: "include", //TWO THINGS: Cookies and this header <============
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobID: param,
        refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
        accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
      }),
    });
    history.push("/tech");
    history.push("/pendingtasks");
  };

  return (
    <main>
      <Container style={{ minHeight: "500px" }}>
        <br></br>
        <center>
          <h2>Pending Tasks</h2>
        </center>

        <br></br>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Customer Email</th>
              <th>Phone Number</th>
              <th>Start Time</th>
              <th>Street</th>
              <th>Postal Code</th>
              <th>Accept Job</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((obj) => (
              <tr>
                <td>{obj.job_id} </td>
                <td>{obj.cust_email} </td>
                <td>{obj.phoneNumber} </td>
                <td>{obj.start_time} </td>
                <td>{obj.address.street} </td>
                <td>{obj.address.postalCode} </td>
                <td>
                  {" "}
                  <Button
                    variant="warning"
                    style={{ color: "black" }}
                    onClick={(event) => handleAccept(event, obj.job_id)}
                  >
                    Accept
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <center>
          <Link
            to="/Tech"
            className="btn"
            style={{ backgroundColor: "#ffb347" }}
          >
            back to Tech page
          </Link>
          <br></br>
          <br></br>
        </center>
      </Container>
    </main>
  );
}
