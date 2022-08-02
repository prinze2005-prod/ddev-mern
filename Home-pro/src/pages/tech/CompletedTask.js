import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const CompletedTask = () => {
  let HP_refreshToken;
  let HP_accessToken;

  const [jobData, setJobData] = useState([
    {
      jobId: 12345,
      cust_email: "customer@gmail.com",
      phoneNumber: 1234567890,
      start_time: "2022-07-2923:07",
      address: [{ street: "11 Sait way NW", postalCode: "A1A 1A1" }],
    },
    {
      jobId: 12345,
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
    fetch("http://localhost:5000/api/tech/getCompletedJobs", {
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

  return (
    <main>
      <Container style={{ minHeight: "500px" }}>
        <br></br>
        <center>
          <h2>Completed Tasks</h2>
        </center>

        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Customer Email</th>
              <th>Phone Number</th>
              <th>Start Time</th>
              <th>Street</th>
              <th>Postal Code</th>
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
        </center>
      </Container>
    </main>
  );
};

const Wrapper = styled.main`
  background: var(--clr-grey-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 5rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  .btn {
    background: var(--clr-primary-5);
  }

  tr:hover {
    background-color: var(--clr-primary-5);
    width: 100%;
  }

  table {
    width: 800px;
    height: 200px;
    background: var(--clr-white);
    padding: 10px;
    border-radius: 15px;
  }

  th {
    border-bottom: 1px solid black;
  }

  td {
    text-align: center;
  }
  .App {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TaskTitle = styled.div`
  background: var(--clr-primary-5);
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default CompletedTask;
