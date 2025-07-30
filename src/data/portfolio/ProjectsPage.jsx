import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Box,
  Grid,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import Port1 from "../../images/portfolio1.png";
import Port2 from "../../images/portfolio2.png";
import Port3 from "../../images/portfolio3.png";

// Sample project data (no changes needed here for fluidity)
const webProjects = [
  {
    id: 1,
    title: "Farm Purchases and Rental System",
    description:
      "A full-featured online platform for selling, buying, and renting farm lands.",
    image: Port1,
    path: "https://farm-sell-system.netlify.app",
    type: "web",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and MUI",
    image: Port3,
    path: "https://innocportfolio.netlify.app",
    type: "web",
  },
  {
    id: 3,
    title: "Simple music web app",
    description:
      "a responsive web application for managing and playing music playlists built with only HTML and CSS.",
    image: Port1,
    path: "/projects/task-manager",
    type: "web",
  },
];

const uiUxDesigns = [
  {
    id: 5,
    title: "Mobile App Redesign - Food Delivery",
    description:
      "Improved user flow and visual design for a food delivery application.",
    image: "https://source.unsplash.com/random/600x400/?foodappdesign",
    path: "/projects/food-app-redesign",
    type: "ui/ux",
  },
  {
    id: 6,
    title: "Website Concept - Sustainable Living",
    description:
      "UI/UX design for a website promoting eco-friendly products and practices.",
    image: "https://source.unsplash.com/random/600x400/?ecowebsite",
    path: "/projects/sustainable-living-concept",
    type: "ui/ux",
  },
  {
    id: 7,
    title: "Dashboard UI - Healthcare Analytics",
    description: "Intuitive dashboard design for visualizing healthcare data.",
    image: Port2,
    path: "/projects/healthcare-dashboard",
    type: "ui/ux",
  },
];

function ProjectsPage() {
  const [projectType, setProjectType] = useState("web");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleProjectTypeChange = (event, newType) => {
    if (newType !== null) {
      setProjectType(newType);
    }
  };

  const displayedProjects = projectType === "web" ? webProjects : uiUxDesigns;

  return (
    <Container maxWidth="lg" sx={{ py: 4, bgcolor: 'black', minHeight: '100vh' }}>
      <Typography
        variant={isSmallScreen ? "h4" : "h3"}
        gutterBottom
        sx={{
          mb: 4,
          fontWeight: "bold",
          // Blue gradient for the main heading (as per "very little blue in headings")
          background: "linear-gradient(90deg, #2196F3, #21CBF3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: 'center',
        }}
      >
        My Projects
      </Typography>

      <Box sx={{
        display: "flex",
        justifyContent: "center",
        mb: 4,
        flexWrap: isSmallScreen ? 'wrap' : 'nowrap',
      }}>
        <ToggleButtonGroup
          value={projectType}
          exclusive
          onChange={handleProjectTypeChange}
          aria-label="project type"
          sx={{
            '& .MuiToggleButton-root': {
              color: 'white', // White text for unselected buttons
              borderColor: 'rgba(255, 255, 255, 0.3)', // Subtle white border
              '&.Mui-selected': {
                // Blue gradient for the selected button (this is an active state, not hover)
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                color: 'white',
                fontWeight: 'bold',
                // No specific hover style for selected button, it will inherit default Material-UI hover
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle white/gray hover for unselected
              },
              px: isSmallScreen ? 1.5 : 3,
              py: isSmallScreen ? 0.8 : 1,
            },
            mb: isSmallScreen ? 2 : 0,
            gap: isSmallScreen ? 1 : 0,
          }}
        >
          <ToggleButton value="web" aria-label="web projects">
            Web Projects
          </ToggleButton>
          <ToggleButton value="ui/ux" aria-label="ui/ux designs">
            UI/UX Designs
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Grid container spacing={isSmallScreen ? 2 : 4}>
        {displayedProjects.map((project) => (
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

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
            // Blue gradient for the "Back to Home" button (fixed color)
            background: "linear-gradient(45deg, #2196F3, #21CBF3)",
            color: 'white',
            "&:hover": {
              transform: "translateY(-2px)",
              // Changed box shadow to be black/dark
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.4)",
              // Removed gradient inversion on hover to keep blue minimal
              // The default Material-UI hover will slightly darken the gradient
            },
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}

export default ProjectsPage;