import React from 'react';
import { Box, Container, Typography, Button, Paper, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Download, WorkOutline, SchoolOutlined, EmojiEventsOutlined } from '@mui/icons-material';

const Resume: React.FC = () => {
  const highlights = [
    {
      icon: <SchoolOutlined />,
      title: "MCA Student",
      description: "Master's in Computer Applications at MIT World Peace University",
      color: "#6366f1"
    },
    {
      icon: <WorkOutline />,
      title: "Professional Experience",
      description: "Trainee Web Developer at Tryon Infosoft with Agile experience",
      color: "#8b5cf6"
    },
    {
      icon: <EmojiEventsOutlined />,
      title: "Active Volunteer",
      description: "AWS Cloud Club Tech Member & Tech Innovators Web Dev Lead",
      color: "#ec4899"
    }
  ];

  return (
    <Box
      id="resume"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.05) 0%, transparent 50%)',
        overflow: 'hidden',
      }}
    >
      {/* Floating geometric shapes */}
      {[...Array(4)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: { xs: 40, md: 60 },
            height: { xs: 40, md: 60 },
            borderRadius: i % 2 === 0 ? '50%' : '20%',
            background: `linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)`,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(236, 72, 153, 0.2)',
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${15 + i * 20}%`,
            right: `${5 + i * 10}%`,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 2,
                }}
              >
                📄 My Resume
              </Typography>
              <Box
                sx={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
                  borderRadius: '2px',
                  mx: 'auto',
                  mb: 3,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: '#cbd5e1',
                  maxWidth: '600px',
                  mx: 'auto',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                Download my comprehensive resume to explore my educational background, 
                professional experience at Tryon Infosoft, and technical projects.
              </Typography>
            </motion.div>
          </Box>

          {/* Highlights Grid */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={4} key={highlight.title}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(30, 41, 59, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(236, 72, 153, 0.2)',
                      borderRadius: '24px',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.4)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '20px',
                          background: `${highlight.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          color: highlight.color,
                          fontSize: '2.5rem',
                        }}
                      >
                        {highlight.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: '#f1f5f9',
                        }}
                      >
                        {highlight.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#cbd5e1',
                          lineHeight: 1.6,
                        }}
                      >
                        {highlight.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Download Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 6,
                textAlign: 'center',
                background: 'rgba(30, 41, 59, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(236, 72, 153, 0.2)',
                borderRadius: '32px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#f1f5f9',
                }}
              >
                Ready to Learn More?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#cbd5e1',
                  mb: 4,
                  fontSize: '1.1rem',
                  maxWidth: '500px',
                  mx: 'auto',
                }}
              >
                Get the complete picture of my educational background (MCA from MIT-WPU), 
                professional experience, technical skills, and project portfolio.
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                onClick={() => {
                  window.open('/Prabhat-Resume.pdf', '_blank');
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                  boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 20px 40px -5px rgba(236, 72, 153, 0.6)',
                  },
                }}
              >
                Download Resume
              </Button>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resume;