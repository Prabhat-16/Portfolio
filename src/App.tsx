import React, { useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import SplashScreen from './components/SplashScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Background from './components/Background';
import './index.css';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#4ade80',
      },
      secondary: {
        main: '#38bdf8',
      },
      background: {
        default: '#030712',
        paper: '#0f172a',
      },
      text: {
        primary: '#f1f5f9',
        secondary: '#94a3b8',
      },
    },
    typography: {
      fontFamily: "'Fira Code', monospace",
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#030712',
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#030712',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#1e293b',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#334155',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: '1px solid #1e293b',
            borderRadius: '4px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '4px',
            textTransform: 'none',
            fontFamily: "'Fira Code', monospace",
          },
        },
      },
    },
  });

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      
      <ScrollProgress />
      <Navbar />
      <Background />
      
      <Container maxWidth={false} disableGutters sx={{ bgcolor: 'transparent', minHeight: '100vh' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
