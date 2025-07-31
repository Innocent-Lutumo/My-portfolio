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
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";
import { experience as experiences } from "../../data/experience";
import { education as educationData } from "../../data/education";
import { skillsData } from "../skills";
import ContactDialog from "../../components/ContactDialog";
import ProjectsDialog from "./ProjectsPage";
import ExperienceContent from "../../components/ExperienceDialog";
import EducationContent from "../../components/EducationDialog";
import SkillsContent from "../../components/SkillsContent";
import profileImage from "../../images/innoc.jpg";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"; // Better icon for "scroll to top"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Portfolio = () => {
  const [openContact, setOpenContact] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [activeDesktopPanelContent, setActiveDesktopPanelContent] =
    useState("experience");
  const [openMobileContentDialog, setOpenMobileContentDialog] = useState(false);
  const [mobileDialogContentType, setMobileDialogContentType] = useState(null);

  const theme = useTheme();
  // Using 'md' breakpoint for the side panel logic, which is a common practice for tablet-to-desktop transitions.
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderDesktopPanelContent = () => {
    switch (activeDesktopPanelContent) {
      case "experience":
        return <ExperienceContent experience={experiences} />;
      case "education":
        return <EducationContent education={educationData} />;
      case "skills":
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

  const renderMobileDialogContent = () => {
    switch (mobileDialogContentType) {
      case "experience":
        return <ExperienceContent experience={experiences} />;
      case "education":
        return <EducationContent education={educationData} />;
      case "skills":
        return <SkillsContent skills={skillsData} />;
      default:
        return null;
    }
  };

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
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        bgcolor: "#0a0a0a",
        color: "white",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Left/Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          maxWidth: { xs: "100%", md: "calc(100% - 400px)" },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            mb: { xs: 3, sm: 4 },
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#6200EE",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
            }}
          >
            = Innocent Felix Lutumo
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Mail />}
            onClick={() => setOpenContact(!openContact)}
            sx={{
              width: { xs: "100%", sm: "auto" },
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
            borderRadius: 3,
            p: { xs: 2, sm: 3, md: 4 },
            mb: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Avatar
              src={profileImage}
              sx={{
                width: { xs: 100, sm: 120 },
                height: { xs: 100, sm: 120 },
                mr: { xs: 0, sm: 3 },
                mb: { xs: 2, sm: 0 },
                border: "3px solid #6200EE",
                boxShadow: "0 0 15px rgba(98,0,238,0.6)",
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                }}
              >
                Web Developer & UI/UX Designer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                Passionate full-stack developer dedicated to building elegant,
                scalable digital solutions with a focus on clean UI/UX.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                sx={{
                  mb: 2,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: { xs: "8px 4px", sm: "8px" },
                }}
              >
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
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                flexWrap="wrap"
                justifyContent={{ xs: "center", sm: "flex-start" }}
                mt={2}
              >
                <Chip
                  label="Dar es Salaam"
                  icon={<PersonIcon />}
                  sx={{
                    bgcolor: "#333",
                    color: "white",
                    width: { xs: "100%", sm: "auto" },
                  }}
                />
                <Chip
                  label="+255 616 580 094"
                  icon={<Phone />}
                  sx={{
                    bgcolor: "#333",
                    color: "white",
                    width: { xs: "100%", sm: "auto" },
                  }}
                />
                <Chip
                  label="innocmg23@example.com"
                  icon={<Mail />}
                  sx={{
                    bgcolor: "#333",
                    color: "white",
                    width: { xs: "100%", sm: "auto" },
                  }}
                />
              </Stack>
            </Box>
          </CardContent>
        </Card>

        {/* Skills and Projects Cards */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          sx={{ mb: 4 }}
        >
          <Card
            sx={{
              flex: 1,
              bgcolor: "#1a1a1a",
              color: "white",
              borderRadius: 3,
              p: 2,
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
              },
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Core competencies and tools I use.
              </Typography>
              <Button
                variant="contained"
                startIcon={<CodeIcon />}
                onClick={() =>
                  isTablet
                    ? handleOpenMobileContent("skills")
                    : setActiveDesktopPanelContent("skills")
                }
                sx={{
                  bgcolor: "#6200EE",
                  "&:hover": { bgcolor: "#4B00B2" },
                  color: "white",
                  width: { xs: "100%", sm: "auto" },
                  mt: 2,
                  py: 1.5,
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
              borderRadius: 3,
              p: 2,
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
              },
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
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
                  width: { xs: "100%", sm: "auto" },
                  mt: 2,
                  py: 1.5,
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
            borderRadius: 3,
            p: { xs: 2, sm: 3, md: 4 },
            mb: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Professional Journey
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
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
              onClick={() =>
                isTablet
                  ? handleOpenMobileContent("experience")
                  : setActiveDesktopPanelContent("experience")
              }
              sx={{
                flex: { xs: "auto", sm: 1 },
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
                py: 1.5,
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
              onClick={() =>
                isTablet
                  ? handleOpenMobileContent("education")
                  : setActiveDesktopPanelContent("education")
              }
              sx={{
                flex: { xs: "auto", sm: 1 },
                bgcolor:
                  activeDesktopPanelContent === "education"
                    ? "#03DAC6"
                    : "transparent",
                color:
                  activeDesktopPanelContent === "education"
                    ? "black"
                    : "#03DAC6",
                borderColor: "#03DAC6",
                "&:hover": {
                  bgcolor:
                    activeDesktopPanelContent === "education"
                      ? "#02B8A2"
                      : "rgba(3,218,198,0.1)",
                  borderColor: "#02B8A2",
                },
                py: 1.5,
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
            sx={{ color: "white", mx: { xs: 0.5, sm: 1 } }}
          >
            <GitHub fontSize={isMobile ? "medium" : "large"} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/innocent-lutumo-56969b35b/"
            target="_blank"
            sx={{ color: "white", mx: { xs: 0.5, sm: 1 } }}
          >
            <LinkedIn fontSize={isMobile ? "medium" : "large"} />
          </IconButton>
          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, color: "rgba(255,255,255,0.7)" }}
          >
            © {new Date().getFullYear()} Innocent Lutumo. All rights reserved.
          </Typography>
        </Box>
      </Box>

      <ContactDialog open={openContact} onClose={() => setOpenContact(false)} />

      <ProjectsDialog
        open={openProjects}
        handleClose={() => setOpenProjects(false)}
      />

      {/* Right-Hand Dynamic Content Panel - Only on larger screens */}
      {!isTablet && (
        <Box
          sx={{
            width: "400px",
            flexShrink: 0,
            bgcolor: "#121212",
            boxShadow: "-4px 0 15px rgba(0,0,0,0.7)",
            overflowY: "auto",
            p: 3,
            borderLeft: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {renderDesktopPanelContent()}
        </Box>
      )}

      {/* Mobile-Specific Content Dialog */}
      <Dialog
        fullScreen
        open={openMobileContentDialog}
        onClose={handleCloseMobileContent}
        TransitionComponent={Transition}
        sx={{
          "& .MuiDialog-paper": {
            bgcolor: "#0a0a0a",
            color: "white",
          },
        }}
      >
        <DialogTitle
          sx={{
            bgcolor: "#121212",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#6200EE", fontWeight: "bold" }}
          >
            {mobileDialogContentType === "experience" && "My Experience"}
            {mobileDialogContentType === "education" && "My Education"}
            {mobileDialogContentType === "skills" && "My Skills"}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseMobileContent}
            aria-label="close"
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, sm: 3 }, overflowY: "auto" }}>
          {renderMobileDialogContent()}
        </DialogContent>
      </Dialog>

      {/* Scroll to Top Button */}
      <IconButton
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "#6200EE",
          color: "white",
          "&:hover": { bgcolor: "#4B00B2" },
          zIndex: 999,
          width: { xs: 40, sm: 50 },
          height: { xs: 40, sm: 50 },
          borderRadius: "50%", // Added border-radius for a more standard circular button
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)", // Added shadow for a better look
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <KeyboardDoubleArrowUpIcon
          fontSize={isMobile ? "small" : "medium"} // Responsive icon size
        />
      </IconButton>
    </Box>
  );
};

export default Portfolio;
