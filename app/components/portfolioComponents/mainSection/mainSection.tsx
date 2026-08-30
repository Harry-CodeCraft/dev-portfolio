"use client";

import { ReadMore } from "@mui/icons-material";
import {
  Box,
  Typography,
  Avatar,
  useTheme,
  Grid,
  Button,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";

import { styles } from "@/app/components/portfolioComponents/mainSection/mainStyle";
import SingletonSocialIcon from "@/app/components/reusableComponents/SingletonSocialIcon";
import SocialMediaIcons from "@/app/components/reusableComponents/socialMediaIcons";
import env from "@/app/config/env";
import defaultContent from "@/app/content";

// Only styled for the root container
const Root = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const { mainSection: defaultMainSection } = defaultContent;

const MainSection = ({ content }: { content?: typeof defaultMainSection }) => {
  const mainSection = content ?? defaultMainSection;
  const {
    titles,
    name,
    description,
    readMore,
    fullTimePrefix,
    whoAmI,
    openBrace,
    closeBrace,
  } = mainSection;
  const theme = useTheme();
  const { linkedInProfilePic } = env;
  const sx = useMemo(() => styles(theme), [theme]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (displayed.length < titles[titleIndex].length) {
      timeout = setTimeout(() => {
        setDisplayed(titles[titleIndex].slice(0, displayed.length + 1));
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [displayed, titleIndex, titles]);

  return (
    <Container>
      <Root>
        <Grid
          container
          spacing={4}
          direction="row"
          maxWidth="xl"
          alignItems="center"
          sx={{ justifyContent: { xs: "center", md: "space-around" } }}
        >
          {/* Left Column: Name & Info */}
          <Grid width={{ xs: "100%", md: "30%" }} textAlign="center">
            <Typography variant="h3" component="h1" gutterBottom sx={sx.name}>
              {name}
            </Typography>
            <Typography
              sx={sx.title}
              style={{ minHeight: "2.5rem", fontFamily: "monospace" }}
            >
              {fullTimePrefix}
              {displayed}
              <span className="blink-cursor" style={sx.subheadingName} />
            </Typography>
            <SocialMediaIcons />
            <SingletonSocialIcon icons="Instagram" />
          </Grid>
          <Grid width={{ xs: "100%", md: "32%" }} textAlign="center">
            <Box
              sx={sx.avtaarProfile}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Box
                sx={{
                  ...sx.mainAvtaarWrapper,
                  transform: hovered ? "rotateY(180deg)" : "none",
                }}
              >
                {/* Front Avatar */}
                <Box sx={sx.avtaarWrapper}>
                  <Avatar
                    alt="Harsh Singh"
                    src="/images/profile2.avif"
                    sx={{
                      ...sx.avatar,
                      height: { xs: "100%", md: "300px", lg: "350px" },
                      width: { xs: "100%", md: "300px", lg: "350px" },
                    }}
                  />
                </Box>
                {/* Back Avatar */}
                <Box sx={sx.innerBackAvtaar}>
                  <Avatar
                    alt="Harsh Singh Alt"
                    src={linkedInProfilePic}
                    sx={{
                      ...sx.avatar,
                      height: { xs: "100%", md: "300px", lg: "350px" },
                      width: { xs: "100%", md: "300px", lg: "350px" },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            width={{ xs: "100%", md: "30%" }}
            textAlign="center"
            position="relative"
          >
            <Typography sx={sx.descCoverStart}>
              {whoAmI}
              {openBrace}
            </Typography>
            <Typography variant="body1" sx={sx.description}>
              {description}
            </Typography>
            <Typography sx={sx.descCoverEnd}>{closeBrace}</Typography>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                marginTop: { xs: "20px", md: "10px" },
              }}
              mt={1}
            >
              <a
                href="/harshSinghcv.pdf"
                download
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outlined"
                  sx={sx.resumeButton}
                  endIcon={
                    <ReadMore
                      className="download-icon"
                      sx={{
                        transition: "transform 0.3s, opacity 0.3s",
                        opacity: 0.7,
                      }}
                    />
                  }
                >
                  {readMore}
                </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Root>
    </Container>
  );
};

export default MainSection;
