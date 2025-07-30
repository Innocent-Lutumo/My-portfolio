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
  Fab, // Added for scroll-to-top
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
  KeyboardArrowUp as KeyboardArrowUpIcon, // Added for scroll-to-top
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
// import ProjectCard from "../../components/ProjectCard"; // Not directly used in this file's render
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
  const [rightNavOpen, setRightNavOpen] = useState(false); // Assuming you might have a right nav

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Improved and more compact section styles
  const sectionStyles = {
    p: { xs: 2, sm: 3 }, // Reduced padding
    bgcolor: "#1a1a1a",
    borderRadius: { xs: 1.5, sm: 2.5 }, // Slightly smaller border radius
    boxShadow: "0 6px 24px rgba(0,0,0,0.4)", // Adjusted shadow
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.08)", // Thinner border
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-1px)", // Less aggressive lift
      boxShadow: "0 10px 36px rgba(0,0,0,0.5)", // Adjusted hover shadow
      borderColor: "rgba(255,255,255,0.15)",
    },
  };

  // Scroll to top function
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
        overflowX: "hidden",
        // Subtle background pattern/gradient for stunning effect
        background: `radial-gradient(circle at top left, rgba(33, 150, 243, 0.05) 0%, transparent 40%),
                     radial-gradient(circle at bottom right, rgba(76, 175, 80, 0.05) 0%, transparent 40%),
                     #0a0a0a`,
      }}
    >
      {/* Navigation */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(10, 10, 10, 0.8)", // Darker, slightly more transparent AppBar
          backdropFilter: "blur(12px)", // Increased blur
          boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
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
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Innocent Lutumo
          </Typography>
          <Button
            color="inherit"
            onClick={() => setContactDialogOpen(true)}
            sx={{
              fontWeight: 600,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.08)",
              },
            }}
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
        sx={{ pt: { xs: 8, sm: 10 }, px: { xs: 1, sm: 2 } }} // Reduced top padding
      >
        {/* Hero/About Section */}
        <Container maxWidth="xl" sx={{ mb: { xs: 3, sm: 5 } }}>
          {" "}
          {/* Reduced margin-bottom */}
          <AnimatedSection>
            <Paper
              sx={{
                ...sectionStyles,
                px: { xs: 2, md: 4 }, // Reduced horizontal padding
                py: { xs: 2.5, md: 4 }, // Reduced vertical padding
                background:
                  "linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(10, 10, 10, 0.95))",
                overflow: "hidden", // Ensures content stays within bounds
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "center", md: "flex-start" },
                  gap: { xs: 3, md: 5 }, // Reduced gap
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
                      width: { xs: 180, sm: 240, md: 280 }, // Smaller image size
                      height: { xs: 180, sm: 240, md: 280 }, // Smaller image size
                      borderRadius: 3, // Slightly smaller border radius
                      border: "3px solid rgba(255,255,255,0.15)", // Thinner border
                      objectFit: "cover",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.6)", // Adjusted shadow
                      transform: "translateZ(0)", // Optimize for potential parallax
                    }}
                  />
                </Box>

                {/* Text Section - Floated Right of Image */}
                <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant={isMobile ? "h6" : "h4"} // Smaller variant for mobile
                    fontWeight="bold"
                    gutterBottom
                    sx={{ mb: 1.5 }} // Reduced margin-bottom
                  >
                    <Typewriter
                      words={[
                        "I'm Innocent Felix Lutumo",
                        "I'm a Web Developer",
                        "I'm a UI/UX Designer",
                      ]}
                      loop
                      cursor
                      cursorStyle="_" // More subtle cursor
                      typeSpeed={60} // Slightly faster
                      deleteSpeed={40} // Slightly faster
                      delaySpeed={1800} // Slightly longer delay
                    />
                  </Typography>

                  {/* Text content on the right of the image */}
                  <Typography
                    variant="body2" // Smaller body text
                    sx={{
                      mb: 2.5, // Reduced margin-bottom
                      lineHeight: 1.7, // Slightly tighter line height
                      color: "rgba(255,255,255,0.85)", // Slightly less white
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      maxWidth: { xs: "95%", md: "none" }, // Constrain width on smaller screens
                      mx: { xs: "auto", md: "unset" }, // Center on smaller screens
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
                      gap: 1.5, // Reduced gap
                      mb: 2.5, // Reduced margin-bottom
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <SiHtml5 size={26} color="#e44d26" />
                    <SiCss3 size={26} color="#264de4" />
                    <SiJavascript size={26} color="#f0db4f" />
                    <SiReact size={26} color="#61dafb" />
                    <SiPython size={26} color="#3776AB" />
                    <SiDjango size={26} color="#092e20" />
                  </Box>

                  {/* Contact Info */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.8, // Reduced gap
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <Chip
                      icon={<LocationOn sx={{ fontSize: 14 }} />} // Smaller icon
                      label="Dar es Salaam"
                      size="small"
                      sx={{
                        bgcolor: "rgba(33, 150, 243, 0.1)",
                        color: "#2196f3",
                        fontSize: "0.75rem", // Smaller font size
                        height: 24, // Reduced height
                        "& .MuiChip-label": { px: "6px" }, // Adjust label padding
                      }}
                      variant="outlined"
                    />
                    <Chip
                      icon={<Phone sx={{ fontSize: 14 }} />}
                      label="+255 616 580 004"
                      size="small"
                      sx={{
                        bgcolor: "rgba(76, 175, 80, 0.1)",
                        color: "#4caf50",
                        fontSize: "0.75rem",
                        height: 24,
                        "& .MuiChip-label": { px: "6px" },
                      }}
                      variant="outlined"
                    />
                    <Chip
                      icon={<Email sx={{ fontSize: 14 }} />}
                      label="innocrng23@example.com"
                      size="small"
                      sx={{
                        bgcolor: "rgba(255, 152, 0, 0.1)",
                        color: "#ff9800",
                        fontSize: "0.75rem",
                        height: 24,
                        "& .MuiChip-label": { px: "6px" },
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </AnimatedSection>
        </Container>

        <Container maxWidth="xl" sx={{ mb: { xs: 4, sm: 6 } }}>
          {" "}
          {/* Reduced margin-bottom */}
          <AnimatedSection>
            <Grid
              container
              spacing={3} // Reduced spacing between grid items
              alignItems="stretch"
              sx={{
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              {/* Enhanced Skills Section (Left) */}
              <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                <Paper
                  sx={{
                    ...sectionStyles,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    backgroundColor: "rgba(255, 255, 255, 0.05)", // Slightly lighter background
                    border: "1px solid rgba(255, 255, 255, 0.1)", // Thinner border
                    position: "relative", // For inner gradient effect
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(45deg, rgba(33, 150, 243, 0.03), transparent 30%, transparent 70%, rgba(76, 175, 80, 0.03))",
                      zIndex: 0,
                    },
                  }}
                >
                  <SectionTitle icon={<Code />} title="Skills" sx={{ mb: 2 }} />{" "}
                  {/* Reduced margin-bottom */}
                  <Box
                    sx={{
                      position: "relative",
                      height: 160, // Reduced height significantly
                      width: "100%",
                      mt: 1, // Reduced margin-top
                      mx: "auto", // Center the box
                      borderRadius: 1,
                      backgroundColor: "rgba(0, 0, 0, 0.15)", // Slightly less dark
                      border: "1px solid rgba(255, 255, 255, 0.06)", // Thinner border
                      overflow: "hidden",
                      boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)", // Inner shadow
                      display: "flex", // Use flexbox for skill cards
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Display fewer skill cards and make them smaller for a more compact look */}
                    {skills.slice(0, 3).map((skill, index) => (
                      <Box
                        key={index}
                        sx={{
                          position: "absolute",
                          width: { xs: "80%", sm: "70%", md: "60%" }, // Responsive width
                          animation: `compactCardAnimation 10s infinite ${
                            index * 3
                          }s forwards`, // Faster animation
                          "@keyframes compactCardAnimation": {
                            "0%": {
                              transform: "translate(150%, -50%)",
                              opacity: 0,
                              zIndex: 1,
                            },
                            "10%": {
                              transform: "translate(-50%, -50%)",
                              opacity: 1,
                              zIndex: 2,
                            },
                            "20%": {
                              transform: "translate(-50%, -50%)",
                              opacity: 1,
                              zIndex: 2,
                            },
                            "30%": {
                              transform: "translate(-150%, -50%)",
                              opacity: 0,
                              zIndex: 1,
                            },
                            "100%": {
                              transform: "translate(150%, -50%)",
                              opacity: 0,
                              zIndex: 1,
                            },
                          },
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          pointerEvents: "none", // Prevent interaction while animating
                        }}
                      >
                        <SkillCard
                          skill={skill}
                          sx={{
                            width: "100%",
                            maxWidth: "none",
                            boxShadow: 4, // Smaller shadow
                            backgroundColor: "rgba(0, 0, 0, 0.3)", // More transparent
                            backdropFilter: "blur(5px)", // Less blur
                            border: "1px solid rgba(255, 255, 255, 0.1)", // Thinner border
                            p: 2, // Reduced padding
                            "& .MuiTypography-h6": {
                              fontSize: "1.2rem", // Smaller title
                              fontWeight: "bold",
                            },
                            "& .MuiTypography-body2": {
                              fontSize: "0.9rem", // Smaller body text
                            },
                            "& .MuiAvatar-root": {
                              width: 48, // Smaller avatar
                              height: 48, // Smaller avatar
                              boxShadow: 2,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      px: 2,
                      textAlign: "center",
                      color: "rgba(255,255,255,0.7)", // Slightly dimmer caption
                      fontSize: "0.75rem", // Smaller font size
                      lineHeight: 1.4,
                      zIndex: 1, // Ensure text is above pseudo-element
                    }}
                  >
                    Displaying key programming languages, frameworks, and tools.
                  </Typography>
                </Paper>
              </Grid>

              {/* Projects Section (Right) - Streamlined */}
              <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                <Paper
                  sx={{
                    ...sectionStyles,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.03)", // Even more transparent
                    border: "1px solid rgba(255, 255, 255, 0.1)", // Thinner border
                    width: "100%",
                    p: 3, // Reduced padding
                    position: "relative",
                    overflow: "hidden",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3, // Thinner top bar
                      background:
                        "linear-gradient(90deg, #2196F3, #21CBF3, #4CAF50)", // More vibrant gradient
                    },
                    "&:hover": {
                      boxShadow: "0 6px 24px rgba(33, 150, 243, 0.3)", // Refined hover shadow
                      transform: "translateY(-1px)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    <SectionTitle
                      icon={
                        <Work
                          sx={{
                            fontSize: 32, // Smaller icon
                            background:
                              "linear-gradient(135deg, #2196F3, #21CBF3)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        />
                      }
                      title="My Projects"
                      sx={{ mb: 2 }} // Reduced margin-bottom
                    />

                    <Box
                      sx={{
                        position: "relative",
                        width: 150, // Smaller circle
                        height: 150, // Smaller circle
                        mx: "auto",
                        mb: 3, // Reduced margin-bottom
                        "&:hover .project-circle": {
                          transform: "scale(1.03)", // Less aggressive scale
                          boxShadow: "0 0 25px rgba(33, 150, 243, 0.5)", // Refined shadow
                        },
                      }}
                    >
                      <Box
                        className="project-circle"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(145deg, #2196F3, #21CBF3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                          boxShadow: "0 0 15px rgba(33, 150, 243, 0.3)", // Reduced shadow
                          border: "2px solid rgba(255,255,255,0.2)", // Thinner border
                          overflow: "hidden",
                          "&:after": {
                            content: '""',
                            position: "absolute",
                            top: "-50%",
                            left: "-50%",
                            right: "-50%",
                            bottom: "-50%",
                            background:
                              "linear-gradient(transparent, rgba(255,255,255,0.08), transparent)", // More subtle shine
                            transform: "rotate(20deg)", // Less rotation
                            animation: "shine 2.5s infinite", // Faster shine
                            "@keyframes shine": {
                              "0%": {
                                transform: "translateX(-100%) rotate(20deg)",
                              },
                              "100%": {
                                transform: "translateX(100%) rotate(20deg)",
                              },
                            },
                          },
                        }}
                      >
                        <ArrowForward
                          sx={{
                            fontSize: 40, // Slightly smaller arrow
                            color: "white",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.1)", // Less aggressive scale
                            },
                          }}
                        />
                      </Box>
                    </Box>

                    <Button
                      component={Link}
                      to="/projects"
                      variant="outlined"
                      sx={{
                        mt: 1.5, // Reduced margin-top
                        px: 3, // Reduced padding
                        py: 1.2, // Reduced padding
                        borderRadius: 30, // Slightly less rounded
                        background: "rgba(33, 150, 243, 0.08)", // More transparent
                        border: "1px solid rgba(33, 150, 243, 0.2)", // Thinner border
                        color: "white",
                        fontSize: "0.9rem", // Smaller font size
                        fontWeight: 500, // Slightly less bold
                        textTransform: "none",
                        letterSpacing: "0.4px", // Tighter letter spacing
                        transition: "all 0.3s ease",
                        backdropFilter: "blur(6px)", // Less blur
                        "&:hover": {
                          background: "rgba(33, 150, 243, 0.15)", // More transparent hover
                          borderColor: "rgba(33, 150, 243, 0.4)",
                          boxShadow: "0 3px 10px rgba(33, 150, 243, 0.2)", // Reduced shadow
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      View Project Gallery
                    </Button>

                    <Typography
                      variant="body2" // Smaller body text
                      sx={{
                        mt: 2, // Reduced margin-top
                        px: 1,
                        color: "rgba(255,255,255,0.8)", // Slightly dimmer
                        maxWidth: "90%", // Wider text box
                        mx: "auto",
                        fontSize: "0.9rem", // Smaller font size
                        lineHeight: 1.5,
                      }}
                    >
                      Explore my portfolio of professional projects and case
                      studies.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>

        {/* Experience Section */}
        <Container maxWidth="lg" sx={{ mb: { xs: 3, sm: 5 } }}>
          {" "}
          {/* Reduced margin-bottom */}
          <AnimatedSection>
            <Paper
              sx={{
                ...sectionStyles,
                background:
                  "linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(10, 10, 10, 0.9))",
              }}
            >
              <SectionTitle icon={<Work />} title="Experience" sx={{ mb: 1.5 }} />{" "}
              {/* Reduced margin-bottom */}
              <Box sx={{ mt: 1.5 }}>
                {" "}
                {/* Reduced margin-top */}
                {experience.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    experience={exp}
                    // Pass a prop to make the item more compact if needed in ExperienceItem component
                    compact={true}
                  />
                ))}
              </Box>
            </Paper>
          </AnimatedSection>
        </Container>

        {/* Education Section */}
        <Container maxWidth="lg" sx={{ mb: { xs: 3, sm: 5 } }}>
          {" "}
          {/* Reduced margin-bottom */}
          <AnimatedSection>
            <Paper
              sx={{
                ...sectionStyles,
                background:
                  "linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(26, 26, 26, 0.9))",
              }}
            >
              <SectionTitle icon={<School />} title="Education" sx={{ mb: 1.5 }} />{" "}
              {/* Reduced margin-bottom */}
              <Box sx={{ mt: 1.5 }}>
                {" "}
                {/* Reduced margin-top */}
                {education.map((edu, index) => (
                  <EducationItem
                    key={index}
                    education={edu}
                    // Pass a prop to make the item more compact if needed in EducationItem component
                    compact={true}
                  />
                ))}
              </Box>
            </Paper>
          </AnimatedSection>
        </Container>
      </Box>

      <Footer />

      {/* Scroll to Top Button */}
      <Fab
        color="primary"
        size="small"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          bgcolor: "rgba(33, 150, 243, 0.8)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 4px 12px rgba(33, 150, 243, 0.4)",
          "&:hover": {
            bgcolor: "#2196F3",
            boxShadow: "0 6px 16px rgba(33, 150, 243, 0.6)",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s ease-in-out",
          zIndex: 999,
        }}
      >
        <KeyboardArrowUpIcon />
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
    </Box>
  );
}