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
  Card,
  CardContent,
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
import { projects } from "../projects";
import { experience } from "../experience";
import { education } from "../education";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

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
      <Box component="main" sx={{ pt: { xs: 10, sm: 12 }, px: { xs: 1, sm: 2 } }}>
        
        {/* Hero/About Section */}
        <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6 } }}>
          <AnimatedSection>
            <Paper sx={sectionStyles}>
              <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
                {/* Image */}
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    <Box
                      component="img"
                      src={innocImg}
                      alt="Innocent Felix Lutumo"
                      sx={{
                        width: { xs: 200, sm: 250, md: "100%" },
                        maxWidth: 300,
                        height: "auto",
                        borderRadius: 3,
                        border: "3px solid rgba(255,255,255,0.2)",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>

                {/* Content */}
                <Grid item xs={12} md={8}>
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

                  <Typography
                    variant="body1"
                    sx={{ 
                      mb: 3, 
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.9)",
                      fontSize: { xs: "0.95rem", sm: "1rem" }
                    }}
                  >
                    Passionate full-stack developer from Tanzania, building scalable 
                    and modern web solutions. Specializing in responsive, user-centered 
                    applications with clean architecture and modern practices.
                  </Typography>

                  {/* Tech Stack Icons */}
                  <Box 
                    sx={{ 
                      display: "flex", 
                      gap: 2, 
                      mb: 3,
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "flex-start" }
                    }}
                  >
                    <SiHtml5 size={28} color="#e44d26" />
                    <SiCss3 size={28} color="#264de4" />
                    <SiJavascript size={28} color="#f0db4f" />
                    <SiReact size={28} color="#61dafb" />
                    <SiPython size={28} color="#3776AB" />
                    <SiDjango size={28} color="#092e20" />
                  </Box>

                  {/* Contact Info */}
                  <Box 
                    sx={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      gap: 1,
                      justifyContent: { xs: "center", md: "flex-start" }
                    }}
                  >
                    <Chip
                      icon={<LocationOn sx={{ fontSize: 16 }} />}
                      label="Dar es Salaam"
                      size="small"
                      sx={{
                        bgcolor: "rgba(33, 150, 243, 0.1)",
                        color: "#2196f3",
                        borderColor: "#2196f3",
                        fontSize: "0.75rem",
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
                        borderColor: "#4caf50",
                        fontSize: "0.75rem",
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
                        borderColor: "#ff9800",
                        fontSize: "0.75rem",
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </AnimatedSection>
        </Container>

        {/* Skills Section */}
        <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6 } }}>
          <AnimatedSection>
            <Paper sx={sectionStyles}>
              <SectionTitle icon={<Code />} title="Skills" />
              <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mt: 1 }}>
                {skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <SkillCard skill={skill} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </AnimatedSection>
        </Container>

        {/* Projects Section */}
        <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 6 } }}>
          <AnimatedSection>
            <Paper sx={sectionStyles}>
              <SectionTitle icon={<Work />} title="Projects" />
              <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mt: 1 }}>
                {projects.map((project, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={index}>
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  </Grid>
                ))}
              </Grid>
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