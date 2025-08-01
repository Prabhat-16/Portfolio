import React from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton, Link } from '@mui/material';
import { Email, LinkedIn, LocationOn, GitHub, Twitter, Instagram } from '@mui/icons-material';
import { motion } from 'framer-motion';
import CloudBackground from './CloudBackground';

const Contact: React.FC = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 25%, #0f172a 50%, #020617 75%, #000000 100%)',
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
              gutterBottom 
              align="center"
              sx={{ 
                fontWeight: 800,
                position: 'relative',
                color: '#ffffff',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                display: 'inline-block',
                fontFamily: '"Poppins", "Inter", sans-serif',
                letterSpacing: '-0.02em',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                  borderRadius: '2px',
                }
              }}
            >
              <span role="img" aria-label="cloud">☁️</span> Get In Touch
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#ffffff',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
                mt: 2,
                opacity: 0.9,
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 1.6,
              }}
            >
              Ready to collaborate on cloud projects? Let's connect and build something amazing together.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
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
                    p: 4, 
                    background: 'rgba(19, 47, 76, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(59, 130, 246, 0.2)',
                      borderColor: 'rgba(59, 130, 246, 0.5)',
                      transition: 'all 0.3s ease',
                    }
                  }}
                >
                  <Grid container spacing={3}>
                    {/* Email - full width */}
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            p: 2,
                            borderRadius: 2,
                            background: 'rgba(59, 130, 246, 0.1)',
                            transition: 'all 0.3s ease',
                            width: '100%',
                            maxWidth: 600,
                            wordBreak: 'break-word',
                            '&:hover': {
                              background: 'rgba(59, 130, 246, 0.15)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          {/* Top row: icon + label */}
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <IconButton sx={{ p: 0, mr: 1, color: '#3b82f6' }}>
                              <Email />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#3b82f6', fontWeight: 700, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.01em' }}>
                              Email
                            </Typography>
                          </Box>

                          {/* Email address centered below */}
                          <Link
                            href="mailto:mprabhat1607@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                              color: '#ffffff', 
                              textDecoration: 'none', 
                              fontSize: '1rem',
                              opacity: 0.9,
                              '&:hover': {
                                color: '#3b82f6',
                              }
                            }}
                          >
                            mprabhat1607@gmail.com
                          </Link>
                        </Box>
                      </Box>
                    </Grid>

                    {/* LinkedIn and Location - half width each */}
                    {[
                      {
                        icon: <LinkedIn />,
                        title: 'LinkedIn',
                        content: 'Prabhat/linkedin',
                        link: 'https://www.linkedin.com/in/prabhat-web-developer/',
                      },
                      {
                        icon: <LocationOn />,
                        title: 'Location',
                        content: 'Pune, Maharashtra',
                      },
                    ].map((item) => (
                      <Grid item xs={12} sm={6} key={item.title}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          p: 2, 
                          borderRadius: 2, 
                          background: 'rgba(59, 130, 246, 0.1)', 
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(59, 130, 246, 0.15)',
                            transform: 'translateY(-2px)',
                          }
                        }}>
                          <IconButton sx={{ mr: 2, color: '#3b82f6' }}>
                            {item.icon}
                          </IconButton>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ color: '#3b82f6', fontWeight: 700, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.01em' }}>
                              {item.title}
                            </Typography>
                            {item.link ? (
                              <Link 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                sx={{ 
                                  color: '#ffffff', 
                                  textDecoration: 'none',
                                  opacity: 0.9,
                                  '&:hover': {
                                    color: '#3b82f6',
                                  }
                                }}
                              >
                                {item.content}
                              </Link>
                            ) : (
                              <Typography sx={{ color: '#ffffff', opacity: 0.9 }}>{item.content}</Typography>
                            )}
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2, color: '#3b82f6', fontWeight: 700, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.01em' }}>Follow Me</Typography>
            <Box>
              {[{ icon: <Twitter />, link: 'https://x.com/PRABHAT160703' },
                { icon: <Instagram />, link: 'https://www.instagram.com/iamprabhatmishraa' },
                { icon: <GitHub />, link: 'https://github.com/Prabhat-16' },
              ].map((social, index) => (
                <IconButton 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  sx={{ 
                    mx: 1, 
                    color: '#3b82f6',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#6366f1',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 5px 15px rgba(59, 130, 246, 0.3)',
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: '#ffffff', opacity: 0.8, fontFamily: '"Inter", sans-serif', fontWeight: 400, letterSpacing: '0.01em' }}>
              © {new Date().getFullYear()} Prabhat Mishra. All rights reserved.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
