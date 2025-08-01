import React, { useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import CloudBackground from './components/CloudBackground';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import './styles/global.css';

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#00bcd4' : '#87CEEB',
        light: isDarkMode ? '#33c9dc' : '#B0E0E6',
        dark: isDarkMode ? '#008394' : '#4682B4',
      },
      secondary: {
        main: isDarkMode ? '#ff4081' : '#E0F6FF',
        light: isDarkMode ? '#ff79b0' : '#F0F8FF',
        dark: isDarkMode ? '#c60055' : '#B0C4DE',
      },
      background: {
        default: isDarkMode ? '#0a1929' : 'transparent',
        paper: isDarkMode ? '#132f4c' : 'rgba(255, 255, 255, 0.9)',
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#2c3e50',
        secondary: isDarkMode ? '#b3e5fc' : '#34495e',
      },
    },
    typography: {
      fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        background: isDarkMode 
          ? 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)'
          : 'linear-gradient(45deg, #87CEEB 30%, #B0E0E6 60%, #E0F6FF 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 900,
        letterSpacing: '-0.02em',
        fontFamily: '"Poppins", "Inter", sans-serif',
      },
      h2: {
        background: isDarkMode 
          ? 'linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)'
          : 'linear-gradient(45deg, #87CEEB 30%, #B0E0E6 60%, #E0F6FF 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 800,
        letterSpacing: '-0.01em',
        fontFamily: '"Poppins", "Inter", sans-serif',
      },
      h3: {
        color: isDarkMode ? '#33c9dc' : '#4682B4',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        fontFamily: '"Inter", "Poppins", sans-serif',
      },
      h4: {
        color: isDarkMode ? '#4caf50' : '#5D8CAE',
        fontWeight: 600,
        letterSpacing: '0em',
        fontFamily: '"Inter", sans-serif',
      },
      h5: {
        color: isDarkMode ? '#ff9800' : '#6B8E9E',
        fontWeight: 600,
        letterSpacing: '0.01em',
        fontFamily: '"Inter", sans-serif',
      },
      h6: {
        color: isDarkMode ? '#f44336' : '#7A9EAE',
        fontWeight: 600,
        letterSpacing: '0.01em',
        fontFamily: '"Inter", sans-serif',
      },
      body1: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 400,
        letterSpacing: '0.01em',
        lineHeight: 1.6,
      },
      body2: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 400,
        letterSpacing: '0.01em',
        lineHeight: 1.5,
      },
      subtitle1: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
        letterSpacing: '0.01em',
      },
      subtitle2: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
        letterSpacing: '0.01em',
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
            backgroundColor: isDarkMode ? '#132f4c' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: isDarkMode 
              ? '1px solid rgba(0, 188, 212, 0.1)'
              : '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
            '&:hover': {
              boxShadow: isDarkMode 
                ? '0 15px 40px rgba(0, 188, 212, 0.2)'
                : '0 15px 40px rgba(135, 206, 235, 0.2)',
              transform: 'translateY(-5px)',
              transition: 'all 0.3s ease',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '25px',
            textTransform: 'none',
            fontWeight: 600,
            boxShadow: isDarkMode 
              ? '0 4px 15px rgba(0, 188, 212, 0.3)'
              : '0 4px 15px rgba(135, 206, 235, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: isDarkMode 
                ? '0 8px 25px rgba(0, 188, 212, 0.4)'
                : '0 8px 25px rgba(135, 206, 235, 0.4)',
            },
          },
          contained: {
            background: isDarkMode 
              ? 'linear-gradient(45deg, #00bcd4, #008394)'
              : 'linear-gradient(45deg, #87CEEB, #B0E0E6)',
            color: isDarkMode ? '#ffffff' : '#2c3e50',
            '&:hover': {
              background: isDarkMode 
                ? 'linear-gradient(45deg, #008394, #00bcd4)'
                : 'linear-gradient(45deg, #B0E0E6, #87CEEB)',
            },
          },
          outlined: {
            borderColor: isDarkMode ? '#33c9dc' : '#87CEEB',
            color: isDarkMode ? '#33c9dc' : '#4682B4',
            '&:hover': {
              borderColor: isDarkMode ? '#00bcd4' : '#B0E0E6',
              backgroundColor: isDarkMode 
                ? 'rgba(0, 188, 212, 0.1)'
                : 'rgba(135, 206, 235, 0.1)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#132f4c' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: isDarkMode 
              ? '1px solid rgba(0, 188, 212, 0.1)'
              : '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
            boxShadow: isDarkMode 
              ? '0 8px 32px rgba(0, 188, 212, 0.1)'
              : '0 8px 32px rgba(135, 206, 235, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: isDarkMode 
                ? '0 15px 40px rgba(0, 188, 212, 0.2)'
                : '0 15px 40px rgba(135, 206, 235, 0.2)',
              borderColor: isDarkMode 
                ? 'rgba(0, 188, 212, 0.3)'
                : 'rgba(135, 206, 235, 0.5)',
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
      
      {/* Cloud background component */}
      <CloudBackground />
      
      {/* Cloud background shapes */}
      <div className="cloud-shape cloud-shape-1"></div>
      <div className="cloud-shape cloud-shape-2"></div>
      <div className="cloud-shape cloud-shape-3"></div>
      
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
