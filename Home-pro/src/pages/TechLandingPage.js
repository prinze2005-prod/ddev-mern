import React from "react";
import Container from "react-bootstrap/Container";
import { PageHero } from "../components";
import TechLandingCard from "../components/TechLandingCard";

function TechLandingPage() {
  return (
    <main style={{ backgroundColor: "#EFEEED" }}>
      <PageHero />
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
