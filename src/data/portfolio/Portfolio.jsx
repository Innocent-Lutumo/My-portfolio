// src/Portfolio.jsx (or wherever your main page component is located)
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Chip,
  Avatar,
  IconButton,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import DashboardIcon from "@mui/icons-material/Dashboard"; // For projects
import PersonIcon from "@mui/icons-material/Person"; // For the main profile icon on Contact button
import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material"; // Example icons for contact

// Import your actual data files. Adjust paths as necessary.
// Example: if Portfolio.jsx is in 'src/', and 'experience.js' is in 'src/'
import { experience as experiences } from "../../data/experience";
import { education as educationData } from "../../data/education";
import ContactDialog from "../../components/ContactDialog";
import ProjectsDialog from "./ProjectsPage"; // Adjust path to your ProjectsDialog component
// If you have skill data and project data, import them too
// import { skillsData } from './skillsData';
// import { projectsData } from './projectsData';

// Import the content components (using the new names for clarity, adjust if you prefer old ones)
import ExperienceContent from "../../components/ExperienceDialog"; // Adjust path
import EducationContent from "../../components/EducationDialog"; // Adjust path
// You'll need to create these if you want skills/projects in the right panel
// import SkillsContent from './components/SkillsContent';
// import ProjectsContent from './components/ProjectsContent';

// Placeholder for profile image - replace with your actual image path
import profileImage from "../../images/innoc.jpg"; // Adjust path to your image

