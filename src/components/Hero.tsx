import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import GitHubIcon from '@mui/icons-material/GitHub';

const roles = [
  "Full-Stack Developer",
  "Cloud Engineer",
  "DevOps Specialist",
  "Software Engineer"
];

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[currentRole];
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const terminalLines = [
    { type: 'command', text: 'whoami' },
    { type: 'response', text: 'Full-Stack Developer' },
    { type: 'command', text: 'cat Degree.txt' },
    { type: 'response', text: 'MCA @ MIT-WPU' },
    { type: 'command', text: 'uptime' },
    { type: 'response', text: 'Building scalable solutions...' },
  ];

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        bgcolor: 'transparent',
        overflow: 'hidden',
      }}
    >

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            marginBottom: '1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            background: 'rgba(16, 185, 129, 0.15)',
            backdropFilter: 'blur(4px)',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#10b981',
            boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)',
          }}
        >
          <span style={{ position: 'relative', display: 'flex', height: '8px', width: '8px' }}>
            <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '9999px', background: '#10b981', opacity: 0.75, animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
            <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '9999px', height: '8px', width: '8px', background: '#10b981' }} />
          </span>
          Prabhat Mishra
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={8} alignItems="center">
            {/* Left Column: Terminal & Tags */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    bgcolor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 0 40px rgba(16, 185, 129, 0.15)',
                    position: 'relative',
                    backdropFilter: 'blur(12px)',
                    mb: 4
                  }}
                >
                  {/* Terminal Header */}
                  <Box sx={{ bgcolor: 'rgba(30, 41, 59, 0.7)', p: 1.5, display: 'flex', alignItems: 'center', gap: 1, borderBottom: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <Box sx={{ display: 'flex', gap: 1.25 }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444', opacity: 0.8 }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#f59e0b', opacity: 0.8 }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981', opacity: 0.8 }} />
                    </Box>
                    <Typography sx={{ color: '#4ade80', fontSize: '0.75rem', ml: 2, fontFamily: "'Fira Code', monospace", opacity: 0.7 }}>
                      prabhat@portfolio:~
                    </Typography>
                  </Box>
                  {/* Terminal Body */}
                  <Box sx={{ p: 4, minHeight: '300px', fontFamily: "'Fira Code', monospace" }}>
                    {terminalLines.map((line, i) => (
                      <Box key={i} sx={{ mb: 1.5 }}>
                        <Typography sx={{ color: '#4ade80', fontSize: '0.9rem', display: 'flex', gap: 1.5 }}>
                          <span style={{ opacity: 0.5 }}>{line.type === 'command' ? '$' : '>'}</span>
                          <span style={{ color: line.type === 'command' ? '#4ade80' : '#38bdf8' }}>{line.text}</span>
                        </Typography>
                      </Box>
                    ))}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Typography sx={{ color: '#4ade80', fontSize: '0.9rem', opacity: 0.5 }}>$ </Typography>
                      <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ width: '8px', height: '1.2rem', background: '#4ade80' }}
                      />
                    </Box>
                  </Box>
                </Box>
              </motion.div>

              {/* Floating Skill Tags */}
              <Grid container spacing={2}>
                {[
                  { icon: <TerminalIcon fontSize="small" />, label: 'Linux' },
                  { icon: <CodeIcon fontSize="small" />, label: 'React' },
                  { icon: <StorageIcon fontSize="small" />, label: 'MySQL' },
                  { icon: <CloudIcon fontSize="small" />, label: 'AWS' },
                  { icon: <CloudIcon fontSize="small" />, label: 'Azure' },
                  { icon: <GitHubIcon fontSize="small" />, label: 'GitHub' },
                  { icon: <GitHubIcon fontSize="small" />, label: 'Git' },
                ].map((tag, i) => (
                  <Grid item key={i}>
                    <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                      <Paper
                        sx={{
                          px: 2,
                          py: 1,
                          bgcolor: 'rgba(15, 23, 42, 0.6)',
                          border: '1px solid rgba(16, 185, 129, 0.15)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: '#f1f5f9',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          '&:hover': { 
                            borderColor: '#4ade80', 
                            color: '#4ade80',
                            bgcolor: 'rgba(16, 185, 129, 0.05)'
                          }
                         }}
                      >
                        {tag.icon}
                        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 500 }}>
                          {tag.label}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Right Column: Hero Text */}
            <Grid item xs={12} md={6}>
              <Box>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2rem', md: '3.2rem' },
                      fontWeight: 800,
                      color: '#f8fafc',
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.3,
                      mb: 3,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    I build <span style={{ color: '#38bdf8', fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: '1.2em' }}>robust backends</span>
                    <br />
                    & <span style={{ color: '#4ade80', fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: '1.2em' }}>sleek interfaces</span>
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    sx={{
                      color: '#94a3b8',
                      fontSize: { xs: '0.9rem', md: '0.95rem' },
                      lineHeight: 1.8,
                      mb: 6,
                      fontFamily: "'Inter', sans-serif",
                      maxWidth: '550px',
                      letterSpacing: '0.01em'
                    }}
                  >
                    <span style={{ color: '#f1f5f9', fontWeight: 600 }}>Full Stack Developer</span> specializing in <span style={{ color: '#38bdf8', fontWeight: 600 }}>modern JavaScript frameworks</span> and backend technologies, with experience in deploying applications on <span style={{ color: '#4ade80', fontWeight: 600 }}>Azure cloud</span>. Proficient in database management and API development, and actively strengthening <span style={{ color: '#8b5cf6', fontWeight: 600 }}>DevOps skills</span> in CI/CD pipelines, containerization, and automation.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Button
                      component={Link}
                      to="projects"
                      smooth={true}
                      variant="contained"
                      sx={{
                        bgcolor: '#10b981',
                        color: '#000',
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px',
                        fontWeight: 800,
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontFamily: "'Fira Code', monospace",
                        '&:hover': {
                          bgcolor: '#059669',
                          boxShadow: '0 0 25px rgba(16, 185, 129, 0.6)'
                        },
                        boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)'
                      }}
                    >
                      {`>_ View Projects →`}
                    </Button>
                    <Button
                      component={Link}
                      to="contact"
                      smooth={true}
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(16, 185, 129, 0.4)',
                        color: '#10b981',
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px',
                        fontWeight: 700,
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontFamily: "'Fira Code', monospace",
                        '&:hover': {
                          borderColor: '#10b981',
                          bgcolor: 'rgba(16, 185, 129, 0.05)',
                        }
                      }}
                    >
                      {`</> Get In Touch`}
                    </Button>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
 