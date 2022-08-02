import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../../../components";
import ListOfServices from "../../../components/ListOfServices";
import { useUserContext } from "../../../context/user_context";
import NewNav from "../../../components/NewNav";

const HomePage = ({ user, handleLogout }) => {
  return (
    <main>
      <NewNav user={user} handleLogout={handleLogout}></NewNav>
      <Hero />
      <FeaturedProducts />
      {user && <ListOfServices />}
    </main>
  );
};

export default HomePage;