const Portfolio = () => {
  const [openContact, setOpenContact] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  // State to manage which content is displayed in the right panel
  const [activeRightPanelContent, setActiveRightPanelContent] =
    useState("experience");

  // Function to determine which component to render in the right panel
  const renderRightPanelContent = () => {
    switch (activeRightPanelContent) {
      case "experience":
        return <ExperienceContent experience={experiences} />;
      case "education":
        return <EducationContent education={educationData} />;
      // Add cases for other content if you have them, e.g.:
      // case 'skills':
      //   return <SkillsContent skills={skillsData} />;
      // case 'projects':
      //   return <ProjectsContent projects={projectsData} />;
      default:
        return (
          <Box sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              Select an option to view details here.
            </Typography>
          </Box>
        );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#0a0a0a", // Dark background
        color: "white",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Left/Main Content Area */}
      <Box sx={{ flexGrow: 1, p: 4, maxWidth: "calc(100% - 400px)" }}>
        {" "}
        {/* Allocate space for right panel */}
        {/* Header (Top Left Logo and Top Right Contact) - as seen in your image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#6200EE" }}
          >
            = Innocent Felix Lutumo
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Mail />}
            onClick={() => setOpenContact(!openContact)}
            sx={{
              color: "#03DAC6",
              borderColor: "#03DAC6",
              "&:hover": {
                bgcolor: "rgba(3,218,198,0.1)",
                borderColor: "#03DAC6",
              },
            }}
          >
            CONTACT
          </Button>
        </Box>
        {/* Profile Card */}
        <Card
          sx={{
            bgcolor: "#1a1a1a",
            color: "white",
            borderRadius: 2,
            p: 3,
            mb: 4,
          }}
        >
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={profileImage}
              sx={{
                width: 120,
                height: 120,
                mr: 3,
                border: "2px solid #6200EE",
              }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                Web Developer & UI/UX Designer
              </Typography>
              <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
                Passionate full-stack developer dedicated to building elegant,
                scalable digital solutions with a focus on clean UI/UX.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <Chip
                  label="HTML5"
                  sx={{ bgcolor: "#E34F26", color: "white" }}
                  icon={
                    <Box
                      component="img"
                      src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                      sx={{ width: 16, height: 16 }}
                    />
                  }
                />
                <Chip
                  label="CSS3"
                  sx={{ bgcolor: "#1572B6", color: "white" }}
                  icon={
                    <Box
                      component="img"
                      src="https://img.icons8.com/color/48/000000/css3.png"
                      sx={{ width: 16, height: 16 }}
                    />
                  }
                />
                <Chip
                  label="JS"
                  sx={{ bgcolor: "#F7DF1E", color: "black" }}
                  icon={
                    <Box
                      component="img"
                      src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                      sx={{ width: 16, height: 16 }}
                    />
                  }
                />
                <Chip
                  label="React"
                  sx={{ bgcolor: "#61DAFB", color: "black" }}
                  icon={
                    <Box
                      component="img"
                      src="https://img.icons8.com/color/48/000000/react-native.png"
                      sx={{ width: 16, height: 16 }}
                    />
                  }
                />

                <Chip
                  label="Python"
                  sx={{ bgcolor: "#3776AB", color: "white" }}
                  icon={
                    <Box
                      component="img"
                      src="https://img.icons8.com/color/48/000000/python--v1.png"
                      sx={{ width: 16, height: 16 }}
                    />
                  }
                />
                <Chip
                  label="Django"
                  sx={{ bgcolor: "#092E20", color: "white" }}
                  icon={
                    <Box
                      component="img"
                      src="https://img.icons8.com/ios-filled/50/ffffff/django.png"
                      sx={{ width: 16, height: 16 }}
                    />
                  }
                />
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip
                  label="Dar es Salaam"
                  icon={<PersonIcon />}
                  sx={{ bgcolor: "#333", color: "white" }}
                />
                <Chip
                  label="+255 616 580 094"
                  icon={<Phone />}
                  sx={{ bgcolor: "#333", color: "white" }}
                />
                <Chip
                  label="innocmg23@example.com"
                  icon={<Mail />}
                  sx={{ bgcolor: "#333", color: "white" }}
                />
              </Stack>
            </Box>
          </CardContent>
        </Card>
        {/* Skills and Projects Cards */}
        <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
          <Card
            sx={{
              flex: 1,
              bgcolor: "#1a1a1a",
              color: "white",
              borderRadius: 2,
              p: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Core competencies and tools I use.
              </Typography>
              <Button
                variant="contained"
                startIcon={<CodeIcon />}
                onClick={() => setActiveRightPanelContent("skills")}
                sx={{
                  bgcolor: "#6200EE",
                  "&:hover": { bgcolor: "#4B00B2" },
                  color: "white",
                }}
              >
                VIEW ALL SKILLS
              </Button>
            </CardContent>
          </Card>
          <Card
            sx={{
              flex: 1,
              bgcolor: "#1a1a1a",
              color: "white",
              borderRadius: 2,
              p: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Showcasing my professional work.
              </Typography>
              <Button
                onClick={() => setOpenProjects(true)}
                variant="contained"
                startIcon={<DashboardIcon />}
                sx={{
                  bgcolor: "#03DAC6",
                  "&:hover": { bgcolor: "#02B8A2" },
                  color: "black",
                }}
              >
                VIEW PROJECTS
              </Button>
            </CardContent>
          </Card>
        </Stack>
        {/* Professional Journey Section (Experience and Education Buttons) */}
        <Card
          sx={{
            bgcolor: "#1a1a1a",
            color: "white",
            borderRadius: 2,
            p: 3,
            mb: 4,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Professional Journey
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Button
              variant={
                activeRightPanelContent === "experience"
                  ? "contained"
                  : "outlined"
              }
              startIcon={<BusinessCenterIcon />}
              onClick={() => setActiveRightPanelContent("experience")}
              sx={{
                bgcolor:
                  activeRightPanelContent === "experience"
                    ? "#6200EE"
                    : "transparent",
                color:
                  activeRightPanelContent === "experience"
                    ? "white"
                    : "#6200EE",
                borderColor: "#6200EE",
                "&:hover": {
                  bgcolor:
                    activeRightPanelContent === "experience"
                      ? "#4B00B2"
                      : "rgba(98,0,238,0.1)",
                  borderColor: "#4B00B2",
                },
              }}
            >
              VIEW EXPERIENCE
            </Button>
            <Button
              variant={
                activeRightPanelContent === "education"
                  ? "contained"
                  : "outlined"
              }
              startIcon={<SchoolIcon />}
              onClick={() => setActiveRightPanelContent("education")}
              sx={{
                bgcolor:
                  activeRightPanelContent === "education"
                    ? "#03DAC6"
                    : "transparent",
                color:
                  activeRightPanelContent === "education" ? "black" : "#03DAC6",
                borderColor: "#03DAC6",
                "&:hover": {
                  bgcolor:
                    activeRightPanelContent === "education"
                      ? "#02B8A2"
                      : "rgba(3,218,198,0.1)",
                  borderColor: "#02B8A2",
                },
              }}
            >
              VIEW EDUCATION
            </Button>
          </Stack>
          <Typography variant="body2" sx={{ color: "white" }}>
            Click to explore detailed work history and academic background
          </Typography>
        </Card>
        {/* Social Media/Contact Footer (Example) */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <IconButton
            href="https://github.com/Innocent-Lutumo/"
            target="_blank"
            sx={{ color: "white", mx: 1 }}
          >
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/innocent-lutumo-56969b35b/"
            target="_blank"
            sx={{ color: "white", mx: 1 }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          {/* Add more social icons */}
          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, color: "white" }}
          >
            © {new Date().getFullYear()} Innocent Lutumo. All rights reserved.
          </Typography>
        </Box>
      </Box>

      {/* Contact Dialog Component */}
      <ContactDialog open={openContact} onClose={() => setOpenContact(false)} />

      {/* Projects Dialog Component */}
      <ProjectsDialog
        open={openProjects}
        handleClose={() => setOpenProjects(false)}
      />

      {/* Right-Hand Dynamic Content Panel */}
      <Box
        sx={{
          width: "400px", // Fixed width for the dynamic panel
          flexShrink: 0, // Prevent it from shrinking
          bgcolor: "#121212", // A slightly different dark background for the panel
          boxShadow: "-4px 0 10px rgba(0,0,0,0.5)", // Optional shadow for visual separation
          overflowY: "auto", // Enable vertical scrolling if content overflows
          p: 2, // Padding inside the panel
          borderLeft: "1px solid rgba(255,255,255,0.1)", // Subtle border
        }}
      >
        {renderRightPanelContent()}
      </Box>

      {/* Scroll to Top Button (from your image) */}
      <IconButton
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "#6200EE",
          color: "white",
          "&:hover": { bgcolor: "#4B00B2" },
          zIndex: 999,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Typography variant="caption" sx={{ transform: "rotate(-90deg)" }}>
          ^
        </Typography>
        <Typography variant="caption" sx={{ transform: "rotate(-90deg)" }}>
          ^
        </Typography>
      </IconButton>
    </Box>
  );
};

export default Portfolio;
