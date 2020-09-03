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

const Navigation = (props) => {
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
              <NavLink href="/view">Logout</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Hello User</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
