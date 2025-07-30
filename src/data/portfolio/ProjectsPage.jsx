// ProjectsDialog.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProjectCard from "./ProjectCard";
import Port1 from "../../images/portfolio1.png";
import Port2 from "../../images/portfolio2.png";
import Port3 from "../../images/portfolio3.png";

const webProjects = [
  {
    id: 1,
    title: "Farm Purchases and Rental System",
    description:
      "A full-featured online platform for selling, buying, and renting farm lands. This project involved extensive database design and a user-friendly frontend.",
    image: Port1,
    path: "https://farm-sell-system.netlify.app",
    type: "web",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React, Material-UI, and custom animations, showcasing my skills and projects elegantly.",
    image: Port3,
    path: "https://innocportfolio.netlify.app",
    type: "web",
  },
  {
    id: 3,
    title: "Simple Music Web App",
    description: "A lightweight, responsive music player web application crafted with pure HTML and CSS, demonstrating core web development skills.",
    image: Port1,
    path: "/projects/music-app", // Assuming a route for this project
    type: "web",
  },
  {
    id: 4,
    title: "E-commerce Storefront",
    description: "Developed a full-stack e-commerce solution, including product management, user authentication, and a secure checkout process.",
    image: Port2,
    path: "/projects/ecommerce-store",
    type: "web",
  },
  {
    id: 8,
    title: "Dynamic Blog Platform",
    description: "A robust blogging platform with authoring tools, commenting features, and content categorization, built for scalability.",
    image: Port3,
    path: "/projects/blog-platform",
    type: "web",
  },
];

const uiUxDesigns = [
  {
    id: 5,
    title: "Mobile App Redesign - Food Delivery",
    description: "Comprehensive UX research and UI redesign for a popular food delivery mobile application, focusing on user flow and visual appeal.",
    image: "https://source.unsplash.com/random/600x400/?foodappdesign",
    path: "/projects/food-app-redesign",
    type: "ui/ux",
  },
  {
    id: 6,
    title: "Website Concept - Sustainable Living",
    description: "UI/UX design for an eco-conscious e-commerce website, promoting sustainable products with an intuitive and clean interface.",
    image: "https://source.unsplash.com/random/600x400/?ecowebsite",
    path: "/projects/sustainable-living-concept",
    type: "ui/ux",
  },
  {
    id: 7,
    title: "Dashboard UI - Healthcare Analytics",
    description: "Designed a clean and efficient dashboard UI for visualizing complex healthcare data, ensuring clarity and ease of use for medical professionals.",
    image: Port2,
    path: "/projects/healthcare-dashboard",
    type: "ui/ux",
  },
  {
    id: 9,
    title: "Travel Booking Platform UI",
    description: "Created a comprehensive and user-friendly UI for a travel booking application, streamlining the search and reservation process.",
    image: "https://source.unsplash.com/random/600x400/?travelapp",
    path: "/projects/travel-ui",
    type: "ui/ux",
  },
  {
    id: 10,
    title: "Learning Management System UI",
    description: "Developed the user interface for an online learning management system (LMS), focusing on intuitive navigation and engaging learning experiences.",
    image: "https://source.unsplash.com/random/600x400/?lmsui",
    path: "/projects/lms-ui",
    type: "ui/ux",
  },
];

const ProjectsDialog = ({ open, handleClose }) => {
  const [projectType, setProjectType] = useState("web");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const displayedProjects = projectType === "web" ? webProjects : uiUxDesigns;

  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('forward'); // 'forward' or 'backward'

  // Auto-scrolling logic
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || displayedProjects.length === 0) return;

    // Reset index and direction when project type changes
    setCurrentSlideIndex(0);
    setScrollDirection('forward');
    scrollContainer.scrollLeft = 0; // Immediately reset scroll

    const startAutoScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }

      scrollIntervalRef.current = setInterval(() => {
        const totalSlides = displayedProjects.length;

        setCurrentSlideIndex(prevIndex => {
          let nextIndex = prevIndex;
          let newDirection = scrollDirection;

          if (scrollDirection === 'forward') {
            if (prevIndex < totalSlides - 1) {
              nextIndex = prevIndex + 1;
            } else { // Reached end, reverse direction
              nextIndex = prevIndex - 1;
              newDirection = 'backward';
            }
          } else { // Current direction is 'backward'
            if (prevIndex > 0) {
              nextIndex = prevIndex - 1;
            } else { // Reached beginning, reverse direction
              nextIndex = prevIndex + 1;
              newDirection = 'forward';
            }
          }

          setScrollDirection(newDirection); // Update direction state
          return nextIndex; // Return the new index
        });

      }, 4000); // Scroll every 4 seconds
    };

    startAutoScroll(); // Start auto-scroll initially

    // Cleanup function
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [projectType, displayedProjects.length, currentSlideIndex, scrollDirection]); // Added scrollDirection to dependencies

  // Effect to perform the scroll animation whenever currentSlideIndex changes
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && displayedProjects.length > 0) {
      const scrollAmount = currentSlideIndex * scrollContainer.clientWidth;
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentSlideIndex, displayedProjects.length]); // Scroll when index updates


  // Handler for project type change (resets auto-scroll and position)
  const handleProjectTypeChange = (event, newProjectType) => {
    if (newProjectType && newProjectType !== projectType) {
      setProjectType(newProjectType);
      // currentSlideIndex and scrollDirection will be reset by the useEffect above
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      PaperProps={{
        sx: {
          bgcolor: "#0a0a0a",
          color: "white",
          borderRadius: 2,
          boxShadow: "0 15px 40px rgba(33, 150, 243, 0.6)",
          maxHeight: '90vh',
          minHeight: '60vh',
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, bgcolor: "#121212", color: "white", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          My Projects
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ color: "white" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ bgcolor: "#121212", p: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 3,
          }}
        >
          <ToggleButtonGroup
            value={projectType}
            exclusive
            onChange={handleProjectTypeChange}
            sx={{
              "& .MuiToggleButton-root": {
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.3)",
                "&.Mui-selected": {
                  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                  color: "white",
                  fontWeight: "bold",
                },
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                px: isSmallScreen ? 1.5 : 3,
                py: isSmallScreen ? 0.8 : 1,
              },
              gap: isSmallScreen ? 1 : 0,
            }}
          >
            <ToggleButton value="web">Web Projects</ToggleButton>
            <ToggleButton value="ui/ux">UI/UX Designs</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Horizontal Scrolling Container for Projects */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            overflowX: 'scroll',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#2196F3',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#333',
            },
            p: { xs: 1, sm: 2, md: 3 },
            boxSizing: 'content-box',
          }}
        >
          {displayedProjects.map((project, index) => (
            <Box
              key={project.id}
              sx={{
                flexShrink: 0,
                width: '100%',
                scrollSnapAlign: 'start',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pb: 2,
              }}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                path={project.path}
              />
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsDialog;