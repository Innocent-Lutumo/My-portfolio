import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref) observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "left":
          return "translateX(-50px)";
        case "right":
          return "translateX(50px)";
        case "down":
          return "translateY(-50px)";
        default:
          return "translateY(50px)";
      }
    }
    return "translateY(0px) translateX(0px)";
  };

  return (
    <Box
      ref={setRef}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </Box>
  );
}
