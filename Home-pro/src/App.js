import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import { Home, About } from "./pages";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";
import SignupPage from "./pages/SignupPage";
import TechLandingPage from "./pages/TechLandingPage";
import PaintingPage from "./components/PaintingPage";
import Plumbing from "./components/Plumbing";
import Electrician from "./components/Electrician";
import Heating from "./components/Heating";
import Handyman from "./components/Handyman";
import Appliances from "./components/Appliances";
import BookPlumber from "./pages/BookPlumber";
import BookElectrician from "./pages/BookElectrician";
import BookPainter from "./pages/BookPainter";
import BookHeatCool from "./pages/BookHeatCool";
import BookHandyman from "./pages/BookHandyman";
import BookAppliance from "./pages/BookAppliance";
import BookingConfirmPage from "./components/BookingConfirmPage";
import ErrorPage from "./pages/ErrorPage";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import TechPerformance from "./pages/TechPerformance";
import TechPendingTask from "./pages/TechPendingTask";

function App() {
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    // localStorage.getItem('user')
    // 1. token login
    // if success
    // setUser
  }, []);

  function handleLogout() {
    setUser(null);
    window.location = "/";
  }

  return (
    <Router>
      <Navbar user={user} handleLogout={handleLogout} />
      <Sidebar user={user} handleLogout={handleLogout} />
      <div style={{ backgroundColor: "#FDFAF4" }}>
        {" "}
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/service">
            <ServicePage />
          </Route>
          <Route exact path="/booking">
            <BookingPage />
          </Route>
          <Route exact path="/login">
            <LoginPage setUser={setUser} />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/tech">
            <TechLandingPage />
          </Route>
          <Route exact path="/PaintingPage">
            <PaintingPage />
          </Route>
          <Route exact path="/Plumbing">
            <Plumbing />
          </Route>
          <Route exact path="/Electrician">
            <Electrician />
          </Route>
          <Route exact path="/Heating">
            <Heating />
          </Route>
          <Route exact path="/Handyman">
            <Handyman />
          </Route>
          <Route exact path="/Appliances">
            <Appliances />
          </Route>
          <Route exact path="/bookPlumber">
            <BookPlumber user={user} />
          </Route>
          <Route exact path="/bookElectrician">
            <BookElectrician />
          </Route>
          <Route exact path="/bookPainter">
            <BookPainter />
          </Route>
          <Route exact path="/bookHeatCool">
            <BookHeatCool />
          </Route>
          <Route exact path="/bookHandyman">
            <BookHandyman />
          </Route>
          <Route exact path="/bookAppliance">
            <BookAppliance />
          </Route>
          <Route exact path="/BookingConfirmPage">
            <BookingConfirmPage />
          </Route>
          <Route exact path="/ContactUs">
            <ContactUs />
          </Route>
          <Route exact path="/Profile">
            <Profile user={user} />
          </Route>
          <Route exact path="/techPerformance">
            <TechPerformance />
          </Route>
          <Route exact path="/techPendingTask">
            <TechPendingTask />
          </Route>
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
