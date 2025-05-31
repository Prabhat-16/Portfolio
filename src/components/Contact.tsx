import React from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton, Link } from '@mui/material';
import { Email, LinkedIn, LocationOn, GitHub, Twitter, Instagram } from '@mui/icons-material';
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
                <Paper elevation={3} sx={{ p: 4, background: 'linear-gradient(135deg, #132f4c 0%, #0a1929 100%)', border: '1px solid rgba(0, 188, 212, 0.1)' }}>
                  <Grid container spacing={3}>
                    {/* Email - full width */}
                    {/* Email - full width and centered */}
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
        background: 'rgba(0, 188, 212, 0.05)',
        transition: 'all 0.3s ease',
        width: '100%',
        maxWidth: 600,
        wordBreak: 'break-word',
      }}
    >
      {/* Top row: icon + label */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <IconButton color="primary" sx={{ p: 0, mr: 1 }}>
          <Email />
        </IconButton>
        <Typography variant="h6" sx={{ color: 'primary.light', fontWeight: 'bold' }}>
          Email
        </Typography>
      </Box>

      {/* Email address centered below */}
      <Link
        href="mailto:mprabhat1607@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'text.secondary', textDecoration: 'none', fontSize: '1rem' }}
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
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 2, borderRadius: 2, background: 'rgba(0, 188, 212, 0.05)', transition: 'all 0.3s ease' }}>
                          <IconButton color="primary" sx={{ mr: 2 }}>
                            {item.icon}
                          </IconButton>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ color: 'primary.light', fontWeight: 'bold' }}>
                              {item.title}
                            </Typography>
                            {item.link ? (
                              <Link href={item.link} target="_blank" rel="noopener noreferrer" sx={{ color: 'text.secondary', textDecoration: 'none' }}>
                                {item.content}
                              </Link>
                            ) : (
                              <Typography color="text.secondary">{item.content}</Typography>
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
            <Typography variant="h5" sx={{ mb: 2 }}>Follow Me</Typography>
            <Box>
              {[{ icon: <Twitter />, link: 'https://x.com/PRABHAT160703' },
                { icon: <Instagram />, link: 'https://www.instagram.com/iamprabhatmishraa' },
                { icon: <GitHub />, link: 'https://github.com/Prabhat-16' },
              ].map((social, index) => (
                <IconButton key={index} href={social.link} target="_blank" rel="noopener noreferrer" sx={{ mx: 1, color: 'primary.main' }}>
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', opacity: 0.8 }}>
              © {new Date().getFullYear()} Prabhat Mishra. All rights reserved.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
