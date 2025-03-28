import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/global.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
      light: '#33c9dc',
      dark: '#008394',
    },
    secondary: {
      main: '#ff4081',
      light: '#ff79b0',
      dark: '#c60055',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3e5fc',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      background: 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      background: 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          '&:hover': {
            boxShadow: '0 0 15px rgba(0, 188, 212, 0.3)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;
