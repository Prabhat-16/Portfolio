import React, { useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import CloudBackground from './components/CloudBackground';
import SplashScreen from './components/SplashScreen';
import ScrollProgress from './components/ScrollProgress';
import './styles/global.css';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#6366f1',
        light: '#818cf8',
        dark: '#4f46e5',
      },
      secondary: {
        main: '#ec4899',
        light: '#f472b6',
        dark: '#db2777',
      },
      background: {
        default: '#0f172a',
        paper: 'rgba(30, 41, 59, 0.8)',
      },
      text: {
        primary: '#f1f5f9',
        secondary: '#cbd5e1',
      },
    },
    typography: {
      fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
        fontFamily: '"Poppins", "Inter", sans-serif',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
        fontFamily: '"Poppins", "Inter", sans-serif',
      },
      h3: {
        fontWeight: 600,
        letterSpacing: '-0.01em',
        fontFamily: '"Inter", "Poppins", sans-serif',
      },
      body1: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 400,
        letterSpacing: '0.01em',
        lineHeight: 1.7,
      },
      button: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 600,
        letterSpacing: '0.02em',
        textTransform: 'none',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(99, 102, 241, 0.05)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.1)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            textTransform: 'none',
            fontWeight: 600,
            padding: '12px 32px',
            fontSize: '1rem',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
          contained: {
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: '#ffffff',
            boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
              boxShadow: '0 20px 40px -5px rgba(99, 102, 241, 0.6)',
            },
          },
          outlined: {
            borderWidth: '2px',
            borderColor: '#6366f1',
            color: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.4)',
            },
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
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Modern gradient background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)',
          zIndex: -2,
        }}
      />
      
      {/* Animated background elements */}
      <CloudBackground />
      
      <Container maxWidth={false} disableGutters>
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
