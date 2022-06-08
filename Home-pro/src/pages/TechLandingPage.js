import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import picture from "../assets/hero-bcg-2.jpeg";
import { PageHero } from "../components";
import TechLandingCard from "../components/TechLandingCard";

function TechLandingPage() {
  return (
    <main style={{ backgroundColor: "#EFEEED" }}>
      <PageHero title="Welcome Back Tech1" />
      <Container>
        <br />
        <TechLandingCard />
        <br />
        <br />
      </Container>
    </main>
  );
}

export default TechLandingPage;
