import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  useMediaQuery,
  useTheme,
  Fab,
  Tooltip, // Added Tooltip for small icons
} from "@mui/material";
import {
  Menu as MenuIcon,
  Email,
  LocationOn,
  Phone,
  Code,
  Work,
  School,
  ArrowForward,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Info as InfoIcon, // Added for "Read More"
  LightbulbOutlined as LightbulbIcon, // Skill icon
  AppsOutlined as ProjectsIcon, // Project icon
  WorkOutline as ExperienceIcon, // Experience icon
  SchoolOutlined as EducationIcon, // Education icon
} from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiReact,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import innocImg from "../../images/innoc.jpg";

// Import your components
import AnimatedSection from "../../components/AnimatedSection";
import SectionTitle from "../../components/SectionTitle";
import SkillCard from "../../components/SkillCard";
import ContactDialog from "../../components/ContactDialog";
import ProjectDialog from "../../components/ProjectDialog";
import NavigationDrawers from "../../components/NavigationDrawers";
import Footer from "../../components/Footer";
import ExperienceDialog from "../../components/ExperienceDialog"; // New Dialog for Experience
import EducationDialog from "../../components/EducationDialog"; // New Dialog for Education

// Import your data
// import { skills } from "../skills";
import { experience } from "../experience";
import { education } from "../education";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const [experienceDialogOpen, setExperienceDialogOpen] = useState(false); // State for Experience Dialog
  const [educationDialogOpen, setEducationDialogOpen] = useState(false); // State for Education Dialog

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sectionStyles = {
    p: { xs: 1.5, sm: 2 }, // Further reduced padding
    bgcolor: "#1a1a1a",
    borderRadius: { xs: 1, sm: 2 }, // Smaller border radius
    boxShadow: "0 4px 18px rgba(0,0,0,0.3)", // Adjusted shadow
    color: "#ffffff",
    border: "0.5px solid rgba(255,255,255,0.06)", // Even thinner border
    transition: "all 0.2s ease-in-out", // Faster transition
    "&:hover": {
      transform: "translateY(-0.5px)", // Subtle lift
      boxShadow: "0 8px 30px rgba(0,0,0,0.4)", // Adjusted hover shadow
      borderColor: "rgba(255,255,255,0.1)",
    },
  };

  // Scroll to top function (kept for consistency, though less critical with single page)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        bgcolor: "#0a0a0a",
        minHeight: "100vh",
        color: "white",
        position: "relative",
        overflow: "hidden", // Crucial for single-page, no-scroll
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Distribute content vertically
        // Subtle background pattern/gradient
        background: `radial-gradient(circle at top left, rgba(33, 150, 243, 0.04) 0%, transparent 35%),
                     radial-gradient(circle at bottom right, rgba(76, 175, 80, 0.04) 0%, transparent 35%),
                     #0a0a0a`,
      }}
    >
      {/* Navigation */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(10, 10, 10, 0.9)", // Darker, less transparent AppBar
          backdropFilter: "blur(10px)", // Slightly less blur for performance
          boxShadow: "0 1px 8px rgba(0,0,0,0.4)", // Reduced shadow
          height: { xs: '56px', sm: '64px' } // Explicitly set height
        }}
      >
        <Toolbar variant="dense" sx={{ minHeight: 'inherit' }}> {/* Dense toolbar for more compact size */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setLeftNavOpen(true)}
            sx={{ mr: 1 }} // Reduced margin
          >
            <MenuIcon sx={{ fontSize: '1.25rem' }} /> {/* Smaller icon */}
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            I. Lutumo
          </Typography>
          <Button
            color="inherit"
            onClick={() => setContactDialogOpen(true)}
            sx={{
              fontWeight: 600,
              fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Smaller font size
              minWidth: { xs: '70px', sm: 'unset' }, // Adjust button width
              px: { xs: 1.5, sm: 2 }, // Reduced padding
              py: { xs: 0.5, sm: 0.75 },
              "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <NavigationDrawers
        leftNavOpen={leftNavOpen}
        setLeftNavOpen={setLeftNavOpen}
        isMobile={isMobile}
        setContactDialogOpen={setContactDialogOpen}
        // Added dialog handlers for navigation
        setExperienceDialogOpen={setExperienceDialogOpen}
        setEducationDialogOpen={setEducationDialogOpen}
        setSelectedProject={setSelectedProject} // Pass setSelectedProject
      />

      {/* Main Content - Centralized and Compact */}
      <Box
        component="main"
        sx={{
          pt: { xs: '64px', sm: '72px' }, // Adjust padding based on AppBar height
          px: { xs: 1, sm: 1.5 }, // Reduced horizontal padding
          flexGrow: 1, // Allow main content to grow
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center content vertically
          alignItems: 'center',
          pb: { xs: '64px', sm: '72px' }, // Padding for footer
        }}
      >
        {/* Hero/About Section */}
        <Container maxWidth="md" sx={{ mb: { xs: 2, sm: 3 }, width: '100%' }}>
          <AnimatedSection>
            <Paper
              sx={{
                ...sectionStyles,
                px: { xs: 1.5, md: 3 },
                py: { xs: 2, md: 3 },
                background:
                  "linear-gradient(135deg, rgba(26, 26, 26, 0.85), rgba(10, 10, 10, 0.9))",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: { xs: 2, sm: 3 },
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={innocImg}
                    alt="Innocent Felix Lutumo"
                    sx={{
                      width: { xs: 120, sm: 150 }, // Significantly smaller image
                      height: { xs: 120, sm: 150 },
                      borderRadius: 2,
                      border: "2px solid rgba(255,255,255,0.1)",
                      objectFit: "cover",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
                    }}
                  />
                </Box>

                <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
                  <Typography
                    variant={isMobile ? "h6" : "h5"} // Smaller variant for mobile and desktop
                    fontWeight="bold"
                    gutterBottom
                    sx={{ mb: 1 }}
                  >
                    <Typewriter
                      words={["Innocent Felix Lutumo", "Web Developer", "UI/UX Designer"]}
                      loop
                      cursor
                      cursorStyle="|" // Simpler cursor
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.8)",
                      fontSize: { xs: "0.85rem", sm: "0.9rem" }, // Smaller body text
                      maxWidth: { xs: "90%", sm: "none" },
                      mx: { xs: "auto", sm: "unset" },
                    }}
                  >
                    Passionate full-stack developer dedicated to building elegant, scalable digital solutions with a focus on clean UI/UX.
                  </Typography>

                  {/* Tech Stack Icons - More compact and fewer visible */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1, // Further reduced gap
                      mb: 1.5,
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <Tooltip title="HTML5"><SiHtml5 size={22} color="#e44d26" /></Tooltip>
                    <Tooltip title="CSS3"><SiCss3 size={22} color="#264de4" /></Tooltip>
                    <Tooltip title="JavaScript"><SiJavascript size={22} color="#f0db4f" /></Tooltip>
                    <Tooltip title="React"><SiReact size={22} color="#61dafb" /></Tooltip>
                    <Tooltip title="Python"><SiPython size={22} color="#3776AB" /></Tooltip>
                    <Tooltip title="Django"><SiDjango size={22} color="#092e20" /></Tooltip>
                  </Box>

                  {/* Contact Info - Compact chips */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5, // Even smaller gap
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <Chip
                      icon={<LocationOn sx={{ fontSize: 12 }} />} // Tiny icon
                      label="Dar es Salaam"
                      size="small"
                      sx={{
                        bgcolor: "rgba(33, 150, 243, 0.1)", color: "#2196f3", fontSize: "0.7rem", height: 22,
                        "& .MuiChip-label": { px: "4px" }
                      }}
                      variant="outlined"
                    />
                    <Chip
                      icon={<Phone sx={{ fontSize: 12 }} />}
                      label="+255 616 580 004"
                      size="small"
                      sx={{
                        bgcolor: "rgba(76, 175, 80, 0.1)", color: "#4caf50", fontSize: "0.7rem", height: 22,
                        "& .MuiChip-label": { px: "4px" }
                      }}
                      variant="outlined"
                    />
                    <Chip
                      icon={<Email sx={{ fontSize: 12 }} />}
                      label="innocrng23@example.com"
                      size="small"
                      sx={{
                        bgcolor: "rgba(255, 152, 0, 0.1)", color: "#ff9800", fontSize: "0.7rem", height: 22,
                        "& .MuiChip-label": { px: "4px" }
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </AnimatedSection>
        </Container>

        <Container maxWidth="md" sx={{ width: '100%', mb: { xs: 2, sm: 3 } }}>
          <AnimatedSection>
            <Grid container spacing={2} alignItems="stretch"> {/* Reduced spacing */}
              {/* Skills Section (Left) - More compact with "View All" dialog trigger */}
              <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
                <Paper
                  sx={{
                    ...sectionStyles,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                  }}
                >
                  <SectionTitle icon={<LightbulbIcon sx={{ fontSize: 24 }} />} title="My Skills" sx={{ mb: 1 }} />
                  <Typography variant="body2" sx={{ mb: 1.5, textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                    Core competencies and tools I use.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => setLeftNavOpen(true)} // Re-purpose nav for full skill view
                    size="small"
                    startIcon={<InfoIcon />}
                    sx={{
                      bgcolor: "#2196F3",
                      "&:hover": { bgcolor: "#1976D2" },
                      fontSize: '0.75rem', py: 0.7, px: 2,
                    }}
                  >
                    View All Skills
                  </Button>
                </Paper>
              </Grid>

              {/* Projects Section (Right) - Streamlined with "View Gallery" dialog trigger */}
              <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
                <Paper
                  sx={{
                    ...sectionStyles,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    "&:before": { height: 2 }, // Thinner top bar
                  }}
                >
                  <SectionTitle icon={<ProjectsIcon sx={{ fontSize: 24 }} />} title="My Projects" sx={{ mb: 1 }} />
                  <Typography variant="body2" sx={{ mb: 1.5, textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                    Showcasing my professional work.
                  </Typography>
                  <Button
                    component={Link}
                    to="/projects" // Keep direct link for gallery, but if it needs to be a dialog, change this
                    variant="contained"
                    size="small"
                    startIcon={<ArrowForward />}
                    sx={{
                      bgcolor: "#4CAF50",
                      "&:hover": { bgcolor: "#388E3C" },
                      fontSize: '0.75rem', py: 0.7, px: 2,
                    }}
                  >
                    View Projects
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>

        {/* Experience & Education Section - Combined and Dialog-driven */}
        <Container maxWidth="md" sx={{ width: '100%' }}>
          <AnimatedSection>
            <Paper
              sx={{
                ...sectionStyles,
                background: "linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(10, 10, 10, 0.85))",
                p: { xs: 1.5, sm: 2.5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                Professional Journey
              </Typography>
              <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<ExperienceIcon />}
                    onClick={() => setExperienceDialogOpen(true)}
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '0.9rem' }, py: { xs: 1, sm: 1.2 }, px: 1.5,
                      borderColor: 'rgba(255,255,255,0.15)', color: 'white',
                      '&:hover': { borderColor: '#2196F3', backgroundColor: 'rgba(33, 150, 243, 0.05)' }
                    }}
                  >
                    View Experience
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<EducationIcon />}
                    onClick={() => setEducationDialogOpen(true)}
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '0.9rem' }, py: { xs: 1, sm: 1.2 }, px: 1.5,
                      borderColor: 'rgba(255,255,255,0.15)', color: 'white',
                      '&:hover': { borderColor: '#4CAF50', backgroundColor: 'rgba(76, 175, 80, 0.05)' }
                    }}
                  >
                    View Education
                  </Button>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{ mt: 1.5, color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", textAlign: 'center' }}>
                Click to explore detailed work history and academic background.
              </Typography>
            </Paper>
          </AnimatedSection>
        </Container>
      </Box>

      <Footer sx={{ py: { xs: 1.5, sm: 2 }, mt: 'auto', textAlign: 'center', fontSize: '0.75rem' }} /> {/* Compact Footer */}

      {/* Scroll to Top Button (retained for slight upward adjustment if needed) */}
      <Fab
        color="primary"
        size="small"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: { xs: 10, sm: 16 },
          right: { xs: 10, sm: 16 },
          bgcolor: "rgba(33, 150, 243, 0.7)", // More transparent
          backdropFilter: "blur(3px)", // Less blur
          boxShadow: "0 2px 8px rgba(33, 150, 243, 0.3)", // Reduced shadow
          "&:hover": { bgcolor: "#2196F3", boxShadow: "0 4px 12px rgba(33, 150, 243, 0.5)" },
          transition: "all 0.2s ease-in-out",
          zIndex: 999,
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: '1.25rem' }} /> {/* Smaller icon */}
      </Fab>

      {/* Dialogs */}
      <ContactDialog
        open={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
      />
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      {/* New Dialogs for Experience and Education */}
      <ExperienceDialog
        open={experienceDialogOpen}
        onClose={() => setExperienceDialogOpen(false)}
        experience={experience} // Pass all experience data to the dialog
      />
      <EducationDialog
        open={educationDialogOpen}
        onClose={() => setEducationDialogOpen(false)}
        education={education} // Pass all education data to the dialog
      />
    </Box>
  );
}