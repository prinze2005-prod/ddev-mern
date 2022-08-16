/**
 * @author Saksham Ohri, Gao Liu, Eze Adiele
 * @description This page is for listing all the services
*/import React from "react";
import Container from "react-bootstrap/Container";

import ServicesCard from "../../../components/ServicesCard";

function ServicePage({ user, handleLogout }) {
  return (
    <main>
      <Container>
        <br></br>
        <ServicesCard />
        <br></br>
        <br></br>
      </Container>
    </main>
  );
}

export default ServicePage;
