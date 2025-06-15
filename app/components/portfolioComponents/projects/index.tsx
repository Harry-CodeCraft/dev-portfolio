import { Box, Typography, Chip, styled, Container } from "@mui/material";
import Image from "next/image";
import React, { memo } from "react";

import projects from "@/mock/projects.json"; // Assuming projects.json is in the mock folder

const ProjectCard = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 6,
          textAlign: "left",
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-around",
        }}
      >
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <Box className="card__image">
              <Image
                src={project.image}
                alt={project.title}
                className="image"
                layout="responsive"
                width={350}
                height={180}
              />
            </Box>
            <Box className="card__content">
              <Typography variant="h5" className="card__title">
                {project.title}
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  {project.sub}
                </Typography>
              </Typography>
              <Typography variant="body2" className="card__description">
                {project.description}
              </Typography>
              <Box className="card__tags">
                {project.tags.map((tag, idx) => (
                  <Chip key={idx} label={tag} className="tag" />
                ))}
              </Box>
            </Box>
          </StyledCard>
        ))}
      </Box>
    </Container>
  );
};

const StyledCard = styled(Box)(({ theme }) => ({
  width: "350px",
  transition: "transform 0.3s, box-shadow 0.3s",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  padding: "16px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 12px 0px rgb(0 102 255 / 40%), 0 0 20px 5px rgb(0 102 255 / 10%)"
      : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  "&:hover": {
    transform: "scale(1.08)",
    boxShadow:
      "0 0 12px 2px rgb(0 102 255 / 40%), 0 0 20px 5px rgb(0 102 255 / 20%)",
  },
  border: `1px solid ${theme.palette.primary.main}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  ".card__image": {
    width: "100%",
    height: "180px", // Set a fixed height for the image container
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "16px",
    ".image": {
      width: "100%",
      height: "100%", // Ensure the image fills the container
      objectFit: "cover", // Maintain aspect ratio and crop excess
    },
  },
  ".card__content": {
    textAlign: "left",
    color: theme.palette.text.primary,
  },
  ".card__title": {
    fontWeight: 700,
    marginBottom: "8px",
  },
  ".card__description": {
    marginBottom: "16px",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  ".card__tags": {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "16px",
    justifyContent: "center",
    ".tag": {
      fontSize: "10px",
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  ".card__button": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    textTransform: "none",
  },
}));

ProjectCard.displayName = "ProjectCard";
export default memo(ProjectCard);
