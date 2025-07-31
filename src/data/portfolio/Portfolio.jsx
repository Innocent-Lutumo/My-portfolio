// src/Portfolio.jsx
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
  useMediaQuery,
  useTheme,
  Dialog, // Import Dialog for a potential future mobile-specific view
  DialogContent,
  DialogTitle,
  Slide, // For smoother dialog transition
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'; // For dialog close button
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";
import { experience as experiences } from "../../data/experience";
import { education as educationData } from "../../data/education";
import { skillsData } from "../skills"; // Ensure this path is correct, should be a data file like ../data/skillsData
import ContactDialog from "../../components/ContactDialog";
import ProjectsDialog from "./ProjectsPage"; // Assuming this handles its own dialog
import ExperienceContent from "../../components/ExperienceDialog"; // Assuming this is a component that renders the actual experience cards/list
import EducationContent from "../../components/EducationDialog"; // Assuming this is a component that renders the actual education cards/list
import SkillsContent from "../../components/SkillsContent"; // This should be the component that maps and renders SkillCards
import profileImage from "../../images/innoc.jpg";

// Optional: Define a transition for dialogs
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Portfolio = () => {
  const [openContact, setOpenContact] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  // State to manage which content is displayed in the right panel (desktop)
  // and which dialog is open for content on mobile
  const [activeDesktopPanelContent, setActiveDesktopPanelContent] = useState("experience");
  const [openMobileContentDialog, setOpenMobileContentDialog] = useState(false);
  const [mobileDialogContentType, setMobileDialogContentType] = useState(null); // 'experience', 'education', 'skills'

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // True for screens <= 600px
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // True for screens <= 900px

  // Function to determine which component to render in the right panel (desktop)
  const renderDesktopPanelContent = () => {
    switch (activeDesktopPanelContent) {
      case "experience":
        return <ExperienceContent experience={experiences} />;
      case "education":
        return <EducationContent education={educationData} />;
      case 'skills':
        return <SkillsContent skills={skillsData} />;
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

  // Function to determine which component to render inside the mobile dialog
  const renderMobileDialogContent = () => {
    switch (mobileDialogContentType) {
      case "experience":
        return <ExperienceContent experience={experiences} />;
      case "education":
        return <EducationContent education={educationData} />;
      case 'skills':
        return <SkillsContent skills={skillsData} />;
      default:
        return null;
    }
  };

  // Handler for opening content dialog on mobile
  const handleOpenMobileContent = (contentType) => {
    setMobileDialogContentType(contentType);
    setOpenMobileContentDialog(true);
  };

  const handleCloseMobileContent = () => {
    setOpenMobileContentDialog(false);
    setMobileDialogContentType(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile/tablet, side-by-side on desktop
        minHeight: "100vh",
        bgcolor: "#0a0a0a", // Dark background
        color: "white",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Left/Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          // Enhanced responsive padding for a stunning look on all devices
          p: {
            xs: 2, // 16px padding on extra-small screens (phones)
            sm: 3, // 24px padding on small screens (larger phones/tablets)
            md: 4, // 32px padding on medium and larger screens (desktops)
          },
          maxWidth: { xs: "100%", md: "calc(100% - 400px)" }, // Full width on mobile/tablet, reduced on desktop
        }}
      >
        {/* Header (Top Left Logo and Top Right Contact) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on xs, row on sm+
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" }, // Align items
            mb: { xs: 3, sm: 4 }, // Slightly less margin on mobile for compactness
            gap: { xs: 2, sm: 0 }, // Gap for stacked items on xs
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#6200EE",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.125rem" }, // Responsive font size
            }}
          >
            = Innocent Felix Lutumo
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Mail />}
            onClick={() => setOpenContact(!openContact)}
            sx={{
              width: { xs: '100%', sm: 'auto' }, // Full width on xs, auto on sm+
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
            borderRadius: 3, // Slightly more rounded corners
            p: { xs: 2, sm: 3, md: 4 }, // Enhanced responsive padding
            mb: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)", // Stronger initial shadow
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack on xs, row on sm+
              alignItems: { xs: "center", sm: "flex-start" }, // Center avatar on xs
              textAlign: { xs: "center", sm: "left" }, // Center text on xs
            }}
          >
            <Avatar
              src={profileImage}
              sx={{
                width: { xs: 100, sm: 120 }, // Responsive avatar size
                height: { xs: 100, sm: 120 },
                mr: { xs: 0, sm: 3 }, // No margin right on xs, 3 on sm+
                mb: { xs: 2, sm: 0 }, // Margin bottom on xs, none on sm+
                border: "3px solid #6200EE", // Slightly thicker border
                boxShadow: "0 0 15px rgba(98,0,238,0.6)", // Glow effect around avatar
              }}
            />
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2.125rem" }, // Responsive font size
                }}
              >
                Web Developer & UI/UX Designer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  mb: { xs: 2, sm: 3 }, // More space on larger screens
                  fontSize: { xs: "0.9rem", sm: "1rem" }, // Slightly smaller text on mobile
                }}
              >
                Passionate full-stack developer dedicated to building elegant,
                scalable digital solutions with a focus on clean UI/UX.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }} // Stack on xs, row on sm+
                spacing={1}
                sx={{ mb: 2, flexWrap: "wrap", justifyContent: { xs: "center", sm: "flex-start" }, gap: { xs: '8px 4px', sm: '8px' } }} // Finer gap control
              >
                {/* Re-using your Chips - they are already well-styled */}
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
              <Stack
                direction={{ xs: "column", sm: "row" }} // Stack on xs, row on sm+
                spacing={1}
                flexWrap="wrap"
                justifyContent={{ xs: "center", sm: "flex-start" }} // Center chips on xs
                mt={2} // Add some top margin to separate from tech chips
              >
                <Chip
                  label="Dar es Salaam"
                  icon={<PersonIcon />}
                  sx={{ bgcolor: "#333", color: "white", width: { xs: '100%', sm: 'auto' } }} // Full width on xs
                />
                <Chip
                  label="+255 616 580 094"
                  icon={<Phone />}
                  sx={{ bgcolor: "#333", color: "white", width: { xs: '100%', sm: 'auto' } }} // Full width on xs
                />
                <Chip
                  label="innocmg23@example.com"
                  icon={<Mail />}
                  sx={{ bgcolor: "#333", color: "white", width: { xs: '100%', sm: 'auto' } }} // Full width on xs
                />
              </Stack>
            </Box>
          </CardContent>
        </Card>

        {/* Skills and Projects Cards */}
        <Stack
          direction={{ xs: "column", sm: "row" }} // Stack on xs, row on sm+
          spacing={3}
          sx={{ mb: 4 }}
        >
          <Card
            sx={{
              flex: 1,
              bgcolor: "#1a1a1a",
              color: "white",
              borderRadius: 3, // Consistent border radius
              p: 2,
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)", // Deeper shadow
              "&:hover": {
                transform: "translateY(-5px)", // Slight lift on hover
                boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
              },
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                Core competencies and tools I use.
              </Typography>
              <Button
                variant="contained"
                startIcon={<CodeIcon />}
                // Conditionally handle click based on screen size
                onClick={() => (isTablet ? handleOpenMobileContent("skills") : setActiveDesktopPanelContent("skills"))}
                sx={{
                  bgcolor: "#6200EE",
                  "&:hover": { bgcolor: "#4B00B2" },
                  color: "white",
                  width: { xs: '100%', sm: 'auto' }, // Full width on xs
                  mt: 2, // Margin top for button
                  py: 1.5, // Taller button for better tapability
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
              borderRadius: 3, // Consistent border radius
              p: 2,
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)", // Deeper shadow
              "&:hover": {
                transform: "translateY(-5px)", // Slight lift on hover
                boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
              },
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                Showcasing my professional work.
              </Typography>
              <Button
                onClick={() => setOpenProjects(true)} // Projects always opens a dialog
                variant="contained"
                startIcon={<DashboardIcon />}
                sx={{
                  bgcolor: "#03DAC6",
                  "&:hover": { bgcolor: "#02B8A2" },
                  color: "black",
                  width: { xs: '100%', sm: 'auto' }, // Full width on xs
                  mt: 2, // Margin top for button
                  py: 1.5, // Taller button for better tapability
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
            borderRadius: 3, // Consistent border radius
            p: { xs: 2, sm: 3, md: 4 }, // Enhanced responsive padding
            mb: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)", // Stronger initial shadow
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Professional Journey
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }} // Stack on xs, row on sm+
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Button
              variant={
                activeDesktopPanelContent === "experience"
                  ? "contained"
                  : "outlined"
              }
              startIcon={<BusinessCenterIcon />}
              // Conditionally handle click based on screen size
              onClick={() => (isTablet ? handleOpenMobileContent("experience") : setActiveDesktopPanelContent("experience"))}
              sx={{
                flex: { xs: 'auto', sm: 1 }, // Auto width on xs, flex 1 on sm+
                bgcolor:
                  activeDesktopPanelContent === "experience"
                    ? "#6200EE"
                    : "transparent",
                color:
                  activeDesktopPanelContent === "experience"
                    ? "white"
                    : "#6200EE",
                borderColor: "#6200EE",
                "&:hover": {
                  bgcolor:
                    activeDesktopPanelContent === "experience"
                      ? "#4B00B2"
                      : "rgba(98,0,238,0.1)",
                  borderColor: "#4B00B2",
                },
                py: 1.5, // Taller button
              }}
            >
              VIEW EXPERIENCE
            </Button>
            <Button
              variant={
                activeDesktopPanelContent === "education"
                  ? "contained"
                  : "outlined"
              }
              startIcon={<SchoolIcon />}
              // Conditionally handle click based on screen size
              onClick={() => (isTablet ? handleOpenMobileContent("education") : setActiveDesktopPanelContent("education"))}
              sx={{
                flex: { xs: 'auto', sm: 1 }, // Auto width on xs, flex 1 on sm+
                bgcolor:
                  activeDesktopPanelContent === "education"
                    ? "#03DAC6"
                    : "transparent",
                color:
                  activeDesktopPanelContent === "education" ? "black" : "#03DAC6",
                borderColor: "#03DAC6",
                "&:hover": {
                  bgcolor:
                    activeDesktopPanelContent === "education"
                      ? "#02B8A2"
                      : "rgba(3,218,198,0.1)",
                  borderColor: "#02B8A2",
                },
                py: 1.5, // Taller button
              }}
            >
              VIEW EDUCATION
            </Button>
          </Stack>
          <Typography variant="body2" sx={{ color: "white", mt: 1 }}>
            Click to explore detailed work history and academic background
          </Typography>
        </Card>

        {/* Social Media/Contact Footer */}
        <Box sx={{ textAlign: "center", mt: { xs: 4, sm: 6 } }}>
          <IconButton
            href="https://github.com/Innocent-Lutumo/"
            target="_blank"
            sx={{ color: "white", mx: { xs: 0.5, sm: 1 } }} // Smaller margin on xs
          >
            <GitHub fontSize={isMobile ? "medium" : "large"} /> {/* Responsive icon size */}
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/innocent-lutumo-56969b35b/"
            target="_blank"
            sx={{ color: "white", mx: { xs: 0.5, sm: 1 } }}
          >
            <LinkedIn fontSize={isMobile ? "medium" : "large"} />
          </IconButton>
          {/* Add more social icons */}
          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, color: "rgba(255,255,255,0.7)" }} // Slightly faded copyright
          >
            © {new Date().getFullYear()} Innocent Lutumo. All rights reserved.
          </Typography>
        </Box>
      </Box>

      {/* Contact Dialog Component */}
      <ContactDialog open={openContact} onClose={() => setOpenContact(false)} />

      {/* Projects Dialog Component (Assumed to be self-contained) */}
      <ProjectsDialog
        open={openProjects}
        handleClose={() => setOpenProjects(false)}
      />

      {/* Right-Hand Dynamic Content Panel - Only on larger screens */}
      {!isTablet && ( // Only render this section if on desktop (not tablet/mobile)
        <Box
          sx={{
            width: "400px", // Fixed width for desktop
            flexShrink: 0,
            bgcolor: "#121212",
            boxShadow: "-4px 0 15px rgba(0,0,0,0.7)", // Deeper shadow for side panel
            overflowY: "auto", // Ensure content inside scrolls
            p: 3, // Increased padding for better desktop feel
            borderLeft: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {renderDesktopPanelContent()}
        </Box>
      )}

      {/* Mobile-Specific Content Dialog */}
      <Dialog
        fullScreen // Makes the dialog full screen on mobile
        open={openMobileContentDialog}
        onClose={handleCloseMobileContent}
        TransitionComponent={Transition} // Apply slide transition
        sx={{
          '& .MuiDialog-paper': { // Style the dialog paper
            bgcolor: '#0a0a0a', // Match main background
            color: 'white',
          }
        }}
      >
        <DialogTitle sx={{ bgcolor: '#121212', p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="h6" sx={{ color: '#6200EE', fontWeight: 'bold' }}>
            {mobileDialogContentType === 'experience' && 'My Experience'}
            {mobileDialogContentType === 'education' && 'My Education'}
            {mobileDialogContentType === 'skills' && 'My Skills'}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseMobileContent}
            aria-label="close"
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, sm: 3 }, overflowY: 'auto' }}>
          {renderMobileDialogContent()}
        </DialogContent>
      </Dialog>


      {/* Scroll to Top Button (from your image) */}
      <IconButton
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "#6200EE",
          color: "white",
          "&:hover": { bgcolor: "#4B00B2" },
          zIndex: 999, // Ensure it's on top
          width: { xs: 40, sm: 50 }, // Responsive size
          height: { xs: 40, sm: 50 },
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* Using a single arrow icon for simplicity and better mobile look */}
        <Typography variant="caption" sx={{ fontSize: '1.5rem', transform: "rotate(-90deg)", lineHeight: 1 }}>
          ^
        </Typography>
      </IconButton>
    </Box>
  );
};

export default Portfolio;