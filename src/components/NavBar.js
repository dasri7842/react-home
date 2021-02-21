import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PhoneCall, Menu, X } from "react-feather";
import { PhoneNumber } from "./../constants/Constants";
import useDocumentTitle from "../hooks/useDocumentTitle";
import logo from "./../assests/logo.png";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Example = ({ pages }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed); //navbar Toggler
  const closeNavbar = () => {
    if (collapsed) return;
    setCollapsed(true); // strictly closes the navbar.
  };

  useDocumentTitle(useLocation().state); // to change document title.

  return (
    <div className="navbar mb-5">
      <Navbar expand="xl" className="mb-5 fixed-top px-3 py-2">
        <NavbarBrand
          onClick={closeNavbar}
          tag={Link}
          to={{ pathname: "/", state: "Home" }}
        >
          <img src={logo} alt="Logo"></img>
        </NavbarBrand>

        <button className="navbar-toggler" onClick={toggleNavbar}>
          {collapsed ? <Menu color={"#6c757d"} /> : <X color={"#6c757d"} />}
        </button>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ms-auto">
            {pages.map((page, index) => (
              <NavItem key={index} className="mx-xl-2">
                <NavLink
                  tag={Link}
                  to={{ pathname: page.pageLink, state: page.displayName }}
                  onClick={closeNavbar}
                >
                  {page.displayName}
                </NavLink>
              </NavItem>
            ))}

            <NavItem className="mx-2">
              <NavLink>
                <PhoneCall color={"#29d8db"} /> {PhoneNumber}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
