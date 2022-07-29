import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

const ListOfServices = () => {
  const jobData =[
    {
       jobId: 12345,
       tech_email: 'info@calgaryplumbing.com',
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
    <Wrapper className="section">
      <div className="title">
        <h2>List of previous services</h2>
        <div className="underline"></div>
        <div className="container">
          {" "}
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>Service Id</th>
              <th>Technician Email</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>Street</th>
              <th>Postal Code</th>
              <th>Service Id</th>
              </tr>
            </thead>
            <tbody>
                {jobData.map(obj =>
                    <tr>
                     <td>{obj.jobId} </td>   
                     <td>{obj.tech_email} </td>
                     <td>{obj.status} </td>
                     <td>{obj.start_time} </td>
                     <td>{obj.address.map(add => 
                      <div>   {add.street} </div>
                     )} </td>
                     <td>{obj.address.map(add => 
                      <div>   {add.postalCode} </div>
                     )} </td>
                     <td>{obj.service_id} </td>
                     </tr>
                 )}
              
            
            
          </tbody>
          </Table>
        </div>
      </div>
      <br></br>
    </Wrapper>
  );
};

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
  td:hover {
    background-color: var(--clr-primary-5);
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default ListOfServices;
