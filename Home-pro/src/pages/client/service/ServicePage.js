import React from "react";
import Container from "react-bootstrap/Container";
import NewNav from "../../../components/NewNav";
import { PageHero } from "../../../components";
import ServicesCard from "../../../components/ServicesCard";

function ServicePage({ user, handleLogout }) {
  return (
    <main>
      <NewNav user={user} handleLogout={handleLogout}></NewNav>

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
