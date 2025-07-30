import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, image, description, path }) => {
  return (
    <Card sx={{
      maxWidth: 450,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: '#1a1a1a', // Dark black background for the card
      color: 'white', // White text for general content
      borderRadius: 2,
      overflow: 'hidden',
      position: 'relative',
      transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
      '&:hover': {
        transform: 'translateY(-12px)',
        boxShadow: '0 15px 30px rgba(0,0,0,0.6)', // Darker shadow for black background
      },
      // Removed the blue gradient border on hover
      // '&::before': { ... } and '&:hover::before': { ... } are removed
    }}>
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: 'bold',
            // Blue gradient for the title (as per "very little blue in headings")
            background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 3, pt: 0 }}>
        <Button
          component={Link}
          to={path}
          size="medium"
          variant="contained"
          sx={{
            px: 3,
            py: 1.2,
            borderRadius: 1.5,
            // Keeping button background blue as an accent, but removing blue hover effect
            background: '#2196F3', // Primary blue
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)', // Black/dark shadow
            transition: 'background 0.3s ease-in-out, transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              background: '#1976D2', // A slightly darker blue on hover (minimal blue change)
              transform: 'scale(1.02)',
              boxShadow: '0 5px 8px 3px rgba(0, 0, 0, 0.5)', // More prominent black/dark shadow
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