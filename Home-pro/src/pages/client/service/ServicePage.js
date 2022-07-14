import React from "react";
import Container from "react-bootstrap/Container";

import { PageHero } from "../../../components";
import ServicesCard from "../../../components/ServicesCard";

function ServicePage() {
  return (
    <main>
      <PageHero title="Services" />
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
