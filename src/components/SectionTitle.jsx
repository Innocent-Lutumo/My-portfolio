import React from "react";
import { Typography } from "@mui/material";
import AnimatedSection from "./AnimatedSection";

export default function SectionTitle({ children, color = "white" }) {
  return (
    <AnimatedSection>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          mb: 8,
          fontWeight: "bold",
          color: color,
        }}
      >
        {children}
      </Typography>
    </AnimatedSection>
  );
}
