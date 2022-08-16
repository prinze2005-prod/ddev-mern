/**
 * @author Saksham Ohri, Gao Liu, Eze Adiele
 * @description This page is for displaying technicians landing page
*/import React from "react";
import Container from "react-bootstrap/Container";
import TechLandingCard from "../../components/TechLandingCard";

function TechLandingPage() {
  return (
    <main>
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
