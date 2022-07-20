import React from "react";
import Container from "react-bootstrap/Container";
import { PageHero } from "../../components";
import AdminHeader from "../../components/AdminHeader";
import AdminLandingCard from "../../components/AdminLandingCard";

function AdminLandingPage() {
  return (
    <main style={{ backgroundColor: "#EFEEED" }}>
      <AdminHeader />
      <Container>
        <br />
        <AdminLandingCard />
        <br />
        <br />
      </Container>
    </main>
  );
}

export default AdminLandingPage;
