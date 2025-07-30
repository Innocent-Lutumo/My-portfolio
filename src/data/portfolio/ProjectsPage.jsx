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
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import Port1 from "../../images/portfolio1.png";
import Port2 from "../../images/portfolio2.png";

// Sample project data
const webProjects = [
  {
    id: 1,
    title: "Farm Purchases and Rental System",
    description: "A full-featured online platform for selling, buying, and renting farm lands.",
    image: Port1,
    path: "/projects/ecommerce",
    type: "web",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and MUI",
    image: Port2,
    path: "/projects/portfolio",
    type: "web",
  },
  {
    id: 3,
    title: "Simple music web app",
    description: "a responsive web application for managing and playing music playlists built with only HTML and CSS.",
    image: Port1,
    path: "/projects/task-manager",
    type: "web",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    image: "https://source.unsplash.com/random/600x400/?dashboard",
    path: "/projects/dashboard",
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
  const [projectType, setProjectType] = useState("web"); // 'web' or 'ui/ux'

  const handleProjectTypeChange = (event, newType) => {
    if (newType !== null) {
      setProjectType(newType);
    }
  };

  const displayedProjects = projectType === "web" ? webProjects : uiUxDesigns;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          mb: 4,
          fontWeight: "bold",
          background: "linear-gradient(90deg, #2196F3, #21CBF3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Projects
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <ToggleButtonGroup
          value={projectType}
          exclusive
          onChange={handleProjectTypeChange}
          aria-label="project type"
        >
          <ToggleButton
            value="web"
            aria-label="web projects"
            sx={{ color: "white" }}
          >
            Web Projects
          </ToggleButton>
          <ToggleButton
            value="ui/ux"
            aria-label="ui/ux designs"
            sx={{ color: "white" }}
          >
            UI/UX Designs
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Grid container spacing={4}>
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
            background: "linear-gradient(45deg, #2196F3, #21CBF3)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 5px 15px rgba(33, 150, 243, 0.4)",
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
