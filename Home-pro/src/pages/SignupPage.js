import React from "react";
import { Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function SignupPage() {
  return (
    <main>
      <header style={{ backgroundColor: "orange" }}>
        {" "}
        <br />{" "}
        <center>
          <h2>Welcome</h2>
        </center>
        <br />
      </header>
      <Container>
        <br></br>
        
         
        <Form>
        <Form.Group className="mb-3" controlId="firstName">
            <Form.Label style={{marginLeft:"358px"}}>First Name</Form.Label>
            <center>  <Form.Control type="text" placeholder="Joe" style={{width: "400px"}}/> </center> 
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label style={{marginLeft:"358px"}}>Last Name</Form.Label>
            <center>  <Form.Control type="text" placeholder="Blow" style={{width: "400px"}}/> </center> 
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label style={{marginLeft:"358px"}}>Address</Form.Label>
            <center>  <Form.Control type="text" placeholder="123 SAIT Way NW T1T1T1" style={{width: "400px"}}/> </center> 
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label style={{marginLeft:"358px"}}>Email</Form.Label>
            <center>  <Form.Control type="text" placeholder="Joe@gmail.com" style={{width: "400px"}}/> </center> 
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="password">
            <Form.Label style={{marginLeft:"358px"}}>Password</Form.Label>
            <center>  <Form.Control type="password" style={{width: "400px"}}/> </center> 
          </Form.Group>
        </Form>
         <center> <Button variant="primary" style={{ color: "black"}}>
          SignUp
        </Button>{" "} </center><br/>
        <center> <Button variant="primary" style={{ color: "black" }}>
          Back to Login
        </Button>{" "} </center>
        <br></br> <br/>
       
      </Container>
    </main>
  );
}

export default SignupPage;
