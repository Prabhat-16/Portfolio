import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Download } from '@mui/icons-material';

const Resume: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="resume"
      sx={{
        py: 4,
        background: 'transparent',
        position: 'relative',
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 3
          }}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              align="center"
              sx={{ 
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                mb: 1,
              }}
            >
              📄 Resume
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: theme.palette.text.secondary,
                textAlign: 'center',
                maxWidth: '400px',
                mx: 'auto',
                fontSize: '1rem',
                mb: 3,
              }}
            >
              Download my resume to learn more about my experience and skills
            </Typography>
          </Box>

          {/* Download Resume Button */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="medium"
              startIcon={<Download />}
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: theme.palette.mode === 'dark' ? '#ffffff' : '#2c3e50',
                px: 3,
                py: 1,
                borderRadius: '20px',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                },
              }}
              onClick={() => {
                // Add your resume download link here
                window.open('/Prabhat-Resume.pdf', '_blank');
              }}
            >
              Download Resume
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resume; 