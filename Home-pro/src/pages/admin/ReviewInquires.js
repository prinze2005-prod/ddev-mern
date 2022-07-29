import React from "react";
import Container from "react-bootstrap/Container";
import TechHeader from "../../components/TechHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function ReviewInquires() {
    const inquiryData =[
        {
           email: 'joeblow@gmail.com',
           serviceNumber: 125568,
           inquiry: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            email: 'jakeblow@gmail.com',
            serviceNumber: 124778,
            inquiry: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        }
    ];

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
                {inquiryData.map(obj =>
                    <tr>

                     <td>{obj.email} </td>
                     <td>{obj.serviceNumber}</td>
                     <td>{obj.inquiry}</td>
                     </tr>
                 )}
              
            
            
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
