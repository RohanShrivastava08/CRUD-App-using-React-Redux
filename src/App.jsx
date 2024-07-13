import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import About from './components/About';
import Footer from './components/Footer';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <AppContainer>
        <UserForm />
        <UserTable />
        <About />
      </AppContainer>
      <Footer />
    </Provider>
  );
};

export default App;