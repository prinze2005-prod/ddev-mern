import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../../../components";
import ListOfServices from "../../../components/ListOfServices";
import { useUserContext } from "../../../context/user_context";
const HomePage = ({ user }) => {
  const { myUser } = useUserContext();
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      {user && <ListOfServices />}
    </main>
  );
};

export default HomePage;
