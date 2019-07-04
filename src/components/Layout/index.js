import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Monserrat from '../../assets/fonts/Montserrat-Medium.ttf';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20vw;
`;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Monserrat';
  }

  @font-face {
    font-family: Monserrat;
    src: url(${Monserrat}) format('truetype');
  }
`;

const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    {children}
  </Container>
);

export default Layout;
