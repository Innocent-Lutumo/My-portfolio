import React, { useState, lazy, Suspense } from "react";
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
  Divider,
  useMediaQuery,
  useTheme,
  CircularProgress, // For Suspense fallback
} from "@mui/material";
import {
  Menu as MenuIcon,
  Email,
  LocationOn,
  Phone,
  Code,
  Work,
  School,
  LinkedIn,
  GitHub,
  Twitter,
} from "@mui/icons-material"; // Added social media icons
import { Typewriter } from "react-simple-typewriter";
import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiReact,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import innocImg from "../../images/innoc.jpg"; // Ensure this path is correct

// Lazy load components for better performance
const AnimatedSection = lazy(() => import("../../components/AnimatedSection"));
const SectionTitle = lazy(() => import("../../components/SectionTitle"));
const ProjectCard = lazy(() => import("../../components/ProjectCard"));
const ExperienceItem = lazy(() => import("../../components/ExperienceItem"));
const EducationItem = lazy(() => import("../../components/EducationItem"));
const SkillCard = lazy(() => import("../../components/SkillCard"));
const ContactDialog = lazy(() => import("../../components/ContactDialog"));
const ProjectDialog = lazy(() => import("../../components/ProjectDialog"));
const NavigationDrawers = lazy(() =>
  import("../../components/NavigationDrawers")
);
const Footer = lazy(() => import("../../components/Footer"));

