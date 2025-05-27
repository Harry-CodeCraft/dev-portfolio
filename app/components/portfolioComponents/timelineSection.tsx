"use client";
import React, { memo, useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme, List, ListItem } from "@mui/material";
import styleConstants from "@/app/theme/styleConstants";

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  location: string;
  subHeading?: string;
  points: string[];
}

function useInView({
  threshold = 0.4,
  once = true,
}: { threshold?: number; once?: boolean } = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setHasBeenInView(true);
          if (once && currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, once]);

  return [ref, once ? hasBeenInView : inView] as const;
}

const ExperienceEntry: React.FC<{ exp: ExperienceItem }> = ({ exp }) => {
  const { colorPalette } = styleConstants;
  const [ref, inView] = useInView({ threshold: 0.4, once: true });
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        mb: 6,
        pl: 4,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        opacity: inView ? 1 : 0,
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {/* Timeline Dot */}
      <Box
        sx={{
          position: "absolute",
          left: -56,
          top: 8,
          width: 20,
          height: 20,
          bgcolor:
            theme.palette.mode === "dark"
              ? colorPalette.offWhite
              : "orange.400",
          borderRadius: "50%",
          border: `4px solid ${colorPalette.azure}`,
          zIndex: 1,
          transition: "transform 0.2s",
        }}
      />
      <Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          {exp.date}
        </Typography>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
          {exp.title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontStyle: "italic", color: "text.secondary", mb: 1 }}
        >
          {exp.company} — {exp.location}
        </Typography>
        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 0.5 }}>
          {exp?.subHeading}
        </Typography>
        <List sx={{ pl: 2, listStyleType: "disc" }}>
          {exp.points.map((point, idx) => (
            <ListItem
              key={idx}
              sx={{ display: "list-item", pl: 0, py: 0, color: "text.primary" }}
            >
              <Typography variant="body1">{point}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

interface TimelineSectionProps {
  jsonData: ExperienceItem[];
  heading: string;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  jsonData,
  heading,
}) => {
  const { colorPalette } = styleConstants;
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.15,
    once: true,
  });
  const theme = useTheme();

  return (
    <Box
      ref={sectionRef}
      id="experience"
      sx={{
        position: "relative",
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 8 },
        bgcolor:
          theme.palette.mode === "dark"
            ? colorPalette.midnightBlue2
            : colorPalette.justWhite,
        overflow: "hidden",
        transform: sectionInView ? "translateY(0)" : "translateY(50px)",
        opacity: sectionInView ? 1 : 0,
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: theme.palette.mode === "dark" ? "#e6e6e6" : "#181d27",
        }}
      >
        {heading}
      </Typography>
      <Box sx={{ position: "relative", pl: 6 }}>
        {/* Timeline vertical line */}
        <Box
          sx={{
            position: "absolute",
            top: 24,
            left: 0,
            width: "4px",
            height: "calc(100% - 24px)",
            bgcolor:
              theme.palette.mode === "dark" ? colorPalette.azure : "orange.400",
            borderRadius: 2,
            zIndex: 0,
          }}
        />
        <Box>
          {jsonData.map((exp, idx) => (
            <ExperienceEntry key={idx} exp={exp} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(TimelineSection);
