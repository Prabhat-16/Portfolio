import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CloudBackground from './CloudBackground';

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CloudBackground zIndex={0} />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 6 
          }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontWeight: 900,
                textAlign: 'center',
                position: 'relative',
                background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                fontFamily: '"Poppins", "Inter", sans-serif',
                letterSpacing: '-0.03em',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '5px',
                  background: 'linear-gradient(90deg, transparent, #8b5cf6, #a78bfa, #8b5cf6, transparent)',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
                }
              }}
            >
              👨‍💻 About Me
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mt: 2 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 5,
                    background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 6,
                    border: '2px solid rgba(139, 92, 246, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.1) inset',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at top left, rgba(139, 92, 246, 0.1), transparent 50%)',
                      pointerEvents: 'none',
                    },
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 30px 80px rgba(139, 92, 246, 0.35), 0 0 0 2px rgba(139, 92, 246, 0.4) inset',
                      borderColor: 'rgba(167, 139, 250, 0.6)',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: '#a78bfa', mb: 3, fontWeight: 800, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em', textShadow: '0 4px 16px rgba(167, 139, 250, 0.5)', fontSize: '1.8rem' }}>
                    Cloud Developer Profile
                  </Typography>
                  <Typography paragraph sx={{ color: '#f1f5f9', lineHeight: 1.9, opacity: 0.95, fontFamily: '"Inter", sans-serif', fontWeight: 400, letterSpacing: '0.01em', fontSize: '1.05rem' }}>
                    I am a passionate cloud developer specializing in backend technologies, particularly PHP and MySQL, 
                    with expertise in designing robust cloud architectures and implementing scalable solutions. 
                    My focus extends beyond traditional backend development to include cloud-native technologies, 
                    DevOps practices, and modern deployment strategies.
                  </Typography>
                  <Typography paragraph sx={{ color: '#f1f5f9', mb: 0, lineHeight: 1.9, opacity: 0.95, fontFamily: '"Inter", sans-serif', fontWeight: 400, letterSpacing: '0.01em', fontSize: '1.05rem' }}>
                    Currently expanding my expertise in cloud platforms, containerization, and infrastructure as code. 
                    Passionate about building scalable, resilient applications that leverage the power of cloud computing 
                    to deliver exceptional user experiences.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '10%',
                      left: '10%',
                      right: '-10px',
                      bottom: '-10px',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)',
                      borderRadius: '20px',
                      zIndex: 0,
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="about.jpg"
                    alt="Cloud Developer Illustration"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '500px',
                      display: 'block',
                      margin: '0 auto',
                      position: 'relative',
                      zIndex: 1,
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
                      transform: 'perspective(1000px) rotateY(-5deg)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateY(0deg)',
                        boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4)',
                      },
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 