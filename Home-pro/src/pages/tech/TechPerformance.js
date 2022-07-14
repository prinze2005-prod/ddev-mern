import React from "react";
import Container from "react-bootstrap/Container";
import TechHeader from "../../components/TechHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function TechPerformance() {
  return (
    <main>
      <TechHeader title="Performance Data" />
      <Container>
        <br></br>
        <h2>Rating</h2>
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
            <tr>
              <td>1772336</td>
              <td>Mar 20, 2022</td>
              <td>4.5</td>
            </tr>
            <tr>
              <td>1228335</td>
              <td>Jan 14, 2022</td>
              <td>4.2</td>
            </tr>
            <tr>
              <td>1344339</td>
              <td>Dec 22, 2021</td>
              <td>4.0</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <h2>Personal Revenue</h2>
        <br></br>
        <h6>Pending Payments</h6>
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
        <h6>Collected Payments</h6>
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
        <br></br>
      </Container>
    </main>
  );
}

export default TechPerformance;
