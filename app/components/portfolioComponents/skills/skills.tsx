"use client";

import React, { useMemo } from "react";
import { Box, Typography, useTheme, Paper, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import skills from "@/mock/skillsIcon.json"; // Assuming skills.json is in the mock folder
import { skillsStyles } from "./skillsStyle";

const Skills: React.FC = () => {
  const theme = useTheme();
  const sx = useMemo(() => skillsStyles(theme), [theme]);

  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  return (
    <Box id="skills" ref={sectionRef} sx={sx.mainBox}>
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          mx: "auto",
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
                style={{ width: 112, height: 160, display: "flex" }}
              >
                <Paper elevation={6} sx={sx.skillPaper}>
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
