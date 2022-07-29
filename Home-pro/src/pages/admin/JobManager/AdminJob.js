import React from "react";
import Container from "react-bootstrap/Container";
import TechHeader from "../../../components/TechHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function AdminJob() {
    const jobData =[
        {
           jobId: 12345,
           tech_email: 'info@calgaryplumbing.com',
           first_name: 'Jake',
           last_name: 'Blow',
           cust_email: 'applepie@gmail.com',
           status: 'unassigned',
           start_time: '2022-07-2923:07',
           address: [
               {street: '11 Sait way NW',
               postalCode: 'A1A 1A1'}
           ],
           service_id: 2
        },
        {
            jobId: 22336,
           tech_email: 'info@calgaryplumbing.com',
           first_name: 'Karl',
           last_name: 'Blow',
           cust_email: 'chocolatepie@gmail.com',
           status: 'unassigned',
           start_time: '2022-07-2923:07',
           address: [
               {street: '13 Sait way NW',
               postalCode: 'A1A 1B1'}
           ],
           service_id: 1
        }
    ];

  return (
    <main>
      <TechHeader title="Job Manager" />
      <Container style={{ minHeight: "500px" , marginLeft: '14px'}}>
        <br></br>
        <h2>List of Jobs</h2>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Technician Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Customer Email</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>Street</th>
              <th>Postal Code</th>
              <th>Service Id</th>
              <th>Edit</th>

            </tr>
          </thead>
          <tbody>
                {jobData.map(obj =>
                    <tr>
                     <td>{obj.jobId} </td>   
                     <td>{obj.tech_email} </td>
                     <td>{obj.first_name}</td>
                     <td>{obj.last_name}</td>
                     <td>{obj.cust_email} </td>
                     <td>{obj.status} </td>
                     <td>{obj.start_time} </td>
                     <td>{obj.address.map(add => 
                      <div>   {add.street} </div>
                     )} </td>
                     <td>{obj.address.map(add => 
                      <div>   {add.postalCode} </div>
                     )} </td>
                     <td>{obj.service_id} </td>
                     <td> <Link
                            to="/adminjobedit"
                            className="btn"
                            style={{ backgroundColor: "#ffb347" }}
                        >
                            Edit job
                        </Link> </td>
                     </tr>
                 )}
              
            
            
          </tbody>
        </Table>
        <center>
          <Link
            to="/admin"
            className="btn"
            style={{ backgroundColor: "#ffb347", marginLeft:'200px'}}
          >
            back to Admin page
          </Link>
        </center>
      </Container>
    </main>
  );
}

export default AdminJob;
