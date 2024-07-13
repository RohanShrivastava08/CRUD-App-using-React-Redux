import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;700&family=Montserrat:wght@400;600&display=swap');

  :root {
    --primary-color: #4a90e2;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    --background-color: #f0f4f8;
    --card-background: #ffffff;
    --text-color: #333333;
    --text-light: #666666;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    margin-bottom: 1rem;
    color: var(--secondary-color);
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;

    &:hover {
      color: darken(var(--primary-color), 10%);
    }
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  main {
    min-height: calc(100vh - 200px);
  }

  /* Add smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: darken(var(--primary-color), 10%);
  }
`;

export default GlobalStyles;