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
              <NavLink href="/add">Add</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/view">View</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" onClick={AuthService.logout}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Hello {AuthService.getCurrentUser()}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
