/**
 * @author Saksham Ohri, Gao Liu, Eze Adiele
 * @description This page is home page
*/
import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../../../components";
import ListOfServices from "../../../components/ListOfServices";
import { useUserContext } from "../../../context/user_context";

const HomePage = ({ user }) => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      {user && <ListOfServices />}
    </main>
  );
};

export default HomePage;
