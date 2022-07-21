import React from "react";
import Container from "react-bootstrap/Container";
import TechHeader from "../../components/TechHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function TechTaskInProgress() {
  return (
    <main>
      <TechHeader title="Tasks in Progress" />
      <Container style={{ minHeight: "500px" }}>
        <br></br>
        <h2>Tasks in Progress</h2>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1772336</td>
              <td>Mar 20, 2022</td>
              <td>John Doe</td>
              <td>4031112222</td>
            </tr>
            <tr>
              <td>1228335</td>
              <td>Jan 14, 2022</td>
              <td>Joe Doe</td>
              <td>4031112222</td>
            </tr>
            <tr>
              <td>1344339</td>
              <td>Dec 22, 2021</td>
              <td>Joe Blow</td>
              <td>4031112222</td>
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
      </Container>
    </main>
  );
}

export default TechTaskInProgress;
