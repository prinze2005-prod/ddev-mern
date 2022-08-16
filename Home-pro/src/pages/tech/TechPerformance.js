/**
 * @author Saksham Ohri, Gao Liu, Eze Adiele
 * @description This page is for displaying technicians performance data and payment info
*/import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;

function TechPerformance() {
  let HP_refreshToken;
  let HP_accessToken;

  const [performanceData, setPerformanceData] = useState([
    {
      job_id: 142,
      date: "2022-07-29 23:07",
      rating: 5,
    },
    {
      job_id: 144,
      date: "2022-06-16 23:07",
      rating: 5,
    },
    {
      job_id: 156,
      date: "2022-05-22 23:07",
      rating: 5,
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
    fetch("", {
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
      .then((data) => setPerformanceData(data));
  }, []);

  return (
    <main>
      <Wrapper className="section">
        <Container>
          <br></br>
          <center>
            <h2>Rating</h2>
          </center>

          <br></br>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Date</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((obj) => (
                <tr>
                  <td>{obj.job_id} </td>
                  <td>{obj.date} </td>
                  <td>{obj.rating} </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br></br>
          <center>
            <h2>Personal Revenue</h2>
          </center>

          <br></br>
          <center>
            <h6>Pending Payments</h6>
          </center>

          <br></br>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1772336</td>
                <td>Mar 20, 2022</td>
                <td>$250</td>
              </tr>
            </tbody>
          </Table>
          <br></br>
          <center>
            <h6>Collected Payments</h6>
          </center>

          <br></br>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1228335</td>
                <td>Jan 14, 2022</td>
                <td>$180</td>
              </tr>
              <tr>
                <td>1344339</td>
                <td>Dec 22, 2021</td>
                <td>$525</td>
              </tr>
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
          <br></br>
        </Container>
      </Wrapper>
    </main>
  );
}
const Wrapper = styled.section`
  background: var(--clr-grey-10);
  transition: red;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  tr:hover {
    background-color: var(--clr-primary-5);
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default TechPerformance;
