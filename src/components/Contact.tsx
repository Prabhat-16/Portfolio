import React from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton, Link } from '@mui/material';
import { Email, Phone, LinkedIn, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 70%, rgba(0,188,212,0.1) 0%, rgba(0,188,212,0) 50%)',
          zIndex: 0,
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Contact Me
          </Typography>

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
                    background: 'linear-gradient(135deg, #132f4c 0%, #0a1929 100%)',
                    border: '1px solid rgba(0, 188, 212, 0.1)',
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(0, 188, 212, 0.2)',
                    },
                  }}
                >
                  <Grid container spacing={3}>
                    {[
                      { 
                        icon: <Email />, 
                        title: 'Email',
                        content: 'mprabhat1607@gmail.com',
                        link: 'mailto:mprabhat1607@gmail.com',
                      },
                      {
                        icon: <Phone />,
                        title: 'Phone',
                        content: '+91 7990676099',
                        link: 'tel:+917990676099',
                      },
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
                    ].map((item, index) => (
                      <Grid item xs={12} sm={6} key={item.title}>
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Box 
                            sx={{ 
                              display: 'flex', 
                              alignItems: 'flex-start',
                              p: 2,
                              borderRadius: 2,
                              background: 'rgba(0, 188, 212, 0.05)',
                              transition: 'all 0.3s ease',
                              wordBreak: 'break-word',
                              '&:hover': {
                                background: 'rgba(0, 188, 212, 0.1)',
                              },
                            }}
                          >
                            <IconButton color="primary" sx={{ mr: 2 }}>
                              {item.icon}
                            </IconButton>
                            <Box>
                              <Typography 
                                variant="h6" 
                                sx={{ color: 'primary.light', fontWeight: 'bold' }}
                              >
                                {item.title}
                              </Typography>
                              {item.link ? (
                                <Link
                                  href={item.link}
                                  target={item.title === 'LinkedIn' ? '_blank' : undefined}
                                  rel={item.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                                  sx={{
                                    color: 'text.secondary',
                                    textDecoration: 'none',
                                    display: 'block',
                                    wordBreak: 'break-word',
                                    overflowWrap: 'break-word',
                                    '&:hover': {
                                      color: 'primary.main',
                                      textDecoration: 'underline',
                                    },
                                  }}
                                >
                                  {item.content}
                                </Link>
                              ) : (
                                <Typography color="text.secondary" sx={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                                  {item.content}
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Typography variant="body1" sx={{ color: 'text.secondary', opacity: 0.8 }}>
                © {new Date().getFullYear()} Prabhat Mishra. All rights reserved.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
