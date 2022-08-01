import React ,{useState, useEffect} from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

const ListOfServices = () => {
  const [jobData,setJobData] =useState([
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
  ]);

  const [serName, setSerName] = useState(null);
//   {jobData.map(a =>
//     <div> 
//     if({a.service_id} === 1){
//        setSerName('Electrical')
//     }
//     else if({a.service_id} === 2){
//        setSerName('Plumbing')
//     }
//     </div>
// )}
  let HP_refreshToken;
  let HP_accessToken;
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
  }catch(err){
    console.log(err)
  }
  useEffect(() => {
    fetch("http://localhost:5000/api/customer/getJobs",
    {
      method: "POST",
      credentials: "include", //TWO THINGS: Cookies and this header <============
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: HP_refreshToken, // <==================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
        accessToken: HP_accessToken, // <====================== IN ALL REQUESTS THAT ARE CUSTOMER, TECH, and EMAIL!
      })})
    .then(response => response.json())
    .then(data => setJobData(data));
  },[]);

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
              </tr>
            </thead>
            <tbody>
                {jobData.map(obj =>
                    <tr>
                     <td>{obj.job_id} </td>   
                     <td>{obj.tech_email} </td>
                     <td>{obj.status} </td>
                     <td>{obj.start_time} </td>
                     <td>{obj.address.street} </td>
                     <td>{obj.address.postalCode} </td>
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

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default ListOfServices;
