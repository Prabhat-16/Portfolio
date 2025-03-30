import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

interface Project {
  title: string;
  description: string;
  duration: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'Web Billing Software',
    description: 'Developed a Web Billing Software enabling secure authentication, streamlined invoice generation, client management, and seamless payment processing. Implemented reporting, automation, and multi-platform access for efficient billing operations.',
    duration: 'Jan 2024 - Apr 2024',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Full-Stack Construction Project',
    description: 'Full-stack construction project developed in core PHP with MySQL. Implemented features such as project management, task management, document management, communication, and reporting. Built using best practices for scalability and maintainability.',
    duration: 'Aug 2023 - Sep 2023',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Movie Ticket Booking',
    description: 'Developed a responsive movie ticket booking website as a Frontend Developer. Built a client-facing platform for browsing movies, viewing showtimes, and booking tickets, along with an admin panel for managing schedules and ticket data.',
    duration: 'Sep 2024 - Dec 2024',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
];

const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0,188,212,0.1) 0%, rgba(0,188,212,0) 50%)',
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
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Projects
          </Typography>

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
                      background: 'linear-gradient(135deg, #132f4c 0%, #0a1929 100%)',
                      border: '1px solid rgba(0, 188, 212, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 0 20px rgba(0, 188, 212, 0.3)',
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          color: 'primary.light',
                          fontWeight: 'bold',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        color="text.secondary" 
                        gutterBottom
                        sx={{ 
                          fontSize: '0.9rem',
                          fontStyle: 'italic',
                        }}
                      >
                        {project.duration}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        paragraph
                        sx={{ 
                          color: 'text.primary',
                          mb: 2,
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
                              background: 'rgba(0, 188, 212, 0.1)',
                              border: '1px solid rgba(0, 188, 212, 0.3)',
                              color: 'primary.light',
                            }}
                            size="small"
                          />
                        ))}
                      </Box>
                    </CardContent>
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