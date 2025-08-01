import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';
import CloudBackground from './CloudBackground';

interface Project {
  title: string;
  description: string;
  duration: string;
  technologies: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    title: 'Web Billing Software',
    description: 'Developed a Web Billing Software enabling secure authentication, streamlined invoice generation, client management, and seamless payment processing. Implemented reporting, automation, and multi-platform access for efficient billing operations.',
    duration: 'Jan 2024 - Apr 2024',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    githubLink: 'https://github.com/Prabhat-16/WebBilling',
  },
  {
    title: 'Full-Stack Construction Project',
    description: 'Full-stack construction project developed in core PHP with MySQL. Implemented features such as project management, task management, document management, communication, and reporting. Built using best practices for scalability and maintainability.',
    duration: 'Aug 2023 - Sep 2023',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Prabhat-16/ConstructionWebsite',
  },
  {
    title: 'Movie Ticket Booking',
    description: 'Developed a responsive movie ticket booking website as a Frontend Developer. Built a client-facing platform for browsing movies, viewing showtimes, and booking tickets, along with an admin panel for managing schedules and ticket data.',
    duration: 'Sep 2024 - Dec 2024',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubLink: 'https://github.com/Prabhat-16/ONLINEMOVIEBOOKING',
  },
];

const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
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
              ☁️ My Projects
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
              Explore my projects that demonstrate modern development practices and scalable solutions.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card 
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(19, 47, 76, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 15px 40px rgba(59, 130, 246, 0.2)',
                        borderColor: 'rgba(59, 130, 246, 0.5)',
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          color: '#3b82f6',
                          fontWeight: 700,
                          fontFamily: '"Inter", sans-serif',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontSize: '0.9rem',
                          fontStyle: 'italic',
                          color: '#6366f1',
                          mb: 2,
                          opacity: 0.8,
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 400,
                          letterSpacing: '0.01em',
                        }}
                      >
                        {project.duration}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        paragraph
                        sx={{ 
                          color: '#ffffff',
                          mb: 2,
                          lineHeight: 1.6,
                          opacity: 0.9,
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 400,
                          letterSpacing: '0.01em',
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            sx={{
                              mr: 1,
                              mb: 1,
                              background: 'rgba(59, 130, 246, 0.1)',
                              border: '1px solid rgba(59, 130, 246, 0.3)',
                              color: '#3b82f6',
                              fontWeight: 500,
                              '&:hover': {
                                background: 'rgba(59, 130, 246, 0.2)',
                                borderColor: 'rgba(59, 130, 246, 0.5)',
                              }
                            }}
                            size="small"
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        startIcon={<GitHub />}
                        sx={{
                          background: 'linear-gradient(45deg, #3b82f6, #6366f1)',
                          color: '#ffffff',
                          borderRadius: '25px',
                          textTransform: 'none',
                          fontWeight: 600,
                          px: 3,
                          py: 1,
                          '&:hover': {
                            background: 'linear-gradient(45deg, #6366f1, #3b82f6)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                          }
                        }}
                      >
                        View Code
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 