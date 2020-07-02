
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink

} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/Home">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
<Link to="/Home">Home</Link>
              </NavLink>
            </NavItem>
             <NavItem>
              <NavLink>
   <Link to="/Blog">Blog</Link>
              </NavLink>
            </NavItem>
             <NavItem>
              <NavLink>
<Link to="/AboutMe">AboutMe</Link>
              </NavLink>
            </NavItem>
            
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;