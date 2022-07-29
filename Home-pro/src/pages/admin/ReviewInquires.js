import React from "react";
import Container from "react-bootstrap/Container";
import TechHeader from "../../components/TechHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function ReviewInquires() {
  return (
    <main>
      <TechHeader title="Review Inquires" />
      <Container style={{ minHeight: "500px" }}>
        <br></br>
        <h2>List Of Inquires</h2>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Service #</th>
              <th>Inquiry</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>joeblow@gmail.com</td>
              <td>154655</td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
            </tr>
            <tr>
              <td>joeblow@gmail.com</td>
              <td>14545545454554</td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</td>
            </tr>
          </tbody>
        </Table>
        <center>
          <Link
            to="/admin"
            className="btn"
            style={{ backgroundColor: "#ffb347" }}
          >
            back to Admin page
          </Link>
        </center>
      </Container>
    </main>
  );
}

export default ReviewInquires;
