import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import AuthService from "../services/auth.service";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="navbar navbar-dark bg-primary" light expand="md">
        <NavbarBrand href="/">Starwisp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto " navbar>
            <NavItem>
              <NavLink style={{ color: "white" }} href="/add">
                Add
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink style={{ color: "white" }} href="/view">
                View
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "white" }}
                href="/"
                onClick={AuthService.logout}
              >
                Logout
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText style={{ color: "white" }}>
            Hello {AuthService.getCurrentUser()}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
