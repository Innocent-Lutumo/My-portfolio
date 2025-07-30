import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, image, description, path }) => {
  return (
    <Card sx={{ 
      width: 350,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'rgba(30, 30, 30, 0.8)',
      color: 'white',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button 
          component={Link} 
          to={path} 
          size="small" 
          variant="outlined"
          sx={{ 
            color: '#2196F3',
            borderColor: '#2196F3',
            '&:hover': {
              backgroundColor: 'rgba(33, 150, 243, 0.1)',
              borderColor: '#2196F3'
            }
          }}
        >
          View Project
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;