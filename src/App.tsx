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
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
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
        main: isDarkMode ? '#6366f1' : '#3b82f6',
        light: isDarkMode ? '#818cf8' : '#60a5fa',
        dark: isDarkMode ? '#4f46e5' : '#2563eb',
      },
      secondary: {
        main: isDarkMode ? '#ec4899' : '#f59e0b',
        light: isDarkMode ? '#f472b6' : '#fbbf24',
        dark: isDarkMode ? '#db2777' : '#d97706',
      },
      background: {
        default: isDarkMode ? '#0f172a' : '#f8fafc',
        paper: isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      },
      text: {
        primary: isDarkMode ? '#f1f5f9' : '#1e293b',
        secondary: isDarkMode ? '#cbd5e1' : '#475569',
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
            backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            border: isDarkMode 
              ? '1px solid rgba(99, 102, 241, 0.2)'
              : '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '24px',
            boxShadow: isDarkMode 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(99, 102, 241, 0.05)'
              : '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.05)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: isDarkMode 
                ? '0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.1)'
                : '0 35px 60px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)',
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
            background: isDarkMode 
              ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
              : 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
            color: '#ffffff',
            boxShadow: isDarkMode 
              ? '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
              : '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
            '&:hover': {
              background: isDarkMode 
                ? 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
                : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              boxShadow: isDarkMode 
                ? '0 20px 40px -5px rgba(99, 102, 241, 0.6)'
                : '0 20px 40px -5px rgba(59, 130, 246, 0.6)',
            },
          },
          outlined: {
            borderWidth: '2px',
            borderColor: isDarkMode ? '#6366f1' : '#3b82f6',
            color: isDarkMode ? '#6366f1' : '#3b82f6',
            backgroundColor: isDarkMode 
              ? 'rgba(99, 102, 241, 0.1)' 
              : 'rgba(59, 130, 246, 0.1)',
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: isDarkMode 
                ? 'rgba(99, 102, 241, 0.2)' 
                : 'rgba(59, 130, 246, 0.2)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            border: isDarkMode 
              ? '1px solid rgba(99, 102, 241, 0.2)'
              : '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '24px',
            boxShadow: isDarkMode 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              : '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: isDarkMode 
                ? '0 35px 60px -12px rgba(0, 0, 0, 0.4)'
                : '0 35px 60px -12px rgba(0, 0, 0, 0.15)',
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
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f8fafc 100%)',
          zIndex: -2,
        }}
      />
      
      {/* Animated background elements */}
      <CloudBackground />
      
      {/* Theme toggle button */}
      <ThemeToggle />
      
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
