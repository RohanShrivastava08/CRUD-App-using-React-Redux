import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.section)`
  background-color: var(--card-background);
  padding: 3rem;
  margin: 3rem 0;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-color);
`;


const About = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>About Our CRUD App</Title>
      <Content>
        <div>
          <Paragraph>
            Welcome to our CRUD (Create, Read, Update, Delete) Application. This app showcases the power of modern web technologies, combining React and Redux to create a seamless and efficient user experience.
          </Paragraph>
          <Paragraph>
            CRUD operations form the backbone of many web applications, allowing users to interact with data in a meaningful way. Our app demonstrates these operations with a sleek, intuitive interface that makes managing user data a breeze.
          </Paragraph>
          <Paragraph>
            Whether you're adding new users, viewing existing ones, updating information, or removing outdated entries, our app provides a smooth and responsive experience. We've focused on creating a design that's not only functional but also aesthetically pleasing, proving that utility and beauty can go hand in hand in web development.
          </Paragraph>
        </div>
      </Content>
    </AboutContainer>
  );
};

export default About;