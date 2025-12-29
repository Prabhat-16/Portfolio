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
              gutterBottom 
              align="center"
              sx={{ 
                fontWeight: 900,
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
              <span role="img" aria-label="contact">📬</span> Get In Touch
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
              Ready to collaborate on web development projects? Let's connect and build something amazing with PHP, React, and modern technologies.
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
                    p: 5, 
                    background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '28px',
                    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.1) inset',
                    position: 'relative',
                    overflow: 'hidden',
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
                      background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1), transparent 60%)',
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
                            <IconButton sx={{ p: 0, mr: 1, color: '#60a5fa', fontSize: '1.8rem' }}>
                              <Email />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#a78bfa', fontWeight: 800, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em', textShadow: '0 4px 16px rgba(167, 139, 250, 0.5)' }}>
                              Email
                            </Typography>
                          </Box>

                          {/* Email address centered below */}
                          <Link
                            href="mailto:mprabhat1607@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                              color: '#f1f5f9', 
                              textDecoration: 'none', 
                              fontSize: '1.05rem',
                              opacity: 0.95,
                              fontWeight: 500,
                              '&:hover': {
                                color: '#60a5fa',
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
                          <IconButton sx={{ mr: 2, color: '#60a5fa', fontSize: '1.8rem' }}>
                            {item.icon}
                          </IconButton>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ color: '#a78bfa', fontWeight: 800, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em', textShadow: '0 4px 16px rgba(167, 139, 250, 0.5)' }}>
                              {item.title}
                            </Typography>
                            {item.link ? (
                              <Link 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                sx={{ 
                                  color: '#f1f5f9', 
                                  textDecoration: 'none',
                                  opacity: 0.95,
                                  fontWeight: 500,
                                  '&:hover': {
                                    color: '#60a5fa',
                                  }
                                }}
                              >
                                {item.content}
                              </Link>
                            ) : (
                              <Typography sx={{ color: '#f1f5f9', opacity: 0.95, fontWeight: 500 }}>{item.content}</Typography>
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
            <Typography variant="h5" sx={{ mb: 3, color: '#a78bfa', fontWeight: 800, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em', textShadow: '0 4px 16px rgba(167, 139, 250, 0.5)', fontSize: '1.8rem' }}>Follow Me</Typography>
            <Box>
              {[{ icon: <Twitter />, link: 'https://x.com/PRABHAT160703' },
                { icon: <Instagram />, link: 'https://www.instagram.com/prabhat_.16' },
                { icon: <GitHub />, link: 'https://github.com/Prabhat-16' },
              ].map((social, index) => (
                <IconButton 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  sx={{ 
                    mx: 1.5, 
                    color: '#a78bfa',
                    fontSize: '2.5rem',
                    transition: 'all 0.3s ease',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '50%',
                    p: 1.5,
                    '&:hover': {
                      color: '#c4b5fd',
                      transform: 'translateY(-5px) scale(1.15)',
                      boxShadow: '0 8px 24px rgba(139, 92, 246, 0.5)',
                      background: 'rgba(139, 92, 246, 0.2)',
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
