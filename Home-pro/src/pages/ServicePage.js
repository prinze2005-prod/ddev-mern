import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import picture from "../assets/hero-bcg.jpeg";
import { PageHero } from "../components";
import ServicesCard from "../components/ServicesCard";

function ServicePage() {
  return (
    <main>
      <PageHero title="Services" />
      <Container>
        <br></br>
       <ServicesCard/>
        
        <br></br>
      </Container>
    </main>
  );
}

export default ServicePage;