// Data (assuming these are well-structured and optimized)
import { skills } from "../skills";
import { projects } from "../projects";
import { experience } from "../experience";
import { education } from "../education";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false); // Unused in current AppBar, consider removing or integrating

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Added for finer control

  // Centralized Paper styles for consistency and reusability
  const commonPaperStyles = {
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleContactOpen = () => {
    setContactDialogOpen(true);
  };

  const handleContactClose = () => {
    setContactDialogOpen(false);
  };

  const handleLeftNavToggle = () => {
    setLeftNavOpen(!leftNavOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "black",
        minHeight: "100vh",
        color: "white",
        // Smooth scrolling for anchor links
        scrollBehavior: "smooth",
      }}
    >
      <AppBar
        position="fixed"
        color="primary"
        sx={{ zIndex: theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleLeftNavToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Innocent Felix
          </Typography>
          <Button color="inherit" onClick={handleContactOpen}>
            Contact Me
          </Button>
        </Toolbar>
      </AppBar>

      {/* Lazy loaded components wrapped in Suspense for loading states */}
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80vh",
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        }
      >
        <NavigationDrawers
          leftNavOpen={leftNavOpen}
          rightNavOpen={rightNavOpen} // Still passed, but consider if rightNav is truly needed
          setLeftNavOpen={setLeftNavOpen}
          setRightNavOpen={setRightNavOpen}
          isMobile={isMobile}
          setContactDialogOpen={setContactDialogOpen}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: { xs: 8, md: 10 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* About Section */}
          <Box id="about" my={{ xs: 6, md: 8 }}>
            <AnimatedSection>
              <Container maxWidth="lg">
                <Paper
                  sx={{
                    ...commonPaperStyles,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on larger screens
                    alignItems: { xs: "center", sm: "flex-start" }, // Center image on mobile
                    minHeight: { xs: "auto", sm: 300 }, // Adjust minHeight for mobile
                    overflow: "hidden",
                    textAlign: { xs: "center", sm: "left" }, // Center text on mobile
                  }}
                >
                  {/* Image container */}
                  <Box
                    sx={{
                      flex: { xs: "none", sm: "0 0 200px" }, // More flexible width for image
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: { xs: 2, sm: 3 }, // Adjust padding
                      borderRight: {
                        xs: "none",
                        sm: "2px solid rgba(255, 255, 255, 0.2)",
                      },
                      borderBottom: {
                        xs: "2px solid rgba(255, 255, 255, 0.2)",
                        sm: "none",
                      }, // Add bottom border for mobile
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      component="img"
                      src={innocImg}
                      alt="Innocent Felix Lutumo - Profile Picture"
                      sx={{
                        maxHeight: { xs: 200, sm: 250 }, // Smaller image on mobile
                        maxWidth: "100%", // Ensure image fits its container
                        width: "auto",
                        borderRadius: 2,
                        border: "4px solid white",
                        objectFit: "cover", // Use cover to fill the space
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
                      p: { xs: 2, sm: 3 }, // Adjust padding
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant={isSmallScreen ? "h5" : "h4"}
                      fontWeight="bold"
                      gutterBottom
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
                      color="text.secondary" // Use theme's secondary text color
                      lineHeight={1.7}
                      sx={{ mt: 2, mb: 3 }}
                    >
                      I am a passionate and versatile software developer from
                      Tanzania who builds scalable, efficient, and modern web
                      solutions. With a strong foundation in both front-end and
                      back-end technologies, I specialize in creating
                      responsive, user-centered applications. My work is guided
                      by a deep understanding of user experience design, clean
                      architecture, and modern software practices. I am
                      continuously learning, adapting to new technologies, and
                      eager to solve real-world problems through innovation and
                      code.
                    </Typography>

                    {/* Tech Stack Icons */}
                    <Box
                      mt={2}
                      display="flex"
                      alignItems="center"
                      flexWrap="wrap"
                      gap={2} // Increased gap for better spacing
                      justifyContent={{ xs: "center", sm: "flex-start" }} // Center icons on mobile
                    >
                      <SiHtml5 size={30} color="#e44d26" title="HTML5" />
                      <SiCss3 size={30} color="#264de4" title="CSS3" />
                      <SiJavascript
                        size={30}
                        color="#f0db4f"
                        title="JavaScript"
                      />
                      <SiReact size={30} color="#61dafb" title="React" />
                      <SiPython size={30} color="#3776AB" title="Python" />
                      <SiDjango size={30} color="#092e20" title="Django" />
                    </Box>

                    <Divider
                      sx={{ my: 3, borderColor: "rgba(255,255,255,0.12)" }}
                    />

                    {/* Contact Chips */}
                    <Grid
                      container
                      spacing={1}
                      justifyContent={{ xs: "center", sm: "flex-start" }}
                    >
                      <Grid item>
                        <Chip
                          icon={<LocationOn sx={{ color: "#90caf9" }} />}
                          label="Dar-es-salaam"
                          sx={{
                            fontSize: { xs: 10, sm: 12 },
                            color: "#90caf9",
                            borderColor: "#90caf9",
                            fontWeight: "bold",
                            bgcolor: "rgba(144, 202, 249, 0.1)",
                          }}
                          variant="outlined"
                          aria-label="Location: Dar-es-salaam"
                        />
                      </Grid>
                      <Grid item>
                        <Chip
                          icon={<Phone sx={{ color: "#90caf9" }} />}
                          label="+255 616 580 004"
                          sx={{
                            fontSize: { xs: 10, sm: 12 },
                            color: "#90caf9",
                            borderColor: "#90caf9",
                            fontWeight: "bold",
                            bgcolor: "rgba(144, 202, 249, 0.1)",
                          }}
                          variant="outlined"
                          component="a" // Make it a clickable link
                          href="tel:+255616580004"
                          clickable
                          aria-label="Phone Number: +255 616 580 004"
                        />
                      </Grid>
                      <Grid item>
                        <Chip
                          icon={<Email sx={{ color: "#90caf9" }} />}
                          label="innocrng23@example.com"
                          sx={{
                            color: "#90caf9",
                            fontSize: { xs: 10, sm: 12 },
                            borderColor: "#90caf9",
                            fontWeight: "bold",
                            bgcolor: "rgba(144, 202, 249, 0.1)",
                          }}
                          variant="outlined"
                          component="a" // Make it a clickable link
                          href="mailto:innocrng23@example.com"
                          clickable
                          aria-label="Email: innocrng23@example.com"
                        />
                      </Grid>
                    </Grid>

                    {/* Social Media Links */}
                    <Box
                      mt={3}
                      display="flex"
                      gap={2}
                      justifyContent={{ xs: "center", sm: "flex-start" }}
                    >
                      <IconButton
                        color="inherit"
                        aria-label="LinkedIn profile"
                        href="YOUR_LINKEDIN_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedIn
                          sx={{
                            fontSize: { xs: 28, sm: 32 },
                            color: "#0077B5",
                          }}
                        />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        aria-label="GitHub profile"
                        href="YOUR_GITHUB_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub
                          sx={{
                            fontSize: { xs: 28, sm: 32 },
                            color: "#F0F0F0",
                          }}
                        />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        aria-label="Twitter profile"
                        href="YOUR_TWITTER_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter
                          sx={{
                            fontSize: { xs: 28, sm: 32 },
                            color: "#1DA1F2",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              </Container>
            </AnimatedSection>
          </Box>

          {/* Skills Section */}
          <Box id="skills" my={{ xs: 6, md: 8 }}>
            <AnimatedSection>
              <Container maxWidth="lg">
                <Paper sx={commonPaperStyles}>
                  <Box textAlign="center" mb={3}>
                    <SectionTitle icon={<Code />} title="Skills" />
                  </Box>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    justifyContent="center"
                  >
                    {skills.map((skill, index) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        {" "}
                        {/* Adjusted grid sizing */}
                        <SkillCard skill={skill} />
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Container>
            </AnimatedSection>
          </Box>

          {/* Projects Section */}
          <Box id="projects" my={{ xs: 6, md: 8 }}>
            <AnimatedSection>
              <Container maxWidth="lg">
                <Paper sx={commonPaperStyles}>
                  <Box textAlign="center" mb={3}>
                    <SectionTitle icon={<Work />} title="Projects" />
                  </Box>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    justifyContent="center"
                  >
                    {projects.map((project, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProjectCard
                          project={project}
                          onClick={() => handleProjectClick(project)}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Container>
            </AnimatedSection>
          </Box>

          {/* Experience Section */}
          <Box id="experience" my={{ xs: 6, md: 8 }}>
            <AnimatedSection>
              <Container maxWidth="lg">
                <Paper sx={commonPaperStyles}>
                  <Box textAlign="center" mb={3}>
                    <SectionTitle icon={<Work />} title="Experience" />
                  </Box>
                  {experience.map((exp, index) => (
                    <React.Fragment key={index}>
                      <ExperienceItem experience={exp} />
                      {index < experience.length - 1 && (
                        <Divider
                          sx={{
                            my: { xs: 2, md: 3 },
                            borderColor: "rgba(255,255,255,0.12)",
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </Paper>
              </Container>
            </AnimatedSection>
          </Box>

          {/* Education Section */}
          <Box id="education" my={{ xs: 6, md: 8 }}>
            <AnimatedSection>
              <Container maxWidth="lg">
                <Paper sx={commonPaperStyles}>
                  <Box textAlign="center" mb={3}>
                    <SectionTitle icon={<School />} title="Education" />
                  </Box>
                  {education.map((edu, index) => (
                    <React.Fragment key={index}>
                      <EducationItem education={edu} />
                      {index < education.length - 1 && (
                        <Divider
                          sx={{
                            my: { xs: 2, md: 3 },
                            borderColor: "rgba(255,255,255,0.12)",
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </Paper>
              </Container>
            </AnimatedSection>
          </Box>
        </Box>

        <Footer />

        <ContactDialog open={contactDialogOpen} onClose={handleContactClose} />
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Suspense>
    </Box>
  );
}
