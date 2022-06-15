import React from "react";
import { Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function LoginPage() {
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
          <Form.Group className="mb-3" controlId="email">
            <Form.Label style={{marginLeft:"358px"}}>Email</Form.Label>
            <center>  <Form.Control type="text" placeholder="Joe@gmail.com" style={{width: "400px"}}/> </center> 
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="password">
            <Form.Label style={{marginLeft:"358px"}}>Password</Form.Label>
            <center>  <Form.Control type="password" style={{width: "400px"}}/> </center> 
          </Form.Group>
        </Form>
        <Row>
          <Col>
          <Button variant="primary" style={{ color: "black", marginLeft:"358px" }}>
          LogIn
        </Button>{" "}
          </Col>
          <Col>
          <a href="" style={{  marginLeft:"70px" }}>Fogot Password?</a>
          </Col>
        </Row>
          
        <br/><br/>
        <center><h6>Don't have an account? <a href="/signup">Sign Up</a> </h6></center>
        <br></br>
       
      </Container>
    </main>
  );
}

export default LoginPage;
