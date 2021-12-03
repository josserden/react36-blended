import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '../../App.styled';
import { NavList, NavItem } from './Navbar.styled';

export default function NavBar() {
  const activeLink = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <header style={{ boxShadow: '0 5px 20px -10px #000' }}>
      <Container>
        <nav>
          <NavList>
            <NavItem>
              <NavLink style={activeLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={activeLink} to="/movies">
                Movies Page
              </NavLink>
            </NavItem>
          </NavList>
        </nav>
      </Container>
    </header>
  );
}
