import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import ProfileLogo from "../../../assets/images/profile.png";
import { AiOutlineLogout } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import "./index.css";
const Header = ({ role, user, weblogo, burgermenu, togelHandler }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custumnavbar">
      <div className="container-fluid">
        <Navbar.Brand href="#home" className="pb-3">
          {role === "user" ? (
            <img src={weblogo} alt="logo" className="logo" />
          ) : (
            <span onClick={() => togelHandler()}>{burgermenu} </span>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {!(user?.name === "super admin") && (
              <Nav.Link to="/" as={NavLink}>
                HOME
              </Nav.Link>
            )}

            {!user ? (
              <>
                <Nav.Link to="/login" as={NavLink}>
                  LOGIN
                </Nav.Link>
                <Nav.Link to="/signup" as={NavLink}>
                  SIGNUP
                </Nav.Link>
                <Nav.Link to="/blogs" as={NavLink}>
                  BLOGS
                </Nav.Link>
                <Nav.Link to="/multisteper" as={NavLink}>
                  MULTIFORM
                </Nav.Link>
              </>
            ) : (
              <>
                <span className="welcometext text-uppercase ms-2">
                  Welcome, {user?.name}
                </span>
                <NavDropdown
                  id="basic-nav-dropdown"
                  title={
                    <span>
                      <img
                        src={ProfileLogo}
                        alt="profileLogo"
                        className="profilelogo"
                      />
                    </span>
                  }
                >
                  <NavDropdown.Item href="#action/3.3">
                    <ImProfile />
                    <span className="ms-2">Profile</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/logout" as={NavLink}>
                    <AiOutlineLogout />
                    <span className="ms-2">Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
