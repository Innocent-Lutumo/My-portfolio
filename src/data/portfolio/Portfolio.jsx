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
  Avatar,
  IconButton,
  Paper,
  Divider,
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

// Components
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

// Data
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

  const paperStyles = {
    p: { xs: 3, sm: 4 },
    bgcolor: "#1e1e1e",
    borderRadius: 3,
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    color: "#e0e0e0",
    backdropFilter: "blur(4px)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 6px 30px rgba(0,0,0,0.6)",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "black",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setLeftNavOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Button color="inherit" onClick={() => setContactDialogOpen(true)}>
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

      <Box component="main" sx={{ flexGrow: 1, pt: 12, px: 2 }}>
        <Box id="about" my={6}>
          <AnimatedSection>
            <Container maxWidth="lg">
              <Paper
                sx={{
                  ...paperStyles,
                  display: "flex",
                  minHeight: 300,
                  overflow: "hidden", // prevent overflow issues
                }}
              >
                {/* Image container */}
                <Box
                  sx={{
                    flex: "0 0 150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 2,
                    paddingRight: 2,
                    borderRight: "2px solid rgba(255, 255, 255, 0.2)", // clear boundary
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    component="img"
                    src={innocImg}
                    alt="Innocent"
                    sx={{
                      maxHeight: 300,
                      width: "auto",
                      borderRadius: 2,
                      border: "4px solid white",
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </Box>

                {/* Text container */}
                <Box
                  sx={{
                    flex: 1,
                    color: "white",
                    paddingLeft: 3,
                    paddingRight: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
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
                    color="gray.300"
                    lineHeight={1.7}
                    sx={{ mt: 2 }}
                  >
                    I am a passionate and versatile software developer from
                    Tanzania who builds scalable, efficient, and modern web
                    solutions. With a strong foundation in both front-end and
                    back-end technologies, I specialize in creating responsive,
                    user-centered applications. My work is guided by a deep
                    understanding of user experience design, clean architecture,
                    and modern software practices. I am continuously learning,
                    adapting to new technologies, and eager to solve real-world
                    problems through innovation and code.
                  </Typography>

                  <Box
                    mt={2}
                    display="flex"
                    alignItems="center"
                    flexWrap="wrap"
                    gap={1}
                  >
                    <SiHtml5 size={24} color="#e44d26" />
                    <SiCss3 size={24} color="#264de4" />
                    <SiJavascript size={24} color="#f0db4f" />
                    <SiReact size={24} color="#61dafb" />
                    <SiPython size={24} color="#3776AB" />
                    <SiDjango size={24} color="#092e20" />
                  </Box>

                  <Box mt={2}>
                    <Chip
                      icon={<LocationOn sx={{ color: "#90caf9" }} />}
                      label="Dar-es-salaam"
                      sx={{
                        mr: 1,
                        fontSize: 10,
                        color: "#90caf9",
                        borderColor: "#90caf9",
                        fontWeight: "bold",
                        bgcolor: "rgba(144, 202, 249, 0.1)",
                      }}
                      variant="outlined"
                    />
                    <Chip
                      icon={<Phone sx={{ color: "#90caf9" }} />}
                      label="+255 616 580 004"
                      sx={{
                        mr: 1,
                        fontSize: 10,
                        color: "#90caf9",
                        borderColor: "#90caf9",
                        fontWeight: "bold",
                        bgcolor: "rgba(144, 202, 249, 0.1)",
                      }}
                      variant="outlined"
                    />
                    <Chip
                      icon={<Email sx={{ color: "#90caf9" }} />}
                      label="innocrng23@example.com"
                      sx={{
                        color: "#90caf9",
                        fontSize: 10,
                        borderColor: "#90caf9",
                        fontWeight: "bold",
                        bgcolor: "rgba(144, 202, 249, 0.1)",
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Paper>
            </Container>
          </AnimatedSection>
        </Box>
      </Box>

      <Box id="skills" my={6}>
        <AnimatedSection>
          <Container maxWidth="lg">
            <Paper sx={paperStyles}>
              <Box textAlign="center" mb={3}>
                <SectionTitle icon={<Code />} title="Skills" />
              </Box>
              <Grid container spacing={2}>
                {skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <SkillCard skill={skill} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Container>
        </AnimatedSection>
      </Box>

      <Box id="projects" my={6}>
        <AnimatedSection>
          <Container maxWidth="lg">
            <Paper sx={paperStyles}>
              <Box textAlign="center" mb={3}>
                <SectionTitle icon={<Work />} title="Projects" />
              </Box>
              <Grid container spacing={2}>
                {projects.map((project, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Container>
        </AnimatedSection>
      </Box>

      <Box id="experience" my={6}>
        <AnimatedSection>
          <Container maxWidth="lg">
            <Paper sx={paperStyles}>
              <Box textAlign="center" mb={3}>
                <SectionTitle icon={<Work />} title="Experience" />
              </Box>
              {experience.map((exp, index) => (
                <ExperienceItem key={index} experience={exp} />
              ))}
            </Paper>
          </Container>
        </AnimatedSection>
      </Box>

      <Box id="education" my={6}>
        <AnimatedSection>
          <Container maxWidth="lg">
            <Paper sx={paperStyles}>
              <Box textAlign="center" mb={3}>
                <SectionTitle icon={<School />} title="Education" />
              </Box>
              {education.map((edu, index) => (
                <EducationItem key={index} education={edu} />
              ))}
            </Paper>
          </Container>
        </AnimatedSection>
      </Box>

      <Footer />

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
