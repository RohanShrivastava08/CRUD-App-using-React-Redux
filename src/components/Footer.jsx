import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled(motion.footer)`
  background-color: var(--secondary-color);
  color: #ffffff;
  padding: 2rem 0;
  text-align: center;
  margin-top: 3rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const IconLink = styled(motion.a)`
  color: #ecf0f1;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const Footer = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy; 2024 CRUD App using. All rights reserved.</p>
      <SocialIcons>
        <IconLink href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaGithub />
        </IconLink>
        <IconLink href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaLinkedin />
        </IconLink>
        <IconLink href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaTwitter />
        </IconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;