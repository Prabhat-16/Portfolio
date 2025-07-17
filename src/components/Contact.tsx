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
        background: 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 25%, #E0F6FF 50%, #F0F8FF 75%, #FFFFFF 100%)',
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
                fontWeight: 'bold',
                position: 'relative',
                background: 'linear-gradient(90deg, #5bb6e6 10%, #87CEEB 60%, #4682B4 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                textFillColor: 'transparent',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #87CEEB, #B0E0E6)',
                  borderRadius: '2px',
                }
              }}
            >
              <span role="img" aria-label="cloud">☁️</span> Get In Touch
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#34495e',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
                mt: 2,
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
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(135, 206, 235, 0.3)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(135, 206, 235, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(135, 206, 235, 0.2)',
                      borderColor: 'rgba(135, 206, 235, 0.5)',
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
                            background: 'rgba(135, 206, 235, 0.1)',
                            transition: 'all 0.3s ease',
                            width: '100%',
                            maxWidth: 600,
                            wordBreak: 'break-word',
                            '&:hover': {
                              background: 'rgba(135, 206, 235, 0.15)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          {/* Top row: icon + label */}
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <IconButton sx={{ p: 0, mr: 1, color: '#4682B4' }}>
                              <Email />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: '#4682B4', fontWeight: 'bold' }}>
                              Email
                            </Typography>
                          </Box>

                          {/* Email address centered below */}
                          <Link
                            href="mailto:mprabhat1607@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                              color: '#34495e', 
                              textDecoration: 'none', 
                              fontSize: '1rem',
                              '&:hover': {
                                color: '#4682B4',
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
                          background: 'rgba(135, 206, 235, 0.1)', 
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(135, 206, 235, 0.15)',
                            transform: 'translateY(-2px)',
                          }
                        }}>
                          <IconButton sx={{ mr: 2, color: '#4682B4' }}>
                            {item.icon}
                          </IconButton>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ color: '#4682B4', fontWeight: 'bold' }}>
                              {item.title}
                            </Typography>
                            {item.link ? (
                              <Link 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                sx={{ 
                                  color: '#34495e', 
                                  textDecoration: 'none',
                                  '&:hover': {
                                    color: '#4682B4',
                                  }
                                }}
                              >
                                {item.content}
                              </Link>
                            ) : (
                              <Typography sx={{ color: '#34495e' }}>{item.content}</Typography>
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
            <Typography variant="h5" sx={{ mb: 2, color: '#4682B4', fontWeight: 600 }}>Follow Me</Typography>
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
                    color: '#4682B4',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#87CEEB',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 5px 15px rgba(135, 206, 235, 0.3)',
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: '#34495e', opacity: 0.8 }}>
              © {new Date().getFullYear()} Prabhat Mishra. All rights reserved.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
