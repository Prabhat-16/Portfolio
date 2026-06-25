import React from 'react';
import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Download, WorkOutline, SchoolOutlined, EmojiEventsOutlined } from '@mui/icons-material';

const Resume: React.FC = () => {
  const highlights = [
    {
      icon: <SchoolOutlined />,
      title: "MCA",
      description: "MIT World Peace University (Completed 2026)",
      color: "#4ade80"
    },
    {
      icon: <WorkOutline />,
      title: "Experience",
      description: "Trainee Web Developer @ Tryon Infosoft",
      color: "#38bdf8"
    },
    {
      icon: <EmojiEventsOutlined />,
      title: "Volunteer",
      description: "AWS Cloud Club Tech Member",
      color: "#4ade80"
    }
  ];

  return (
    <Box
      id="resume"
      sx={{
        py: 12,
        bgcolor: 'transparent',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          {/* Section Header */}
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800,
                color: '#4ade80',
                fontFamily: "'Fira Code', monospace",
                textShadow: '0 0 20px rgba(74, 222, 128, 0.3)'
              }}
            >
              {">"} My Resume
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', bgcolor: 'rgba(74, 222, 128, 0.2)' }} />
          </Box>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={4} key={highlight.title}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      bgcolor: '#0f172a',
                      border: '1px solid #1e293b',
                      borderRadius: '4px',
                      height: '100%',
                      '&:hover': { borderColor: highlight.color }
                    }}
                  >
                    <Box sx={{ color: highlight.color, fontSize: '2rem', mb: 2 }}>
                      {highlight.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#f1f5f9',
                        fontWeight: 700,
                        fontFamily: "'Fira Code', monospace",
                        mb: 1
                      }}
                    >
                      {highlight.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        fontFamily: "'Fira Code', monospace"
                      }}
                    >
                      {highlight.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: 'center',
              bgcolor: 'rgba(15, 23, 42, 0.5)',
              border: '1px dashed #1e293b',
              borderRadius: '4px'
            }}
          >
            <Typography sx={{ color: '#4ade80', mb: 2, fontFamily: "'Fira Code', monospace" }}>
              $ ./download_cv.sh --format=pdf
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#94a3b8',
                mb: 4,
                fontFamily: "'Fira Code', monospace",
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Interested in a more detailed overview of my experience, projects, and certifications?
            </Typography>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Download />}
              onClick={() => {
                window.open('/Prabhat-Resume.pdf', '_blank');
              }}
              sx={{
                px: 4,
                py: 1.5,
                color: '#4ade80',
                borderColor: '#4ade80',
                fontFamily: "'Fira Code', monospace",
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#38bdf8',
                  color: '#38bdf8',
                  bgcolor: 'rgba(56, 189, 248, 0.05)'
                }
              }}
            >
              [get_resume.pdf]
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resume;
