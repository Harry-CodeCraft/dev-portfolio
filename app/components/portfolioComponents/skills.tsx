"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Paper, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styleConstants from "@/app/theme/styleConstants";

const skills = [
  {
    name: "Next.js",
    iconClass: "devicon-nextjs-original-wordmark",
  },
  { name: "React.js", iconClass: "devicon-react-original colored" },
  {
    name: "Angular",
    iconUrl:
      "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/angular/angular-original.svg",
  },
  { name: "Express.js", iconClass: "devicon-express-original colored" },
  { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
  { name: "Java", iconClass: "devicon-java-plain colored" },
  { name: "Python", iconClass: "devicon-python-plain colored" },
  { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
  { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
  { name: "TailwindCSS", iconClass: "devicon-tailwindcss-plain colored" },
  { name: "Kubernetes", iconClass: "devicon-kubernetes-plain colored" },
  { name: "Docker", iconClass: "devicon-docker-plain colored" },
  {
    name: "AWS",
    iconClass: "devicon-amazonwebservices-plain-wordmark colored",
  },
  {
    name: "Azure",
    iconClass: "devicon-azure-plain colored",
  },
  {
    name: "Git",
    iconClass: "devicon-git-plain colored",
  },
  {
    name: "ChatGPT API",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
];

const Skills: React.FC = () => {
  const theme = useTheme();
  const { colorPalette } = styleConstants;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hovering, setHovering] = useState(false);

  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    const darkQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (darkQuery) {
      setIsDarkMode(darkQuery.matches);
      const handleDarkModeChange = (e: MediaQueryListEvent) =>
        setIsDarkMode(e.matches);
      darkQuery.addEventListener("change", handleDarkModeChange);
      return () =>
        darkQuery.removeEventListener("change", handleDarkModeChange);
    }

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <Box
      id="skills"
      ref={sectionRef}
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Lamp Effect - Only Dark Mode */}
      {isDarkMode && (
        <motion.div
          animate={{
            width: hovering ? 500 : 400,
            height: hovering ? 500 : 400,
            opacity: hovering ? 1 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          style={{
            pointerEvents: "none",
            position: "absolute",
            zIndex: 30,
            mixBlendMode: "soft-light",
            top: position.y - (hovering ? 250 : 200) + window.scrollY,
            left: position.x - (hovering ? 250 : 200) + window.scrollX,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(circle, #fdba74 30%, #fb923c 50%, transparent 80%)",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          />
        </motion.div>
      )}
      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          mx: "auto",
          px: { xs: 2, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "left",
          }}
        >
          Skills
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2, lg: 4 },
            mt: 6,
            justifyContent: "flex-start",
          }}
        >
          {skills.map((skill, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  scale: 0.4,
                  filter: "blur(10px)",
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      }
                    : {}
                }
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 15,
                  mass: 1,
                  delay: idx * 0.07,
                }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                style={{ width: 112, height: 160, display: "flex" }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: theme.palette.mode === "dark" ? "#23283b" : "#fff",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid",
                    borderColor: colorPalette.azure,
                    boxShadow:
                      "0 0 12px 2px rgba(25,118,210,0.4), 0 0 20px 5px rgba(251,146,60,0.1)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "scale(1.08)",
                      boxShadow:
                        "0 0 20px 5px rgba(25,118,210,0.7), 0 0 32px 8px rgba(251,146,60,0.2)",
                    },
                  }}
                >
                  {skill.iconClass ? (
                    <i
                      className={`${skill.iconClass}`}
                      style={{
                        fontSize: 40,
                        marginBottom: 16,
                      }}
                    />
                  ) : skill.iconUrl ? (
                    <Avatar
                      src={skill.iconUrl}
                      alt={skill.name}
                      sx={{
                        width: 40,
                        height: 40,
                        mb: 2,
                        bgcolor: "transparent",
                        objectFit: "contain",
                      }}
                      variant="rounded"
                    />
                  ) : (
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        mb: 2,
                        bgcolor: "grey.300",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: 13,
                      color: theme.palette.mode === "dark" ? "#e0e0e0" : "#333",
                      wordBreak: "break-word",
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Paper>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
