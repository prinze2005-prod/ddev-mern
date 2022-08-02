import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";

import Home_ProNew from "../assets/Home_ProNew.jpg";
import { Link } from "react-router-dom";

const NewNav = ({ user, handleLogout }) => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  return (
    <>
      <MDBNavbar sticky expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarBrand className="mb-3">
            <img
              src={Home_ProNew}
              alt="home pro"
              style={{ maxWidth: "300px" }}
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar center show={showNavNoTogglerSecond}>
            {!user && (
              <>
                <MDBNavbarNav className="mb-2 mb-lg-0">
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/" style={{ color: "black" }}>
                        Home
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/about" style={{ color: "black" }}>
                        About Us
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/service" style={{ color: "black" }}>
                        Services
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/contactus" style={{ color: "black" }}>
                        Contact Us
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
                <MDBNavbarItem className="d-flex w-auto mb-0">
                  <Link to="login">
                    <MDBBtn color="warning" style={{ color: "black" }}>
                      login
                    </MDBBtn>
                  </Link>
                </MDBNavbarItem>
              </>
            )}
            {user && user.role === "Customer" && (
              <>
                <MDBNavbarNav className="mb-2 mb-lg-0">
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/" style={{ color: "black" }}>
                        Home
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/about" style={{ color: "black" }}>
                        About Us
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/service" style={{ color: "black" }}>
                        Services
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/profile" style={{ color: "black" }}>
                        Profile
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      <Link to="/contactus" style={{ color: "black" }}>
                        Contact Us
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>

                <MDBNavbarItem className="d-flex ms-auto mb-0">
                  <MDBNavbarLink disabled>{user.username}</MDBNavbarLink>
                  <MDBBtn
                    color="warning"
                    style={{ color: "black" }}
                    onClick={handleLogout}
                  >
                    logout
                  </MDBBtn>
                </MDBNavbarItem>
              </>
            )}
            {user && (user.role === "Technician" || user.role === "Admin") && (
              <>
                <MDBNavbarItem className="d-flex ms-auto mb-0">
                  <MDBNavbarLink disabled>{user.username}</MDBNavbarLink>
                  <MDBBtn
                    color="warning"
                    style={{ color: "black" }}
                    onClick={handleLogout}
                  >
                    logout
                  </MDBBtn>
                </MDBNavbarItem>
              </>
            )}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default NewNav;
