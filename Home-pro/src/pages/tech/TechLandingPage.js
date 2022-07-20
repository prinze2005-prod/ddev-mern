import React from "react";
import Container from "react-bootstrap/Container";
import TechHeader from "../../components/TechHeader";
import TechLandingCard from "../../components/TechLandingCard";

function TechLandingPage() {
  return (
    <main style={{ backgroundColor: "#EFEEED" }}>
      <TechHeader />
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
