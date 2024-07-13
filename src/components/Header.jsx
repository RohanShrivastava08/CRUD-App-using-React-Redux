import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderContainer = styled(motion.header)`
  background: linear-gradient(135deg, #4a90e2 0%, #5ca0f2 100%);
  color: #ffffff;
  padding: 3rem 0;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled(motion.p)`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.9;
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        CRUD App using React Redux
      </Title>
      <Subtitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Manage your data with Style and Efficiency
      </Subtitle>
    </HeaderContainer>
  );
};

export default Header;
