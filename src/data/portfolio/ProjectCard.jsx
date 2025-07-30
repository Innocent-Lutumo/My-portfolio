import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch"; // Import the icon

const ProjectCard = ({ title, image, description, path }) => {
  return (
    <Card
      sx={{
        maxWidth: 450,
        width: "100%",
        height: "270px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#1a1a1a",
        color: "white",
        borderRadius: 2,
        overflow: "hidden",
        position: "relative", // Essential for absolute positioning of children
        transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
        "&:hover": {
          transform: "translateY(-12px)",
          boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
        },
        pt: 2, // Padding at the top of the card
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt={title}
        sx={{
          objectFit: "cover",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          position: "absolute",
          top: 0,
          left: -5,
          width: "80%",
          transform: "translateY(-20px)",
          borderRadius: "2px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />

      {/* View Project Button - placed absolutely */}
      <Button
        component={Link}
        to={path}
        size="small"
        variant="contained"
        endIcon={<LaunchIcon sx={{ fontSize: "1rem" }} />}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 2,
          borderRadius: 1.5,
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
          color: "white",
          fontWeight: "bold",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
          transition:
            "background 0.3s ease-in-out, transform 0.2s, box-shadow 0.2s",
          minWidth: "unset",
          padding: "4px 10px",
          "& .MuiButton-endIcon": {
            marginLeft: "4px",
            marginRight: "-2px",
          },
          "&:hover": {
            background: "linear-gradient(45deg, #1976D2 30%, #1976D2 90%)",
            transform: "scale(1.05)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        View
      </Button>

      <CardContent
        sx={{
          flexGrow: 1,
          p: 3,
          pt: "calc(150px - 20px + 14px)",
          position: "relative",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(90deg, #2196F3, #21CBF3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6,
            minHeight: "4.5em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
