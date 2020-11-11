import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './js/components/Header';
import Footer from './js/components/Footer';
import theme from './js/theme';

const App = () => (
    <ThemeProvider theme={theme}>
        <Header />
        <Footer />
    </ThemeProvider>
);

export default App;