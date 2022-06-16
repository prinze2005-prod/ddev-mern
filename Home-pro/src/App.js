import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";
import SignupPage from "./pages/SignupPage";
import TechLandingPage from "./pages/TechLandingPage";
import PaintingPage from './components/PaintingPage';
import Plumbing from './components/Plumbing';
import Electrician from './components/Electrician';
import Heating from './components/Heating';
import Handyman from './components/Handyman';
import Appliances from './components/Appliances';
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <div style={{ backgroundColor: "#FDFAF4" }}>
          {" "}
          <Switch>
            <Route exact path="/">
              <Home />
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
              <LoginPage />
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
           
          </Switch>
        </div>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
