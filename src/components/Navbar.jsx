import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  background-color: #34495e;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled(motion.li)`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const Navbar = () => {
  return (
    <Nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <NavList>
        <NavItem whileHover={{ scale: 1.1 }}>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }}>
          <NavLink href="#about">About</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;