import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton, Link, TextField, Button, Snackbar, Alert } from '@mui/material';
import { Email, Phone, LinkedIn, LocationOn, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(0, 188, 212, 0.3)',
      },
      '&:hover fieldset': {
        borderColor: 'primary.light',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary.main',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'text.secondary',
    },
    '& .MuiOutlinedInput-input': {
      color: 'text.primary',
    },
  };

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
      {/* Animated background elements */}
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
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
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
                    height: '100%',
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
                        link: 'https://linkedin.com/in/Prabhat',
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
                              height: '100%',
                              '&:hover': {
                                background: 'rgba(0, 188, 212, 0.1)',
                              },
                            }}
                          >
                            <IconButton 
                              color="primary" 
                              sx={{ 
                                mr: 2,
                                background: 'rgba(0, 188, 212, 0.1)',
                                '&:hover': {
                                  background: 'rgba(0, 188, 212, 0.2)',
                                },
                              }}
                            >
                              {item.icon}
                            </IconButton>
                            <Box>
                              <Typography 
                                variant="h6" 
                                sx={{ 
                                  color: 'primary.light',
                                  fontWeight: 'bold',
                                }}
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
                                    '&:hover': {
                                      color: 'primary.main',
                                      textDecoration: 'underline',
                                    },
                                  }}
                                >
                                  {item.content}
                                </Link>
                              ) : (
                                <Typography 
                                  color="text.secondary"
                                  sx={{
                                    wordBreak: 'break-word',
                                  }}
                                >
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

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(135deg, #132f4c 0%, #0a1929 100%)',
                    border: '1px solid rgba(0, 188, 212, 0.1)',
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(0, 188, 212, 0.2)',
                    },
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.light', mb: 3 }}>
                    Send Message
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={textFieldStyles}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={textFieldStyles}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={textFieldStyles}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={4}
                          variant="outlined"
                          sx={textFieldStyles}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<Send />}
                          sx={{
                            mt: 2,
                            background: 'linear-gradient(45deg, #00bcd4 30%, #008394 90%)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #008394 30%, #00bcd4 90%)',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
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
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  opacity: 0.8,
                }}
              >
                © {new Date().getFullYear()} Prabhat Mishra. All rights reserved.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 