import React, { useState } from "react";
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
import ProjectCard from "../../components/ProjectCard";
import ExperienceItem from "../../components/ExperienceItem";
import EducationItem from "../../components/EducationItem";
import SkillCard from "../../components/SkillCard";
import ContactDialog from "../../components/ContactDialog";
import ProjectDialog from "../../components/ProjectDialog";
import NavigationDrawers from "../../components/NavigationDrawers";
import Footer from "../../components/Footer";

// Import your data
import { skills } from "../skills";
import { experience } from "../experience";
import { education } from "../education";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Improved section styles
  const sectionStyles = {
    p: { xs: 2, sm: 3, md: 4 },
    bgcolor: "#1a1a1a",
    borderRadius: { xs: 2, sm: 3 },
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
      borderColor: "rgba(255,255,255,0.2)",
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "#0a0a0a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Navigation */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(26, 26, 26, 0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setLeftNavOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Portfolio
          </Typography>
          <Button
            color="inherit"
            onClick={() => setContactDialogOpen(true)}
            sx={{ fontWeight: 500 }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <NavigationDrawers
        leftNavOpen={leftNavOpen}
        rightNavOpen={rightNavOpen}
        setLeftNavOpen={setLeftNavOpen}
        setRightNavOpen={setRightNavOpen}
        isMobile={isMobile}
        setContactDialogOpen={setContactDialogOpen}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{ pt: { xs: 10, sm: 12 }, px: { xs: 1, sm: 2 } }}
      >
        {/* Hero/About Section */}
        <Container maxWidth="xl" sx={{ mb: { xs: 4, sm: 6 } }}>
          <AnimatedSection>
            <Paper
              sx={{
                ...sectionStyles,
                px: { xs: 2, md: 5 },
                py: { xs: 3, md: 5 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "center", md: "flex-start" },
                  gap: { xs: 4, md: 6 },
                }}
              >
                {/* Image Section - Floated Left */}
                <Box
                  sx={{
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Box
                    component="img"
                    src={innocImg}
                    alt="Innocent Felix Lutumo"
                    sx={{
                      width: { xs: 240, sm: 300, md: 360 },
                      height: { xs: 240, sm: 300, md: 360 },
                      borderRadius: 4,
                      border: "4px solid rgba(255,255,255,0.2)",
                      objectFit: "cover",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                  />
                </Box>

                {/* Text Section - Floated Right of Image */}
                <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    fontWeight="bold"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    <Typewriter
                      words={[
                        "I'm Innocent Felix Lutumo",
                        "I'm a Full Stack Developer",
                        "I'm a UI/UX Designer",
                      ]}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </Typography>

                  {/* Text content on the right of the image */}
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.92)",
                      fontSize: { xs: "1rem", sm: "1.05rem" },
                    }}
                  >
                    I'm a passionate full-stack developer from Tanzania,
                    dedicated to building elegant and scalable digital
                    solutions. With a strong focus on clean UI/UX, I bring
                    modern web technologies and thoughtful architecture together
                    to create seamless, user-focused experiences.
                  </Typography>

                  {/* Tech Stack Icons */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 3,
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <SiHtml5 size={30} color="#e44d26" />
                    <SiCss3 size={30} color="#264de4" />
                    <SiJavascript size={30} color="#f0db4f" />
                    <SiReact size={30} color="#61dafb" />
                    <SiPython size={30} color="#3776AB" />
                    <SiDjango size={30} color="#092e20" />
                  </Box>

                  {/* Contact Info */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <Chip
                      icon={<LocationOn sx={{ fontSize: 16 }} />}
                      label="Dar es Salaam"
                      size="small"
                      sx={{
                        bgcolor: "rgba(33, 150, 243, 0.1)",
                        color: "#2196f3",
                        fontSize: "0.8rem",
                      }}
                      variant="outlined"
                    />
                    <Chip
                      icon={<Phone sx={{ fontSize: 16 }} />}
                      label="+255 616 580 004"
                      size="small"
                      sx={{
                        bgcolor: "rgba(76, 175, 80, 0.1)",
                        color: "#4caf50",
                        fontSize: "0.8rem",
                      }}
                      variant="outlined"
                    />
                    <Chip
                      icon={<Email sx={{ fontSize: 16 }} />}
                      label="innocrng23@example.com"
                      size="small"
                      sx={{
                        bgcolor: "rgba(255, 152, 0, 0.1)",
                        color: "#ff9800",
                        fontSize: "0.8rem",
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </AnimatedSection>
        </Container>

        {/* Skills Section */}
        <Container maxWidth="lg" sx={{ mb: { xs: 6, sm: 8 } }}>
          <AnimatedSection>
            <Paper
              sx={{
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 3, sm: 5 },
                bgcolor: "rgba(26, 26, 26, 0.85)",
                borderRadius: 4,
                boxShadow: 3,
              }}
            >
              <SectionTitle icon={<Code />} title="Skills" />

              <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                sx={{ mt: { xs: 2, sm: 3 } }}
                justifyContent="center"
              >
                {skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <SkillCard skill={skill} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </AnimatedSection>
        </Container>

        {/* Projects Section - Animated Button */}
        <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6 } }}>
          <AnimatedSection>
            <Paper sx={sectionStyles}>
              <SectionTitle icon={<Work />} title="Projects" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 200,
                  mt: 2,
                }}
              >
                <Button
                  sx={{
                    position: "relative",
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                    color: "white",
                    border: "3px solid rgba(255,255,255,0.2)",
                    fontSize: "14px",
                    fontWeight: "bold",
                    textTransform: "none",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1) rotate(5deg)",
                      boxShadow: "0 15px 35px rgba(33, 150, 243, 0.4)",
                      background:
                        "linear-gradient(45deg, #1976D2 30%, #1565C0 90%)",
                    },
                    "&::before": {
                      content: '"View Projects Done"',
                      position: "absolute",
                      top: "initial",
                      left: "initial",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      animation: "rotateText 8s linear infinite",
                      transformOrigin: "center",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "15px solid white",
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      marginLeft: "3px",
                      animation: "pulse 2s ease-in-out infinite",
                    },
                    "@keyframes rotateText": {
                      "0%": {
                        transform: "rotate(0deg)",
                      },
                      "100%": {
                        transform: "rotate(360deg)",
                      },
                    },
                    "@keyframes pulse": {
                      "0%, 100%": {
                        opacity: 1,
                        transform: "translate(-50%, -50%) scale(1)",
                      },
                      "50%": {
                        opacity: 0.7,
                        transform: "translate(-50%, -50%) scale(1.1)",
                      },
                    },
                  }}
                  onClick={() => {
                    // Add your navigation logic here
                    console.log("Navigate to projects page");
                  }}
                >
                  <ArrowForward
                    sx={{
                      fontSize: 24,
                      zIndex: 2,
                      position: "relative",
                    }}
                  />
                </Button>
              </Box>
            </Paper>
          </AnimatedSection>
        </Container>

        {/* Experience Section */}
        <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6 } }}>
          <AnimatedSection>
            <Paper sx={sectionStyles}>
              <SectionTitle icon={<Work />} title="Experience" />
              <Box sx={{ mt: 2 }}>
                {experience.map((exp, index) => (
                  <ExperienceItem key={index} experience={exp} />
                ))}
              </Box>
            </Paper>
          </AnimatedSection>
        </Container>

        {/* Education Section */}
        <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6 } }}>
          <AnimatedSection>
            <Paper sx={sectionStyles}>
              <SectionTitle icon={<School />} title="Education" />
              <Box sx={{ mt: 2 }}>
                {education.map((edu, index) => (
                  <EducationItem key={index} education={edu} />
                ))}
              </Box>
            </Paper>
          </AnimatedSection>
        </Container>
      </Box>

      <Footer />

      {/* Dialogs */}
      <ContactDialog
        open={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
      />
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Box>
  );
}
