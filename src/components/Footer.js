import React from "react";
import { pages } from "./../utils/Pages";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
const Footer = () => {
  return (
    <footer className="background text-center p-2 mt-5 footer">
      <div className="d-flex justify-content-center flex-wrap">
        {pages.map((page, index) => (
          <NavLink
            tag={Link}
            key={index}
            to={{ pathname: page.pageLink, state: page.displayName }}
          >
            {page.displayName}
          </NavLink>
        ))}
      </div>
      <p>Copyright © 2021 Electura | No rights reserved!</p>
    </footer>
  );
};

export default Footer;
