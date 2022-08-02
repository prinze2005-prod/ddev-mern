import React from "react";
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
