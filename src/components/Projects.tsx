import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

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
        background: 'linear-gradient(135deg, #B0E0E6 0%, #E0F6FF 50%, #F0F8FF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated cloud background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(135,206,235,0.1) 0%, rgba(135,206,235,0) 50%)',
          zIndex: 0,
        }}
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

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
                color: '#4682B4',
                fontWeight: 'bold',
                position: 'relative',
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
              ☁️ My Projects
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
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(135, 206, 235, 0.3)',
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(135, 206, 235, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 15px 40px rgba(135, 206, 235, 0.2)',
                        borderColor: 'rgba(135, 206, 235, 0.5)',
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          color: '#4682B4',
                          fontWeight: 'bold',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontSize: '0.9rem',
                          fontStyle: 'italic',
                          color: '#5D8CAE',
                          mb: 2,
                        }}
                      >
                        {project.duration}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        paragraph
                        sx={{ 
                          color: '#2c3e50',
                          mb: 2,
                          lineHeight: 1.6,
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
                              background: 'rgba(135, 206, 235, 0.1)',
                              border: '1px solid rgba(135, 206, 235, 0.3)',
                              color: '#4682B4',
                              fontWeight: 500,
                              '&:hover': {
                                background: 'rgba(135, 206, 235, 0.2)',
                                borderColor: 'rgba(135, 206, 235, 0.5)',
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
                          background: 'linear-gradient(45deg, #87CEEB, #B0E0E6)',
                          color: '#2c3e50',
                          borderRadius: '25px',
                          textTransform: 'none',
                          fontWeight: 600,
                          px: 3,
                          py: 1,
                          '&:hover': {
                            background: 'linear-gradient(45deg, #B0E0E6, #87CEEB)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(135, 206, 235, 0.4)',
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