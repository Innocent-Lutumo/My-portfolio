import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box, Grid, Container } from '@mui/material';
import ProjectCard from './ProjectCard';

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment integration",
    image: "https://source.unsplash.com/random/600x400/?ecommerce",
    path: "/projects/ecommerce"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and MUI",
    image: "https://source.unsplash.com/random/600x400/?portfolio",
    path: "/projects/portfolio"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Kanban-style task organizer with drag-and-drop",
    image: "https://source.unsplash.com/random/600x400/?tasks",
    path: "/projects/task-manager"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    image: "https://source.unsplash.com/random/600x400/?dashboard",
    path: "/projects/dashboard"
  },
];

function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ 
        mb: 4,
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        My Projects
      </Typography>
      
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
            <ProjectCard 
              title={project.title}
              image={project.image}
              description={project.description}
              path={project.path}
            />
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button 
          component={Link} 
          to="/" 
          variant="contained"
          sx={{ 
            px: 4,
            py: 1.5,
            borderRadius: 2,
            background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 5px 15px rgba(33, 150, 243, 0.4)'
            }
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}

export default ProjectsPage;